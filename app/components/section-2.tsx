'use client'
import { Card, Heading, Paragraph, Button } from "@digdir/designsystemet-react"
import Image from "next/image"
import { BriefcaseIcon } from "@navikt/aksel-icons"
import { HatSchoolIcon } from "@navikt/aksel-icons"
import { FolderIcon } from "@navikt/aksel-icons"

export default function SectionTwo () {
    return (
        <div className="bg-purple-400/10">

        <div className="  grid grid-cols-1 max-w-md xl:max-w-7xl mx-4 sm:mx-auto xl:grid-cols-3 py-40 gap-8 xl:gap-12">
            <Card data-color-scheme={'auto'} style={{
                display: 'grid',
                gridTemplateColumns: '0.2fr 1fr',
                
                
            }} data-size={'sm'} data-color={'brand3'}>
                <Card.Block className="flex justify-center-safe items-center-safe">
                    <BriefcaseIcon fontSize={'3.5rem'} />
                </Card.Block>
                <Card.Block>
                    <Heading data-size={'sm'}>
                    Arbeidsgiver
                    </Heading>
                    <Paragraph>
                        For bedrifter som er interessert i utviklere
                    </Paragraph>
                </Card.Block>
            </Card>
            <Card data-color-scheme={'auto'} style={{
                display: 'grid',
                gridTemplateColumns: '0.2fr 1fr',
                
            }} data-size={'sm'} data-color={'brand3'}>
                <Card.Block className="flex justify-center-safe items-center-safe">
                    <HatSchoolIcon fontSize={'3.5rem'} />
                </Card.Block>
                <Card.Block>
                    <Heading data-size={'sm'}>
                    Deltaker
                    </Heading>
                    <Paragraph>
                        For deg som vil delta på Kodehode
                    </Paragraph>
                </Card.Block>
            </Card>
            <Card data-color-scheme={'auto'} style={{
                display: 'grid',
                gridTemplateColumns: '0.2fr 1fr',
                
            }} data-size={'sm'} data-color={'brand3'}>
                <Card.Block className="flex justify-center-safe items-center-safe">
                    <FolderIcon fontSize={'3.5rem'} />
                </Card.Block>
                <Card.Block>
                    <Heading data-size={'sm'}>
                    Samarbeidspartner
                    </Heading>
                    <Paragraph>
                        For virksomheter som ønsker å samarbeide
                    </Paragraph>
                </Card.Block>
            </Card>
            
            
        </div>
                </div>
    )
}