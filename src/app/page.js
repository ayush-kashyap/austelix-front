import Image from "next/image";
import Header from "./header";

export default function Home() {
  return (
    <div
    className="bg-main h-screen"
    >
<Header/>

<div 
className="flex items-center justify-center md:justify-start h-[calc(100vh-100px)] md:px-16"
// style={{
//   height:"calc(100vh-100px)"
// }}
>
<span 
className="md:text-8xl sm:text-7xl text-5xl text-center md:text-left font-bold font-Mon"
>
  Coming 
  <br/>
  <span 
  className="text-secondary"
  >Soon</span>
</span>
</div>
    </div>
   
    
    
  );
}
