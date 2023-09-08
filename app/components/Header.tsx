import Image from "next/image"

import NavMenu from "./NavMenu"

export default function Header() {
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
            <NavMenu/>
          </div>
 
      </header>
    )
};