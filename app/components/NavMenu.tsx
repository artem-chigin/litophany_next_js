'use client'

import Link from "next/link";
import { use, useState } from "react";

import LangDropdown from "./LangDropdown";
import { Locale } from "@/i18n-config";

interface bar {
    home: string,
    product: string,
    contact_us: string
};

export default function NavMenu( {lang, menu} : {lang: Locale, menu: bar}) {
    // const menu: bar = navBar[lang];
    // console.log(typeof(data))

    const [menuType, setmenuType] = useState("hidden");
    return (
        <nav className="flex items-center">

            <div className="hidden lg:flex">
                <ul className="inline-flex items-center">
                    <li className="nav-element">
                    <Link href={`/${lang}/`}>{menu.home}</Link>
                    </li>
                    <li className="nav-element">
                    <Link href={`/${lang}#gallery`}>{menu.product}</Link>
                    </li>
                    <li className="nav-element">
                    <Link href={`/${lang}#contacts`}>{menu.contact_us}</Link>
                    </li>
                </ul>
                <LangDropdown lang={lang}/>
            </div>
        
            <div className="visible lg:invisible">
                <div className="flex justify-end" onClick={() => setmenuType((menuType === "visible") ? "hidden": "visible")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                
                {/* <hr></hr> */}

                <div className={`${menuType} my-5 absolute right-0`}>
                    <ul className="text-end lg:hidden">
                        <li className="nav-element">
                        <Link href={`/${lang}/`}>{menu.home}</Link>
                        </li>
                        <li className="nav-element">
                        <Link href={`/${lang}#gallery`}>{menu.product}</Link>
                        </li>
                        <li className="nav-element">
                        <Link href={`/${lang}#contacts`}>{menu.contact_us}</Link>
                        </li>
                    </ul>
                    
                    <LangDropdown lang={lang} />
                </div>
            </div>

      </nav>
    );
}