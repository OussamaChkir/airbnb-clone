import { Bars3Icon, GlobeEuropeAfricaIcon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import { url } from "inspector"
import Image from "next/image"

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-sm p-5 md:px-10">

      {/*left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image src={"/Airbnb-Logo.png"} alt="logo" layout="fill" objectPosition="left" objectFit="contain"/>
      </div>

      {/*middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start your search"/>
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-1 cursor-pointer  md:mx-2" /> 
      </div>

      {/*right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeEuropeAfricaIcon className="h-6 cursor-pointer"/>
          <div className="flex items-center space-x-2 p-2 border-2 rounded-full">
            <Bars3Icon className="h-6"/>
            <UserCircleIcon className="h-6"/>
          </div>
      </div>

    </header>
  )
}

export default Header