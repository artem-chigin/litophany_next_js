import fs from "fs";
import { type } from "os";
import path from "path";


export interface Product {
    title: string,
    pathToImages: string[],
    nameForLink: string,
    altForImage: string,
    description: string,
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
        let currentProduct: Product = {
            title: name.replace("_", " "),
            pathToImages: files.map((file) => `/products/${name}/${file}`),
            nameForLink: name,
            altForImage: `Image of ${name}`,
            description: "some description"
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

export {productLinks, prod, getProduct, createProducts}