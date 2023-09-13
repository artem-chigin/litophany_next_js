import Home from "../components/Home"
import Gallery from "../components/Gallery"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { getDictionary } from "../../get-dictionary"
import { Locale } from "../../i18n-config"


export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  return (
  <div className="">
    <Header lang={lang} menu={dictionary.Navbar} />

    {/* My Post: {dictionary.Page.title} */}
    <Home />
    <Gallery lang={lang}/>

    <Footer />


  </div>)
  }