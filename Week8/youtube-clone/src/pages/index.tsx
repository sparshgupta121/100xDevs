import Image from "next/image";
import {Videocard} from "@/components/videocard"
import { Inter } from "next/font/google";
import { Videogrid } from "@/components/videogrid";
import { Appbar } from "@/components/appbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Appbar></Appbar>
      <Videogrid></Videogrid>
    </div>
     );
}
