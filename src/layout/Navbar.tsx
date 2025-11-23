"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
} from "../components/ui/resizable-navbar";
import DarkModeSwitch from "./ThemeToggle";

export function MainNavbar() {
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <DarkModeSwitch />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <DarkModeSwitch />
          </MobileNavHeader>
        </MobileNav>
      </Navbar>
    </div>
  );
}
