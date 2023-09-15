import { useState } from "react";
import {headerLogo} from '../assets/images'
import { navLinks } from "../constants/constants";
import { hamburger } from "../assets/icons";

function Nav() {
  const [mobile, setmobile] = useState(false)

  
  return (
    <header className="padding-x py-8 absolute z-10 w-full" >
      <nav className="flex justify-between items-center max-container relative">
        <a href="/">
          <img src={headerLogo} alt="Logo" 
          width={129}
          height={29}
          className="m-0 w-[129px] h-[29px]" 
          />

        </a>
        <ul 
          className={mobile 
          ? 'bg-primary leading-[55px] p-7  text-right absolute right-0 top-8 w-[210px] rounded-lg ' 
          : 'flex flex-1 justify-center items-center gap-16 max-lg:hidden'}
          onClick={()=>setmobile(false)}
          >
          {
            navLinks.map((link)=>(
              <li key={link.label} >
                <a href={link.href} className='font-montserrat leading-normal text-lg text-slate-gray'> 
                 {link.label}
                </a>
              </li>
            ))
          }
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat wide:mr-24 max-lg:hidden ">
          <a href="/">Sign In</a>
          <span>/</span>
          <a href="/">Explore Now</a>
        </div>
        <div className="hidden max-lg:block" onClick={()=>setmobile(!mobile)}>
          <img src={hamburger} alt="menu" width={25} height={25}  />
        </div>

      </nav>
    
    
    </header>
  )
}

export default Nav;