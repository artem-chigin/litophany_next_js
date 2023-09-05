import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="bg-slate-700 border-b p-2">
          <div className="flex items-center justify-between h-auto max-w-screen-xl mx-auto text-amber-100">
            <Image
            className='justify-self-start'
            src="/logo.png"
            width={200}
            height={200}
            alt="Litho"
          />
            <nav className="flex items-center">
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
            </nav>
          </div>
 
      </header>
    )
};