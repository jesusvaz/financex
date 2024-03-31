import Image from "next/image";
import Link from "next/link";
import Seg from "@/public/seguros.svg";


export default function Seguros() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <h1><i className="text-6xl">Seguros</i></h1>
    
    <div>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
    </div>
      <Image
        src={Seg}
        alt="Seguros Image"
        width={500}
        height={500}
        priority
      />
     
    </main>
  );
}