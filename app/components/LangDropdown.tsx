'use client'

import { use, useState } from "react";
import { Locale } from "@/i18n-config";
import Link from "next/dist/client/link";
import { useOutsideClick } from "../click_outside";


export default function LangDropdown( {lang}: {lang: Locale}) {
    const [dropdownState, setDropdownState] = useState("hidden");

    const ref = useOutsideClick(() => {
        setDropdownState("hidden")
        // console.log('Clicked outside of MyComponent');
      });

    return (
        <div ref={ref} className="inline">
            <div  className="flex items-center justify-end px-4  hover:text-slate-800 hover:bg-slate-500"  onClick={() => setDropdownState((dropdownState === "visible") ? "hidden": "visible")} >
                <button className="inline py-3 px-3">{lang}</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>

        <div id="myDropdown" className={`${dropdownState} absolute p-3 text-right`}>
          <ul className="text-xl">
            <li className="hover:border-b">
                <Link href={`/en/`}>English</Link>
            </li>
            <li className=" hover:border-b">
                <Link href={`/ru/`}>Русский</Link>
            </li>
            <li className=" hover:border-b">
                <Link href={`/hy/`}>Հայերեն</Link>
            </li>
          </ul>
        </div>
      </div> 
    )
}