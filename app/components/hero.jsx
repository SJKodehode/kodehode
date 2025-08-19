import Image from "next/image"
import { Heading } from "@digdir/designsystemet-react"
import Header from "./header"


export default function Hero () {
    return (
        <div className="relative">
            <div className="backdrop-filter backdrop-blur-sm text-white bg-black/60 absolute p-4 w-full h-full flex flex-col items-center-safe">
                <Header />
                <div className="flex flex-col text-center h-full items-center-safe justify-center-safe max-w-md">

                <Heading data-size={'2xl'}>Kodehode</Heading>
                <Heading data-size={'sm'}>Tilpasset opplæring og rekruttering til IT-bransjen</Heading>
                </div>

            </div>
            <div className="hidden sm:flex">
            
            <Image src={'/kodehodeHeroImage.webp'} width={2048} height={600} alt={'Hero image'} />
            </div>
            <div className="flex sm:hidden">

            <Image src={'/kodehodeHeroImageSm.png'} width={2048} height={600} alt={'Hero image'} />
            </div>
        </div>
    )
}