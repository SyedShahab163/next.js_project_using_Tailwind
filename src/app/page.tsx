import Image from 'next/image'
import bbb from '../../public/bbb.jpg';
import Link from 'next/link';
// import video from "next/video"
import Navber from "../component/Navber"
import Footer from '@/component/Footer';
import next from 'next';

export default function Page() {
  return (
    <>
    <Navber/>
<div><Image src={bbb} width={10000} height={100} alt='music' /></div>
    <div className="flex"></div>
      <div className='border-collapse'>
    <h1>ZAIDI</h1>
      </div>
     
<div/>
<div>
    </div>
  {/* <Footer/> */}
    </>
  )
}