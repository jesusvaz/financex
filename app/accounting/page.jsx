import Image from "next/image";
import Link from "next/link";
import Acc from "@/public/accounting.svg";


export default function Accounting() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <h1><i className="text-6xl">Accounting</i></h1>
    
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
        src={Acc}
        alt="Legal Image"
        width={500}
        height={500}
        priority
      />
     
    </main>
  );
}