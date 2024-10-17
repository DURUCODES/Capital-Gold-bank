import React, { useState } from "react";
import DesktopNav from "./desktopnav";
import MobileNav from "./MobileNav";
const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    setIsOpen(true);
  };
  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <DesktopNav openNav={openNav} />
      <MobileNav closeNav={closeNav} isOpen={isOpen} />
    </div>
  );
};

export default ResponsiveNav;
