import { useState } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Hero from "../components/Hero";
import Main from "../components/Main/Main";
import Menu from "../components/Menu";

function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="min-h-[100vh] bg-[#f6ffff]">
        <Header setOpenMenu={setOpenMenu} />
        <Hero />
      </div>
      <Main />
      <Footer />
      {openMenu && <Menu setOpenMenu={setOpenMenu} />}
    </>
  );
}
export default Home;
