'use client'
import { Bars3Icon, GlobeEuropeAfricaIcon, MagnifyingGlassIcon, UserCircleIcon, UserIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useState } from "react"
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Header({placeholder}:any) {

const [searchInput, setSearchInput] = useState("");

const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
const [numberOfGuests, setNumberOfGuests] = useState(1);
const router = useRouter();

const selectionRange ={
  startDate:startDate,
  endDate:endDate,
  key:'selection',
}


function handleSelect(ranges:any){
  setStartDate(ranges.selection.startDate);
  setEndDate(ranges.selection.endDate);
}

function handleSearch(){
  const params = new URLSearchParams();
  params.set("location", searchInput);
  params.set("startDate", startDate.toISOString());
  params.set("endDate", endDate.toISOString());
  params.set("noOfGuests", numberOfGuests.toString());

  router.push("search"+ "?" + params.toString());
  
}

function handleReset(){
  setSearchInput("");
  setStartDate(new Date());
  setEndDate(new Date());
  setNumberOfGuests(1);
}



  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-sm p-5 md:px-10">

      {/*left */}
      <div onClick={()=>router.push('/')} className="relative flex items-center h-8 w-36 cursor-pointer my-auto">
        <Image src={"/Airbnb-Logo.png"} alt="logo" fill  />
      </div>

      {/*middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder={placeholder? placeholder:"Start your search"}/>
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
        {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
            <DateRangePicker ranges={[selectionRange]} minDate={new Date()} rangeColors={["#FD5B61"]} onChange={handleSelect} />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
              <UserIcon className="h-5 "/>
              <input className="w-12 pl-2 text-lg outline-none text-red-400" min={1} type="number" value={numberOfGuests} onChange={(e)=>setNumberOfGuests(parseInt(e.target.value))}/>
            </div>
            <div className="flex ">
              <button onClick={handleReset} className="flex-grow text-gray-500">Cancel</button>
              <button onClick={handleSearch} className="flex-grow text-red-400">Search</button>
            </div>
        </div>
        )}
    </header>
  )
}

export default Header