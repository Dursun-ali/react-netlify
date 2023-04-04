import "./app.css";
import Headers from "./component/Header";
import ApzoSection from "./component/ApzoSection";
import NewestSection from "./component/NewestSection";
import FeaturesSection from "./component/FeaturesSection";
import CounterSection from "./component/CounterSection";
import DownCounterSection from "./component/DownCounterSection";
import AccordionSection from "./component/AccordionSection";
import UpdatedSection from "./component/UpdatedSection";
import PricingSection from "./component/PricingSection";
import ArticlesSection from "./component/ArticlesSection";
import FooterSection from "./component/FooterSection";
import SearchModalSection from "./component/SearchModalSection";
import { useEffect, useState } from "react";
import ScrollNavbarSection from "./component/ScrollNavbarSection";
import SecondNavbar from "./component/SecondNavbar";

function App() {
  const [active, setActive] = useState("none");
  const [open, setOpen] = useState("none");
  const [menuActive, setMenuActive] = useState({});
  const [windowWidht, setWindowWidth] = useState(1486);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  useEffect(() => {
    if (open == "block") {
      if (windowWidht > 767.98) {
        setMenuActive({ right: "350px" });
      } else if (windowWidht < 767.98 && windowWidht > 575.98) {
        setMenuActive({ width: "0", right: "280px" });
      } else if (windowWidht <= 575.98) {
        setMenuActive({ width: "0", right: "190px" });
      }
    } else {
      setMenuActive({ right: 0 });
    }
  }, [open]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    console.log(windowWidht);
  };
  function isActive() {
    if (active == "block") {
      setActive("none");
    }
    if (active == "none") {
      setActive("block");
    }
  }

  function Opens() {
    if (open == "none") {
      setOpen("block");
    }
  }

  function isActives(e) {
    const myId = e.target.id;
    document.getElementById(myId).classList.add("navActive");
    if (!(myId == "nav-item-0" || myId == "nav-item-00")) {
      document.getElementById("nav-item-0").classList.remove("navActive");
      document.getElementById("nav-item-00").classList.remove("navActive");
    }
  }

  function isPasives(e) {
    const myId = e.target.id;
    document.getElementById(myId).classList.remove("navActive");
    isDefauldActive();
  }

  function isDefauldActive() {
    document.getElementById("nav-item-0").classList.add("navActive");
    document.getElementById("nav-item-00").classList.add("navActive");
  }

  return (
    <>
      <div style={{ display: active }} className="wrapper-container"></div>

      <div className="position-relative">
        <div>
          <Headers
            isActive={isActive}
            isActives={isActives}
            isPasives={isPasives}
            isDefauldActive={isDefauldActive}
          />
          <ApzoSection />
          <NewestSection />
          <FeaturesSection />
          <CounterSection />
          <DownCounterSection />
          <AccordionSection />
          <UpdatedSection />
          <PricingSection />
          <ArticlesSection />
          <FooterSection />
          <SecondNavbar
            isActives={isActives}
            isPasives={isPasives}
            isDefauldActive={isDefauldActive}
            windowWidht={window.innerWidth}
            menuActive={menuActive}
            isActive={isActive}
            open={open}
            Opens={Opens}
          />
        </div>
        <SearchModalSection isActive={isActive} active={active} />
        <ScrollNavbarSection open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default App;