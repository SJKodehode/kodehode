import Image from "next/image";
import '@digdir/designsystemet-css/index.css';
import '@/design-tokens-build/kodehode.css'; // or custom theme CSS file
import { Button, Heading } from "@digdir/designsystemet-react";
import Header from '@/app/components/header'
import Hero from '@/app/components/hero'
import SectionOne from '@/app/components/section-1'
import SectionTwo from '@/app/components/section-2'
import SectionThree from "@/app/components/section-3";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className=" flex justify-center flex-col items-center">
      <Hero />
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}
