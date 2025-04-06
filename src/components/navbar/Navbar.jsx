import React, { useState } from "react";
import Style from "./Navbar.module.css";
import LOGO from "../../assets/logo/new-logo-vertival.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Toggle, setToggle] = useState(false)
  return (
    <header className="position-relative">
      <nav className={`${Style.navbar} p-0 bg-main-color`}>
        <div className="container d-flex align-items-center justify-content-between gap-5">
          <Link className="logo" to={"/"}>
            <img src={LOGO} alt="Adel Real Estate عادل العقارية" width={200} />
          </Link>

          <div className={`${Style.nav_links}`} style={{clipPath: Toggle && "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}>
    
          <ul
            className={` m-0 d-flex justify-content-end align-items-center gap-3 flex-fill`}
          >
            <li className={`${Style.nav_link}`} onClick={()=>setToggle(false)}>
              <Link to={"/"} href="/">
                الرئيسية
              </Link>
            </li>
            <li className={`${Style.nav_link}`} onClick={()=>setToggle(false)}>
              <Link to={"/about"} href="/">
                من نحن
              </Link>
            </li>
            <li className={`${Style.nav_link}`} onClick={()=>setToggle(false)}>
              <Link to={"/how-it-works"} href="/">
                كيف نعمل
              </Link>
            </li>
            <li className={`${Style.nav_link}`} onClick={()=>setToggle(false)}>
              <Link to={"/oweners"} href="/">
                أصحاب العقار
              </Link>
            </li>
            <Link className={`${Style.btnLink}`} to={"/contract-request"} onClick={()=>setToggle(false)}>
              <button className="btn">
                طلب عقد
              </button>
            </Link>
          </ul>
          </div>


          <div className={`${Style.toggle_menu}`} onClick={()=>setToggle(prev=>!prev)}>
            {Toggle?<i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
            
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
