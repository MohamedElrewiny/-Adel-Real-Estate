import React from "react";
import Style from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className={`${Style.footer}`}>
        <div className="container">
          <div
            className={`${Style.main_content} d-flex gap-5 justify-content-evenly align-items-center`}
          >
            <div className={`${Style.quick_links}`}>
              <ul className={`${Style.about_list}`}>
                <div className="mb-3">
                  <strong className="fs-5 text-black">عن المؤسسة</strong>
                </div>
                <li>
                  <Link to={"/about"}>من نحن</Link>
                </li>
                <li>
                  <Link to={"/terms-of-use"}>اتفاقية الاستخدام</Link>
                </li>
                <li>
                  <Link to={"/privacy"}>سياسة الخصوصية</Link>
                </li>
                <li>
                  <Link to={"/join-our-team"}>انضم لفريق المندوبين</Link>
                </li>
              </ul>
            </div>
            <div className="footer-bottom">
              <ul
                className={`${Style.social_list}  d-flex justify-content-start align-items-center mb-3 flex-wrap`}
              >
                <li>
                  <a href="https://x.com/adel_aqar" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:adelrealestate.sa@gmail.com" target="_blank">
                    <i class="fa-solid fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a href="http://wa.me/966502721582" target="_blank">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="https://tiktok.com/@adel.aqar" target="_blank">
                    <i class="fa-brands fa-tiktok"></i>
                  </a>
                </li>
                <li>
                  <a href="https://snapchat.com/t/5kvQx2N0" target="_blank">
                    <i class="fa-brands fa-snapchat"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/adel.aqar" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
              <div className="copyright text-body">
                <span className="fs-6 fw-bold">جميع الحقوق محفوظة </span>
                <span className="fs-6 fw-bold">
                  خدمات{" "}
                  <Link to={"/"} className="text-dark fw-bold">
                    عادل العقارية
                  </Link>{" "}
                  © 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
