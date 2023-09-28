'use client'

import { use, useState } from "react";
import { Locale } from "@/i18n-config";
import Link from "next/dist/client/link";


export default function LangDropdown( {lang}: {lang: Locale}) {
    const [dropdownState, setDropdownState] = useState("hidden");

    return (
        <div className="inline">
            <div className="flex items-center  hover:text-slate-800 hover:bg-slate-500"  onClick={() => setDropdownState((dropdownState === "visible") ? "hidden": "visible")} >
                <button className="inline px-6 py-3">{lang}</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>

        <div id="myDropdown" className={`${dropdownState} absolute border`}>
          <ul>
            <li>
                <Link href="#">English</Link>
            </li>
            <li>
                <Link href="#">Русский</Link>
            </li>
            <li>
                <Link href="#">Hy</Link>
            </li>
          </ul>
        </div>
      </div> 
    )
}