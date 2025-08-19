import { Heading, Button, Link } from "@digdir/designsystemet-react"
import { MenuHamburgerIcon } from "@navikt/aksel-icons"
export default function Header () {
    return (
        <>
        <div data-color-scheme={'auto'} className="flex md:hidden shadow-2xl rounded-2xl justify-between items-center p-4 px-8 max-w-7xl w-full mx-auto">
            <Heading data-size={'sm'}>Kodehode</Heading>
            <MenuHamburgerIcon fontSize={'2.2rem'} />
        </div>
        <div data-color-scheme={'auto'} className="hidden md:flex shadow-2xl rounded-2xl justify-between items-center p-4 px-8 max-w-7xl w-full mx-auto">
            <Heading data-size={'lg'} level={'1'}>
                Kodehode
            </Heading>
            <div className="flex justify-self-end-safe flex-row gap-4 no-underline" data-color-scheme={'auto'}>
                <Button data-color={'primary'} data-color-scheme={'auto'} data-size={'sm'} variant="tertiary">Vår Visjon</Button>
                <Button data-color={'neutral'} data-color-scheme={'auto'} data-size={'sm'} variant="tertiary">FAQ</Button>
                <Button data-color={'neutral'} data-color-scheme={'auto'} data-size={'sm'} variant="tertiary">Om Oss</Button>
                <Button data-color={'neutral'} data-color-scheme={'auto'} data-size={'sm'} variant="tertiary">Kodespråk</Button>
                <Button data-color={'secondary'} data-color-scheme={'auto'} data-size={'sm'} variant="secondary">Kontakt Oss</Button>
            </div>
        </div>
        </>
    )
}