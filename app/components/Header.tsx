import Image from "next/image"
import NavMenu from "./NavMenu"
import LangDropdown from "./LangDropdown"
import { Locale } from "@/i18n-config"

export default function Header( {lang, menu}: {lang: Locale, menu: any}) {
    return (
        <header className="bg-slate-700 p-2">
          <div className="flex items-center justify-between h-auto m-auto text-amber-100 lg:max-w-screen-xl ">
            <Image
              className=''
              src="/logo.png"
              width={200}
              height={200}
              alt="Litho"
            />
            <div className="flex">
              <NavMenu lang={lang} menu={menu}/>
              {/* <LangDropdown lang={lang} /> */}
            </div>

          </div>
 
      </header>
    )
};