import { Videocard } from "./videocard"

const Videos=  [
    {
      thumbnail: "/thumbnail.png",
      channelimage: "/channellogo.png",
      title: "Learning JavaScript || Beginner Guide",
      author: "John Doe",
      views: "2M",
      timestamp: "3 weeks ago"
    },
    {
        thumbnail: "/thumb1.png",
        channelimage: "/channellogo.png",
      title: "Daily Vlog || Life in the City",
      author: "Jane Smith",
      views: "4M",
      timestamp: "5 days ago"
    },
    {
        thumbnail: "/thumb2.png",
        channelimage: "/channellogo.png",
      title: "Advanced React.js || Tips and Tricks",
      author: "Alice Johnson",
      views: "22M",
      timestamp: "2 years ago"
    },
    {
        thumbnail: "/thumb3.png",
        channelimage: "/channellogo.png",
      title: "How to Stay Productive || Work from Home",
      author: "Michael Brown",
      views: "6M",
      timestamp: "6 months ago"
    },
    {
        thumbnail: "/thumb4.png",
        channelimage: "/channellogo.png",
      title: "Top 5 Web Development Tools || 2024 Edition",
      author: "Emma Wilson",
      views: "13M",
      timestamp: "2 months ago"
    },
    {
        thumbnail: "/thumb5.png",
        channelimage: "/channellogo.png",
      title: "Unboxing the Latest Gadgets || Tech Review",
      author: "Liam Martinez",
      views: "10M",
      timestamp: "1 week ago"
    },
    {
        thumbnail: "/thumb6.png",
        channelimage: "/channellogo.png",
      title: "Home Workout Routine || Get Fit Fast",
      author: "Sophia Davis",
      views: "9M",
      timestamp: "1 month ago"
    },
    {
        thumbnail: "/thumbb.png",
        channelimage: "/channellogo.png",
      title: "Exploring New York || Travel Guide",
      author: "Noah Garcia",
      views: "8M",
      timestamp: "9 months ago"
    },
    {
        thumbnail: "/thumb3.png",
        channelimage: "/channellogo.png",
      title: "Epic Gaming Moments || Best of 2024",
      author: "Isabella Miller",
      views: "28M",
      timestamp: "3 days ago"
    },
    {
        thumbnail: "/thumb1.png",
        channelimage: "/channellogo.png",
      title: "Acoustic Guitar Cover || Popular Hits",
      author: "Mason Anderson",
      views: "4M",
      timestamp: "3 months ago"
    },
    {
        thumbnail: "/thumb4.png",
        channelimage: "/channellogo.png",
      title: "Time Management Tips || Boost Your Efficiency",
      author: "Olivia Lee",
      views: "7M",
      timestamp: "5 weeks ago"
    },
    {
        thumbnail: "/thumbb.png",
        channelimage: "/channellogo.png",
      title: "Live Coding Session || Building a Portfolio",
      author: "Elijah Taylor",
      views: "19M",
      timestamp: "4 days ago"
    }
  ]

export const Videogrid= ()=>{
return<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

    {Videos.map((video)=><>
    
    
    <Videocard 
    
    thumbnail={video.thumbnail} channelimage={video.channelimage} title={video.title} author={video.author} views={video.views} timestamp={video.timestamp}
    
    ></Videocard>
    
    </>)}

</div> 
}