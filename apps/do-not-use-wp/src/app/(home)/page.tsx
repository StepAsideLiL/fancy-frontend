import WPTextDesign from "@/components/WPTextDesign";

export default function Page() {
  return (
    <main>
      <section className="relative h-screen min-h-screen">
        <div>
          <h1>
            There is no doubt that <WPTextDesign /> is an incredible software to
            make a website.
          </h1>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <h1>
            <WPTextDesign /> might not be the best choice for your website.
          </h1>
        </div>

        <div className="absolute bottom-0 left-0">
          <h1 className="text-6xl">
            Why Not Use <WPTextDesign />!
          </h1>
        </div>
      </section>
    </main>
  );
}
