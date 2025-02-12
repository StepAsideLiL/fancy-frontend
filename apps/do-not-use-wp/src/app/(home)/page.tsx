import WPTextDesign from "@/components/WPTextDesign";
import { Lucide } from "@/lib/icons";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section className="hero-background relative h-screen min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/texture.webp"
            alt="Hero background"
            width={1920}
            height={1080}
            className="aspect-video object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[360px] leading-none text-background/20">
          !WP
        </div>

        <div className="h-full p-5">
          <div className="relative h-full">
            <div className="w-fit">
              <h1>
                <div className="text-right text-lg">There is no doubt,</div>
                <div className="text-4xl">
                  <WPTextDesign /> is an incredible software
                </div>
                <div className="text-lg">to make a website.</div>
              </h1>
            </div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <h1 className="text-6xl">
                Let&apos;s talk about <WPTextDesign />.
              </h1>
              <div className="flex">
                <Lucide.Meh size={30} />
                <Lucide.Meh size={30} />
                <Lucide.Meh size={30} />
              </div>
            </div>

            <div className="absolute right-0 top-1/2 w-96 -translate-y-1/2">
              <h1 className="text-right text-2xl">
                <WPTextDesign /> might not be the best choice for your website.
              </h1>
            </div>

            <div className="absolute bottom-0 left-0">
              <h1 className="text-4xl">
                Why Not Use <WPTextDesign />!
              </h1>
            </div>

            <div className="absolute bottom-0 right-0">
              <h1 className="text-4xl">
                Why Not Use <WPTextDesign />!
              </h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
