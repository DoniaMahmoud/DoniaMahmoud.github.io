import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//When switching pages, make sure the page starts at the top
const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollTop;
