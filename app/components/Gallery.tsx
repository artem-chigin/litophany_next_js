import Card from "./Card";

// interface GalleryHeader {
//     header: string,
// }

export default function Gallery({lang, data}: {lang: string, data: any}) {

    return (
<section className="h-auto max-w-screen-xl mx-auto py-10 border" id="gallery">
    <h2 className="text-5xl text-center py-3">{data.header}</h2>
    <div className="flex-wrap lg:flex justify-center">
        <Card 
			title={data.products.photo}
			path_to_img="/products/litho-photo/photo1.jpg"
            link={`${lang}/photo`}
			alt ="Litho Photo"/>
        <Card 
			title={data.products.night_lamp}
			path_to_img="/products/litho-photo/photo1.jpg"
            link={`${lang}/night_lamp`}
			alt ="some description"/>
        <Card 
			title={data.products.cylinder_lamp}
			path_to_img="/products/litho-photo/photo1.jpg"
            link={`${lang}/cylinder_lamp`}
			alt ="Image of Cylinder Lamp"/>
        <Card 
			title={data.products.cube_lamp}
			path_to_img="/products/cube_lamp/photo1.jpg"
            link={`${lang}/cube_lamp`} 
			alt ="Image of Cube Lamp"/>
    </div>
</section>
    );
}