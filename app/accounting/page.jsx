import Image from "next/image";
import Link from "next/link";
import Acc from "@/public/accounting.svg";


export default function Accounting() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <h1><i className="text-6xl">Accounting</i></h1>
    
    <div>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
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