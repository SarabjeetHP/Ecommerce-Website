import Header from "@/Component/Shared/Header/Header";

import Footer from "@/Component/Shared/Footer/Footer";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Ecommerce </h1>
      <Header/>
      <Footer/>
      
    </main>
  );
}
