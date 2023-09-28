'use client'

import Link from "next/link";
import { use, useState, MouseEvent, FocusEvent } from "react";
import { useOutsideClick } from "../click_outside";

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
    const [menuState, setMenuState] = useState("hidden");

    const ref = useOutsideClick(() => {
        setMenuState("hidden")
        console.log('Clicked outside of MyComponent');
      });


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
        
            <div ref={ref} className="visible lg:invisible">
                <div className="dropdown-btn flex justify-end" onClick={() => setMenuState((menuState === "visible") ? "hidden": "visible")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                
                {/* <hr></hr> */}

                <div className={`dropdown-menu ${menuState} my-5 absolute right-0 lg:hidden`}>
                    <ul className="text-end">
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