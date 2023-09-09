import Home from "../components/Home"
import Gallery from "../components/Gallery"

// export function generateStaticParams() {
//   return [{ lang: 'en' }, { lang: 'ru' }, { lang: 'hy' }]
// }


export default function Page({ params }: { params: { lang: string } }) {

  return (
  <div className="">
    {/* My Post: {params.lang} */}
    <Home />
    <Gallery />

  </div>)
  }