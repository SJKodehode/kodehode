'use client'
import { Card, Heading, Paragraph, Button, Divider } from "@digdir/designsystemet-react"
import Image from "next/image"
export default function SectionOne () {
    return (
        <div data-color-scheme={'auto'}>

        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-4 lg:mx-auto py-40 gap-20">
            <Card data-color={'neutral'}>
                <Card.Block>

                <Image src={'/coder.webp'} width={640} height={427} alt={'a coder'} />
                </Card.Block>
            </Card>
            <div data-color={'brand2'}>
                
                    <Heading data-size={'lg'}>
                    Inkludering lønner seg
                    </Heading>
                    <br />
                
                
                    <Paragraph>
                    Andelen unge i utenforskap med interesse for gaming og IT i Norge øker, det samme gjør behovet for IT-talent og utviklere i fremtiden. Vår visjon er å skape verdi for samfunn og næringsliv ved å redusere utenforskap gjennom lønnsom opplæring, rekruttering, matchmaking og onboarding innen IT-faget. Vi kjemper for et mer inkluderende samfunn, og å skinne lys på at inkludering ikke behøver å være en utgift, men en verdi for bedrifter såvel som samfunnet som helhet.
                    </Paragraph>
                    <br />
                <Button data-color={'brand2'} variant="secondary">
                    Les om vår visjon
                </Button>
            </div>
        </div>
        </div>
    )
}