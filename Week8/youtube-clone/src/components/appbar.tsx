import { SearchBar } from "./searchbar";

export function Appbar (){

    return <div className="grid grid-cols-8 items-center">
        <div className="col-span-2">
            <img src="ytlogo.png" className="h-16 md:h-20 lg:h-24 p-2"></img>
        </div>
        <div className="col-span-4">
            <SearchBar></SearchBar>
        </div>
        <div className="col-span-2">
            signin
        </div>



    </div>


}