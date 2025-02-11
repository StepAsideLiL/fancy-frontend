import WPTextDesign from "@/components/WPTextDesign";

export default function Page() {
  return (
    <main>
      <section className="h-screen min-h-screen p-5">
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
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <h1>
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
      </section>
    </main>
  );
}
