// 'use client'
 
// import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from 'next/link';

interface Card {
    title: string,
    path_to_img: string,
    link: string,
    alt: string
}


export default function Card({title, path_to_img, link, alt}: Card) {

    // const router = useRouter()

    return (
        <div className="relative border-4 text-center m-1 hover:border-slate-500">
            <Link href={`/${link}`}>
                <Image
                    className='m-auto '
                    src={path_to_img}
                    width={600}
                    height={600}
                    alt={alt}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gray-800 opacity-70">
                    <h3 className="text-5xl text-yellow-100 py-4">{title}</h3>
                </div>
            </Link>

        </div>
    );
}