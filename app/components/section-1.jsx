'use client'
import { Card, Heading, Paragraph, Button } from "@digdir/designsystemet-react"
import Image from "next/image"
export default function SectionOne () {
    return (
        <div data-color-scheme={'auto'}>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:max-w-7xl mx-4 lg:mx-auto py-40 gap-20">
            <Card data-color={'neutral'}>
                <Card.Block>
                    <Heading data-size={'lg'}>
                    Vi utdanner morgendagens utviklere
                    </Heading>
                
                
                    <Paragraph>

                    Vi rekrutterer kandidater som av ulike årsaker har havnet utenfor arbeidslivet og trener dem opp til å bli lovende junior utviklere. Gjennom en kombinasjon av teoretisk opplæring og praksis vil kandidatene lære seg de viktigste verktøyene for å bli klar til en karriere innen utvikling. Vårt fokus er å finne dyktige mennesker som sammen blir en god match.
                    </Paragraph>
                    
                <Button data-color={'accent'} variant="secondary">
                    Kontakt oss
                </Button>
                </Card.Block>
            </Card>
            <Card data-color={'neutral'}>
                <Card.Block>

                <Image src={'/coder.webp'} width={640} height={427} alt={'a coder'} />
                </Card.Block>
            </Card>
        </div>
        </div>
    )
}