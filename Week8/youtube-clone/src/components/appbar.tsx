import { SearchBar } from "./searchbar";

export function Appbar (){

    return <div className="grid grid-cols-8 items-center">
        <div className="col-span-2">
            <img src="ytlogo.png" className="h-10 md:h-12 lg:h-16 p-2"></img>
        </div>
        <div className="col-span-4">
            <SearchBar></SearchBar>
        </div>
        <div className="col-span-1">
        </div>
        <div className="col-span-1">
        
        <button type="button" className="  text-white bg-gray-500 hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
Sign-in
</button>
        </div>



    </div>


}