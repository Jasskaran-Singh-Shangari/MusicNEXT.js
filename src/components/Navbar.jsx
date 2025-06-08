'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}>
      <Menu setActive={setActive} active={active} item="Services">
        <Link href="/">
          Home
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col text-sm space-y-4">
           <HoveredLink href="/courses">All courses</HoveredLink> 
           <HoveredLink href="/courses">Basic Music Theory</HoveredLink> 
           <HoveredLink href="/courses">Advance Composition</HoveredLink> 
           <HoveredLink href="/courses">Songwriting</HoveredLink> 
           <HoveredLink href="/courses">Music Production</HoveredLink> 
          </div>
        </MenuItem>

        <Link href="/contact">
          Contact Us
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar
