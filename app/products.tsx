
interface Product {
    title: string,
    pathToMainImage: string,
    pathToImages: string[],
    nameForLink: string,
    altForImage: string,
    description: string,

}

function createProduct({title, altForImage}: Product) {
    const prod: Product = {
        title: title,

    }
}

export const products = [lithoPhoto];
