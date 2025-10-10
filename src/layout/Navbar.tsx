"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/ui/resizable-navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DarkModeSwitch from "./ThemeToggle";

export function MainNavbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    // { name: "About Us", path: "/about" },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className="text-neutral-700 dark:text-neutral-200 hover:text-blue-500 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <NavbarButton
              variant="primary"
              onClick={() => handleNavigate("/services")}
            >
              View Services
            </NavbarButton>
            <DarkModeSwitch />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className="relative text-neutral-600 dark:text-neutral-300 text-left"
              >
                {item.name}
              </button>
            ))}

            <DarkModeSwitch />

            <NavbarButton
              onClick={() => handleNavigate("/services")}
              variant="primary"
              className="w-full"
            >
              View Services
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
