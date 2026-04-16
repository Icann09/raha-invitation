

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


export default function Page() {
  return (
    <div>
      <Cover />
      <Opening />
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
  );
}