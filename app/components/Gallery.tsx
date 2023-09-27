import Card from "./Card";
import { prod } from "../products";

// interface GalleryHeader {
//     header: string,
// }

export default function Gallery({lang, data}: {lang: string, data: any}) {
    const galleryContent = prod.map((product, index) => 
        <Card 
            title={data.products[product.nameForLink]}
            path_to_img={product.pathToImages[0]}
            link={`${lang}/${product.nameForLink}`}
            alt={product.altForImage}
            key={index}
        />
    );
    return (
<section className="h-auto max-w-screen-xl mx-auto py-10 border" id="gallery">
    <h2 className="text-5xl text-center py-3">{data.header}</h2>
    <div className="flex-wrap lg:flex justify-center">
        {galleryContent}
        {/* <Card 
			title={data.products.photo}
			path_to_img="/products/litho_photo/photo1.jpg"
            link={`${lang}/litho_photo`}
			alt ="Litho Photo"/>
        <Card 
			title={data.products.night_lamp}
			path_to_img="/products/night_lamp/photo1.jpg"
            link={`${lang}/night_lamp`} 
			alt ="Image of Nightlamp"/>
        <Card 
			title={data.products.cylinder_lamp}
			path_to_img="/products/cylinder_lamp/photo1.jpg"
            link={`${lang}/cylinder_lamp`}
			alt ="Image of Cylinder Lamp"/>
        <Card 
			title={data.products.cube_lamp}
			path_to_img="/products/cube_lamp/photo1.jpg"
            link={`${lang}/cube_lamp`} 
			alt ="Image of Cube Lamp"/> */}
    </div>
</section>
    );
}