import Image from "next/image"
import bbb from "../../public/bbb.jpg"
export default function Page() {
  return (
    <>

        <div> <Image src={bbb} width={100} height={100} alt='music' /> 
         <h1 className="text-3xl font-bold underline"> 
         Hello, Next.js from Zia Khan!
 <div color="	#000000">bhai salam</div>
         </h1> 
         </div>
       </>
         )
  }
     