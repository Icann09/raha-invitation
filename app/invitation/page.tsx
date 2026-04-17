"use client"

import AkadNikah from "@/components/invitations/akadNikah";
import Cover from "@/components/invitations/cover";
import Date from "@/components/invitations/date";
import Gallery from "@/components/invitations/gallery";
import Gift from "@/components/invitations/gift";
import Man from "@/components/invitations/man";
import Opening from "@/components/invitations/opening";
import Resepsi from "@/components/invitations/resepsi";
import Terimakasih from "@/components/invitations/terimakasih";
import Wishes from "@/components/invitations/wishes";
import Woman from "@/components/invitations/woman";
import Image from "next/image";
import { useState } from "react";


const bride = {
  name: "Putri Alisyah Cahya Ayu",
  nameShort: "Alisyah",
  mother: "Cahyani",
  father: "Ali",
  ig: "@alishyah_cahya12",
  photo: "foto bride",
  bank_account: "nomor rekening",
}

const groom = {
  name: "Raydillo Mahendra",
  nameShort: "Dillo",
  mother: "Nila",
  father: "Hendra",
  ig: "@mahendra12",
  photo: "foto groom",
  bank_account: "nomor rekening",
}

const wedding = {
  date: "tanggal pernikahan",
  gallery: "foto pernikahan",

  akad_date: "tanggal akad",
  akad_waktu: "waktu akad",
  akad_place: "tempat akad",
  akad_addres: "alamat akad",
  akad_map: "lokasi map akad",

  resepsi_date: "tanggal resepsi",
  resepsi_waktu: "waktu resepsi",
  resepsi_place: "tempat resepsi",
  resepsi_addres: "alamat resepsi",
  resepsi_map: "lokasi map resepsi",
}


export default function Page() {
  const [open, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);

  return (
    <div className="w-full flex flex-col max-h-screen overflow-y-auto">

      {/* Backgrounds */}
      <Image
        src="/backgrounds/bg-1.png"
        alt="Background"
        fill
        className="object-cover fixed top-0 left-0 w-full h-screen z-0 pointer-events-none"
        priority
      />

      {/* Ornaments */}
      <div className="hidden md:block">
      <Image
        src="/ornaments/tree1.png"
        alt="Tree"
        width={400}
        height={400}
        className="absolute top-[-200px] left-0 transform -translate-x-1/2 z-10 "
      />
      <Image
        src="/ornaments/tree1.png"
        alt="Tree Top"
        width={400}
        height={400}
        className="absolute top-[-200px] right-[-380px] transform -translate-x-1/2 z-10"
      />
      <Image
        src="/ornaments/tree1.png"
        alt="Tree Top"
        width={400}
        height={400}
        className="absolute bottom-[-220px] left-0 transform -translate-x-1/2 z-20 pointer-events-none rotate-180"
      />
      <Image
        src="/ornaments/tree1.png"
        alt="Tree Top"
        width={400}
        height={400}
        className="absolute bottom-[-220px] right-[-380px] transform -translate-x-1/2 z-20 pointer-events-none rotate-180"
      />
      </div>

    
    


      <div className={open? "hidden": "block"}>
        <Cover onClick={handleClick} />
      </div>
      <div className= {open? "block": "hidden" }>
        <Opening isOpen ={open}/>
        <Gallery />
        <Woman />
        <Man />
        <Date />
        <AkadNikah />
        <Resepsi /> 
        <Terimakasih />
        <Gift />
        <Wishes />

      </div>
    </div>
  );
}