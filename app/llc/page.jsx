import Image from "next/image";
import Link from "next/link";
import CIA from "@/public/llc.svg";


export default function LLC() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <h1><i className="text-6xl">LLC</i></h1>
    
    <div>
    Ensure ur family feature and yours
        Ensure ur family feature and yours
        Ensure ur family feature and yours
        Ensure ur family feature and yours
        Ensure ur family feature and yours
        Ensure ur family feature and yours
        Ensure ur family feature and yours
        Ensure ur family feature and yours
        Ensure ur family feature and yours
        Ensure ur family feature and yours
    </div>
      <Image
        src={CIA}
        alt="LLC Image"
        width={500}
        height={500}
        priority
      />
     
    </main>
  );
}