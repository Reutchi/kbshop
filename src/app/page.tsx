import {AccessoriesSection, Navigation, NewArrivalSection, ProductSection} from "@/components";

export default function Home() {
  return (
          <main>
              <Navigation/>
              <ProductSection/>
              <NewArrivalSection/>
              <AccessoriesSection/>
          </main>
  );
}
