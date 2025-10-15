import Link from "next/link"
import { Button } from "./ui/button"

//components
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white sticky top-0 z-50 ">
        <div className="w-full flex justify-between items-center px-8 xl:px-32 2xl:px-64">

            {/*logo*/}
            <Link href="/">
            <h1 className="text-2xl font-semibold">
                Shivani<span className="text-purple-400">.</span>
                </h1>
            </Link>
            {/* desktop navBar & hire me button */}
            <div className="hidden xl:flex items-center gap-8">
            <Nav/>
            <Link href="/contact">
            <Button>Hire Me</Button>
            </Link>
            </div>

            {/*mobile nav */}
            <div className="xl:hidden">
              <MobileNav/>
              </div>
        </div>
    </header>
  )
}

export default Header
