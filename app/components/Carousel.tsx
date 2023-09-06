'use client'
 
import { useState } from 'react'
import Image from "next/image"

interface Pictures {
	paths_to_pictures: string[];
}

export default function Carousel({ paths_to_pictures } : Pictures) {
	const imagesLength = paths_to_pictures.length;

	const [index, setIndex] = useState(0)

    return (
    <div className="relative" onClick={() => setIndex((index === 0) ? imagesLength - 1: index -1)}>

      <div className="absolute left-0 top-1/2 hover:text-gray-100">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
					<path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
				</svg>
      </div>
			<div>
				<Image
							className=''
							src={paths_to_pictures[index]}
							width={640}
							height={640}
							alt="Litho"
						/>
			</div>

			<div className="absolute right-0 top-1/2 hover:text-gray-100" onClick={() => setIndex((index + 1) % imagesLength)}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
					<path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
				</svg>
			</div>
    </div>
    )
}