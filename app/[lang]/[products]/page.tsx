import fs from "fs";
import path from "path";

import Carousel from "@/app/components/Carousel"

const postsDirectory = path.join(process.cwd(), "temp");


function getProductData() {
    const filenames = fs.readdirSync(postsDirectory)
    return filenames
};



export async function generateStaticParams() {

    return [{ products: 'photo' }, { products: 'night_lamp' }, { products: 'cylinder_lamp' }, {products: 'cube_lamp'}]
  }

let imagePaths = ["/products/litho-photo/photo1.jpg", "/products/litho-photo/photo2.jpg"];


export default function Product( params: { products: string }
    ) {
        let x = postsDirectory
        console.log(x)

    return (
        <section className="py-10 max-w-screen-xl m-auto border">
            <h3 className="py-3 text-center text-5xl text-gray-800">Litho Photo</h3>
            <div className="lg:flex justify-evenly">
                <div className="block lg:w-1/2 px-5">
                    <Carousel paths_to_pictures={imagePaths}/>
                </div>
                <p className="p-10 lg:w-1/2 border">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>               
        </section>
    )
}