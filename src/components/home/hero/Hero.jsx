import React from "react";
import Style from "../Home.module.css";
import heroImg from "../../../assets/hero/hero.jpg";

const Hero = () => {
  return (
    <section className="hero-section py-5 mt-3">
      <div className="container">
        <div
          className={`${Style.row} row d-flex justify-content-between align-items-center`}
        >
          <div
            className={`${Style.hero_section_text} col-xs-12 col-sm-12 col-md-6 px-1`}
          >
            <div>
              <h1 className="fs-2 p-0">عقد ايجار الكتروني موثّق</h1>
            </div>
            <div className="my-3">
              <p className="fs-5">عقدك الموثق من شبكة ايجار خلال 30 دقيقة</p>
              <p className="fs-6">
                مهما كان غرضك من العقد ، نحن خيارك الأكثر سرعة ومن أي مكان في
                المملكة ، سواء كنت تحتاجه لحساب المواطن أو الضمان الاجتماعي أو
                حافز أو لأي أغراض اخرى.
              </p>
            </div>
            <a href="#" className="btn ms-3">
              اريد عقد سكني
            </a>
            <a href="#" className="btn ms-3">
              اريد عقد تجاري
            </a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 ">
            <div className="hero-section-img w-100 d-flex justify-content-end align-items-center">
              <img
                className={`${Style.hero_img}`}
                src={heroImg}
                width={500}
                alt="تعرف على خدمة عقد ايجار الكتروني موحد من وسيط عقاري معتمد"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
