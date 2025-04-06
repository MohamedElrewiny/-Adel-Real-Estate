import React from "react";
import Style from "./About.module.css";
import pdf1 from '../../assets/pdf/مؤسسة عادل حسين يحي ال عبدالله العقارية.pdf'
import img1 from '../../assets/about/saudi_eltejara.png'
import img2 from '../../assets/about/ejar.png'


const About = () => {
  return (
    <section className="about  py-5 mt-3">
      <div className="container">
        <h1 className="heading">من نحن</h1>
        <div className={`${Style.main_content}`}>
          <div className="box w-50">
            <div className="main-inner-imgs d-flex justify-content-between gap-2 align-items-center">
              <a href={pdf1}>
                <img
                  src={img1}
                  alt="عقد ايجار العقارية"
                  title="عقد ايجار العقارية"
                />
              </a>
              <a href="https://rofida.sa/Ejar_Certificate.pdf">
                <img
                  src={img2}
                  alt="عضوية منصة إيجار"
                  title="عضوية منصة إيجار"
                />
              </a>
            </div>
          </div>
          <div className={`${Style.main_section_text} box  w-50`}>
            <h1>مؤسسة سعودية رسمية مقرها ابها</h1>
            <p>
              مؤسسة عادل العقارية ، منشأة تجارية رسمية مسجلة في وزارة التجارة
              السعودية برقم (بدون) وحاصلة على شهادة (وسيط عقاري معتمد) من منصة
              ايجار برقم (بدون) ، ولديها حساب موثق في منصة معروف التابعة لوزارة
              التجارة ، تأسست تماشيا مع توجهات الدولة ورؤية 2030 في
              تعزيزالتحول الرقمي.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
