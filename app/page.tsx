"use client"

import Navbar from "@/app/components/navbar";
import ImageBannerCarousel from "@/app/sections/banner";
import CategorySection from "./sections/category-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ImageBannerCarousel/>
      <div className="container mx-auto md:w-2/3"  >
<CategorySection/>
      </div>
    </main>
  );
}
