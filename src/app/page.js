import Image from "next/image";
import Header from "./header";

export default function Home() {
  return (
    <div
    className="bg-main h-screen"
    >
<Header/>

<div 
className="flex items-center h-[calc(100vh-100px)] px-16"
// style={{
//   height:"calc(100vh-100px)"
// }}
>
<span 
className="text-8xl font-bold font-Mon"
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
