import React from "react";
import Style from './Owners.module.css'

const Owners = () => {
  return (
    <section class="main-section py-5">
      <h1 className="heading">المُلّلاك واصحاب العقارات</h1>
      <div className="container">
        <div className={`${Style.row}`}>
          <div className="col-xs-12 col-sm-12 col-md-12">
            إذا كنت صاحب عقار وتريد توكيلنا بتنفيذ جميع عقود الإيجار الخاصة
            بأملاكك ، فسنكون سعداء بخدمتك وتخصيص موظف لآداء هذه المهام نيابة
            عنك.
            <br />
            <br />
            تفضل بالتواصل معنا من خلال الواتساب{" "}
            <a href="https://wa.me/966502721582">
              بالضغط هنا
            </a>{" "}
            أو مراسلتنا على البريد الإلكتروني{" "}
            <a href="mailto:adelrealestate.sa@gmail.com">adelrealestate.sa@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owners;
