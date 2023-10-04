import fs from "fs";
import { type } from "os";
import path from "path";
import { Locale } from "@/i18n-config";

// import { remark } from 'remark';
// import html from 'remark-html';
// import remarkHtml from "remark-html";
// import {unified} from 'unified'

// import matter from 'gray-matter';

import { micromark } from "micromark";
import {gfm, gfmHtml} from 'micromark-extension-gfm'



export interface Product {
    title: string,
    pathToImages: string[],
    nameForLink: string,
    altForImage: string,
    descriptions: string[],
};

const productsDirectory = path.join(process.cwd(), "/public/products/");

function getProductNames(productFolder = "") {
    const filenames = fs.readdirSync(productsDirectory + `${productFolder}`) 

    return filenames
};


function createProducts() {
    let products = [];
    const productNames = getProductNames();

    for (let name of productNames) {
        const files = getProductNames(name)
        const imageFiles = files.filter(value => value.endsWith(".jpg" || ".JPG" || ".png"))
        const markdownFiles = files.filter(value => value.endsWith(".md"))
        let currentProduct: Product = {
            title: name.replace("_", " "),
            pathToImages: imageFiles.map((file) => `/products/${name}/${file}`),
            nameForLink: name,
            altForImage: `Image of ${name}`,
            descriptions: markdownFiles
        }
        products.push(currentProduct)
    }
    return products
} 

const prod = createProducts();
const productLinks = prod.map((prod) => ({products: prod.nameForLink}));

function getProduct(prods: any, nameForLink: string) {
    for (const product of prods) {
        if (product.nameForLink === nameForLink){ 
            // console.log(product)
            return product
        }
    }
}

function getDescriptionForLang(product: Product, lang: Locale): string {
    for (let fileName of product.descriptions) {
        if (fileName.startsWith(lang)) {
            const fullpath = path.join(process.cwd(), `public/products/${product.nameForLink}/${fileName}`)
            const content = fs.readFileSync(fullpath, "utf-8")
            const htmlContent = micromark(content, {
                allowDangerousHtml: true,
                extensions: [gfm()],
                htmlExtensions: [gfmHtml()]
              })
            return htmlContent
        }
    }

    return ""
}

export {productLinks, prod, getProduct, createProducts, getDescriptionForLang}