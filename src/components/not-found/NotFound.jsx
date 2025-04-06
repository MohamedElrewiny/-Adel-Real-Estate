import React from "react";
import notFoundImg from "../../assets/not-found/404_page-not-found.png";
import { Link } from "react-router-dom";
import Style from './NotFound.module.css'

const NotFound = () => {
  return (
    <section className={`${Style.main_section}  py-3 d-flex justify-content-between align-items-center gap-2`}>
      <img src={notFoundImg} alt="Page is not Found!" width={400} />
      <div className="not-found-text">
        <h2 className="main-color">الصفحة ليست موجودة</h2>
        <p className="text-muted fs-5">
          عذراً، الصفحة التي تبحث عنها غير موجودة. قد يكون الرابط غير صحيح أو
          الصفحة قد تم حذفها.
        </p>
        <Link to="/">
          <button className="btn">العودة الي الصفحة الرئيسية</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
