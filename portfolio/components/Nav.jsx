"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links=[
    {
        name:"home",
        path:"/"
    },
     {
        name:"services",
        path:"/services",
    },
    
     {
        name:"resume",
        path:"/resume",
    },
     {
        name:"projects",
        path:"/projects",
    },
    
     {
        name:"contact",
        path:"/contact",
    },
];

const Nav = () => {
    const pathname= usePathname();
    
  return (
   <nav className="flex gap-8 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#120016]">
      {links.map((link, index) => (
        <Link href={link.path} key={index}
         className={`${link.path === pathname && "#94A3B8 border-b-2 hover:text-purple-400 " }
         capitalize font-normal hover:text-purple-400 transition-all`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
