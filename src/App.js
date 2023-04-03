import { useEffect, useState } from "react";

import "./App.css";

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
    if (open === "block") {
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
    if (active === "block") {
      setActive("none");
    }
    if (active === "none") {
      setActive("block");
    }
  }

  function Opens() {
    if (open === "none") {
      setOpen("block");
    }
  }

  function isActives(e) {
    const myId = e.target.id;
    document.getElementById(myId).classList.add("navActive");
    if (!(myId === "nav-item-0" || myId === "nav-item-00")) {
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
      mehmet
    </>
  );
}

export default App;