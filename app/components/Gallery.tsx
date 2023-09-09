import Card from "./Card";

export default function Gallery({lang}: {lang: string}) {

    return (
<section className="h-auto max-w-screen-xl mx-auto py-10 border" id="gallery">
    <h2 className="text-5xl text-center py-3">Product Gallery</h2>
    <div className="flex-wrap lg:flex justify-center">
        <Card 
			title="Litho Photo"
			path_to_img="/products/litho-photo/photo1.jpg"
            link={`${lang}/photo`}
			alt ="Litho Photo"/>
        <Card 
			title="Night Lamp"
			path_to_img="/products/litho-photo/photo1.jpg"
            link={`${lang}/night_lamp`}
			alt ="some description"/>
        <Card 
			title="Cylinder Lamp"
			path_to_img="/products/litho-photo/photo1.jpg"
            link={`${lang}/cylinder_lamp`}
			alt ="some description"/>
        <Card 
			title="Cube Lamp"
			path_to_img="/products/litho-photo/photo1.jpg"
            link={`${lang}/cube_lamp`}
			alt ="some description"/>
    </div>
</section>
    );
}