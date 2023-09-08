'use client'

import Link from "next/link";
import { use, useState } from "react";

export default function NavMenu() {

    const [menuType, setmenuType] = useState("hidden");
    return (
        <nav className="flex items-center">

            <div className="hidden lg:block">
                <ul className="inline-flex items-center">
                    <li className="nav-element">
                    <Link href="#">Home</Link>
                    </li>
                    <li className="nav-element">
                    <Link href="#product">Product</Link>
                    </li>
                    <li className="nav-element">
                    <Link href="#contact">Contact us</Link>
                    </li>
                </ul>
            </div>
        
            <div className="visible lg:invisible">
                <div className="flex justify-end" onClick={() => setmenuType((menuType === "visible") ? "hidden": "visible")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                
                {/* <hr></hr> */}

                <div className={menuType}>
                    <ul className="text-end lg:hidden">
                        <li className="nav-element">
                        <Link href="#">Home</Link>
                        </li>
                        <li className="nav-element">
                        <Link href="#product">Product</Link>
                        </li>
                        <li className="nav-element">
                        <Link href="#contact">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>

      </nav>
    );
}