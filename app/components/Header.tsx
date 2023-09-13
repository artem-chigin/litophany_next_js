import Image from "next/image"

import NavMenu from "./NavMenu"

export default function Header( {lang, menu}: {lang: string, menu: object}) {
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
            <NavMenu lang={lang} menu={menu}/>
          </div>
 
      </header>
    )
};