import fs from "fs";
import path from "path";

import Carousel from "@/app/components/Carousel"
import { prod, productLinks, getProduct, Product } from "@/app/products";

import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

console.log()

export async function generateStaticParams() {
    return productLinks
    // return [{ products: 'litho_photo' }, { products: 'night_lamp' }, { products: 'cylinder_lamp' }, {products: 'cube_lamp'}]
  }

// let imagePaths = ["/products/litho_photo/photo1.jpg", "/products/litho_photo/photo2.jpg"];


export default async function Product( { params: {lang, products} }: { params: { lang: Locale, products: string }} 
    ) {
        console.log(products)

        const currentProduct: Product = getProduct(prod, products)

        const dictionary = await getDictionary(lang)
        const product_translation = dictionary.Product[products]

    return (
        <section className="py-10 max-w-screen-xl m-auto border">
            <h3 className="py-3 text-center text-5xl text-gray-800">{product_translation.title}</h3>
            <div className="lg:flex justify-evenly">
                <div className="block lg:w-1/2 px-5">
                    <Carousel paths_to_pictures={currentProduct.pathToImages}/>
                </div>
                <p className="p-10 lg:w-1/2 border">
                    {product_translation.description}
                </p>
            </div>               
        </section>
    )
}