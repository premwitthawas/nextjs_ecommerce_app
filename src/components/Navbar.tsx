import Link from "next/link"
import Menu from "./Menu"
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="md:hidden h-full flex items-center justify-between">
        <div className="flex gap-1.25">
          <Image src='/logo/logo.svg' alt="logo" width={24} height={24} />
          <Link className="font-bold tracking-wide underline" href={'/'}>Ecommerce<span className="text-green-600 font-medium">App</span></Link>
        </div>
        <Menu />
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-2/3 flex gap-12 items-center justify-center">
          <Link className="flex items-center font-bold tracking-wide underline" href={'/'}>
            <Image src='/logo/logo.svg' alt="logo" width={24} height={24} />Ecommerce<span className="text-green-600 font-medium">App</span>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/3 gap-4 flex flex-row items-center justify-between">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  )
}

export default Navbar