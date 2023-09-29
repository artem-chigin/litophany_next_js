import Image from "next/image"
import NavMenu from "./NavMenu"
import Link from "next/link"
import { Locale } from "@/i18n-config"

export default function Header( {lang, menu}: {lang: Locale, menu: any}) {
    return (
        <header className="bg-slate-700 p-2">
          <div className="flex items-center justify-between h-auto m-auto text-amber-100 lg:max-w-screen-xl ">
            <Link className="w-1/3 lg:w-1/6" href={`/${lang}`}>
              <Image
                className=''
                src="/logo.png"
                width={2072}
                height={589}
                alt="Litho"
              />
            </Link>

            <div className="flex">
              <NavMenu lang={lang} menu={menu}/>
            </div>

          </div>
 
      </header>
    )
};