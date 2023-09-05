import Image from "next/image";

interface Card {
    title: string,
    path_to_img: string,
    content: string
}

export default function Card({title, path_to_img, content}: Card) {
    return (
        <div className="relative border text-center m-1">
            <Image
            className='m-auto '
            src={path_to_img}
            width={600}
            height={600}
            alt="Product alt name..."
          />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 opacity-70">
                <h3 className="text-5xl text-yellow-100 py-4">{title}</h3>
            </div>

            {/* <p className="py-2">
                {content}
            </p> */}
        </div>
    );
}