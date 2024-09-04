
export function Videocard(props:any){

    return <div className="p-3 cursor-pointer">
        <img src={props.thumbnail} className="pb-3 rounded-lg" ></img>
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <img src={props.channelimage} className="rounded-full w-20 h-20 "></img>
            </div>
            <div className="col-span-10">
                <div>
                {props.title}                
                </div>
                <div className="col-span-11 text-gray-400 text-base">
                {props.author}
            </div>
            <div className="col-span-11 text-gray-400 text-base">
                {props.views} * {props.timestamp}
            </div>

            </div>
           
            


        </div>
    </div>


}