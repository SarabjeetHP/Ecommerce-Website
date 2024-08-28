import Header from "@/Component/Shared/Header/Header";

import Footer from "@/Component/Shared/Footer/Footer";

import Testimonial from "@/Component/Shared/Testimonial/Testimonial";



export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <h1>Ecommerce </h1>
      <Header/>
          <Testimonial/>
     
    </main>
  );
}
