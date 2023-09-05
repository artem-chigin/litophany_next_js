import Card from "./Card";

export default function Gallery() {
    // let products = (
    //     <Card title={"some title"} path_to_img={"/poducts/litho-photo/photo1.jpg"} content={"some description"}/>
    // );
    return (
<section className="h-auto max-w-screen-xl mx-auto py-10 border">
    <h2 className="text-5xl text-center py-3">Product Gallery</h2>
    <div className="flex-wrap lg:flex justify-center">
        <Card 
			title="Litho Photo"
			path_to_img="/products/litho-photo/photo1.jpg"
			content ="some description"/>
        <Card 
			title="Night Lamp"
			path_to_img="/products/litho-photo/photo1.jpg"
			content ="some description"/>
        <Card 
			title="Cylinder Lamp"
			path_to_img="/products/litho-photo/photo1.jpg"
			content ="some description"/>
        <Card 
			title="Cube Lamp"
			path_to_img="/products/litho-photo/photo1.jpg"
			content ="some description"/>
    </div>
</section>
    );
}