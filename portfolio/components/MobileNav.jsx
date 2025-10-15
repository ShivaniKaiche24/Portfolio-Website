"use client";

import {Sheet, SheetContent, SheetTrigger,SheetTitle} from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const links= [
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


const MobileNav = () => {
    const pathname= usePathname();
    return (
        <Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text [30px] text-purple-400"/>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
     <VisuallyHidden asChild>
          <SheetTitle>Mobile Navigation</SheetTitle>
        </VisuallyHidden>
       <div className="mt-16 mb-20 text-center text-2xl">
        <Link href="/">
        <h1 className="text-2xl font-semibold">
            Shivani<span className="text-purple-400">.</span>
            </h1>
        </Link>  
        </div>

       <nav className="flex flex-col justify-center items-center gap-6">
        {links.map((link,index)=>{
            return(
            <Link 
            href={link.path} 
            key={index} 
            className={`${link.path === pathname && "text-purple-400 border-b-2 border-purple-400"} text-lg capitalize hover:text-purple-400 transition-all`}
            >
                {link.name}
            </Link>
            );
        })}
       </nav>
    </SheetContent>
  </Sheet>
    );
}

export default MobileNav
