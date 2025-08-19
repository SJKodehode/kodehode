// app/components/footer.tsx (or wherever you keep components)
import { Heading, Link, Button, Label, Paragraph } from "@digdir/designsystemet-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" border-t border-slate-500/20">
      <div className="mx-auto w-full pt-16 pb-6">
        {/* 3 columns */}
        <div className="grid grid-cols-1 max-w-[240px] gap-12 md:grid-cols-3 md:max-w-7xl mx-auto">
          {/* Kontakt for */}
          <section  className="lg:ml-20 mx-4" aria-labelledby="footer-kontakt">
            <Heading id="footer-kontakt" data-size="lg" level={2}>
              Kontakt for
            </Heading>

            <div className="mt-6 space-y-8">
              <address className="not-italic">
                <Heading data-size="sm" level={3}>
                  Deltaker
                </Heading>
                <div className="mt-2">
                  <Link
                    href="mailto:inger-johanne@jobloop.no"
                    
                  >
                    inger-johanne@jobloop.no
                  </Link>
                  <div className="mt-1">
                    <Paragraph>
                    +47 48 35 87 03
                    </Paragraph>
                  </div>
                </div>
              </address>

              <address className="not-italic">
                <Heading data-size="sm" level={3}>
                  Bedrifter
                </Heading>
                <div className="mt-2">
                  <Link href="mailto:christer@jobloop.no" >
                    christer@jobloop.no
                  </Link>
                  <div className=" mt-1">
                    <Paragraph>
                    +47 92 88 28 04
                    </Paragraph>
                  </div>
                </div>
              </address>

              <address className="not-italic">
                <Heading data-size="sm" level={3}>
                  Oppdragsgiver
                </Heading>
                <div className="mt-2">
                  <Link
                    href="mailto:inger-johanne@jobloop.no"
                    
                  >
                    inger-johanne@jobloop.no
                  </Link>
                  <div className=" mt-1">
                    <Paragraph>
                    +47 48 35 87 03
                    </Paragraph>
                  </div>
                </div>
              </address>
            </div>
          </section>

          {/* Linker */}
          <section  className="lg:ml-20 mx-4" aria-labelledby="footer-linker">
            <Heading id="footer-linker" data-size="lg" level={2}>
              Linker
            </Heading>

            <div className="mt-6 flex flex-col items-start gap-4">
              <Link
                asChild
                data-size="md"
                className="rounded-full"
              >
                <a
                  href="https://jobloop.no"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Jobloop.no
                </a>
              </Link>

              <Link
                asChild
                data-size="md"
                className="rounded-full"
              >
                <a
                  href="https://kodeverket.no"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Kodeverket.no
                </a>
              </Link>

              <div className="">
                <Paragraph>
                eller
                </Paragraph>
              </div>

              <Link asChild data-size="sm" data-color={'neutral'}>
                <Link href="/faq">Gå til FAQ</Link>
              </Link>
            </div>
          </section>

          {/* Side for */}
          <section aria-labelledby="footer-sidefor" className="lg:ml-20 mx-4">
            <Heading id="footer-sidefor" data-size="lg" level={2}>
              Side for
            </Heading>

            <nav className="mt-6">
              <ul className="space-y-4">
                <li>
                  
                    <Link href="/arbeidsgiver">Arbeidsgiver</Link>
                </li>
                <li>
                    <Link href="/deltaker">Deltaker</Link>
                </li>
                <li>
                    <Link href="/samarbeidspartner">Samarbeidspartner</Link>
                </li>
              </ul>
            </nav>
          </section>
        </div>

        {/* Bottom row */}
        <div className="mt-14 border-t border-slate-500/20 pt-6 text-center text-sm">
          © {year} Kodehode
        </div>
      </div>
    </footer>
  );
}
