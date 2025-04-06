import React from "react";
import Style from "../Home.module.css";
import rental_agreement from "../../../assets/icons/rental-agreement.png";
import certificate from "../../../assets/icons/certificate.png";
import group from "../../../assets/icons/group.png";
import web_traffic from "../../../assets/icons/web-traffic.png";


const Numbers = () => {
  return (
    <section className="numbers-section py-5 mt-3">
      <div className="container">
        <h2 className="heading">العقود الموثقة في منصة ايجار</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6 mt-3">
            <div className={`${Style.number_item}`}>
              <div className={`${Style.img_icon}`}>
                <img src={rental_agreement} alt="icon" width={50} />
              </div>
              <div className="number-item-content">
                <span className="fs-4 fw-bold">2,500,000 </span>
                <br />
                <span className="main-color fw-semibold">عقد سكني</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-3">
            <div className={`${Style.number_item}`}>
              <div className={`${Style.img_icon}`}>
                <img src={certificate} alt="icon" width={50} />
              </div>
              <div className="number-item-content">
                <span className="fs-4 fw-bold">500,000 </span>
                <br />
                <span className="main-color fw-semibold">عقد تجاري</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-3">
            <div className={`${Style.number_item}`}>
              <div className={`${Style.img_icon}`}>
                <img src={group} alt="icon" width={50} />
              </div>
              <div className="number-item-content">
                <span className="fs-4 fw-bold"> 3,460,314 + </span>
                <br />
                <span className="main-color fw-semibold">المستخدمين</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-3">
            <div className={`${Style.number_item}`}>
              <div className={`${Style.img_icon}`}>
                <img src={web_traffic} alt="icon" width={50} />
              </div>
              <div className="number-item-content">
                <span className="fs-4 fw-bold">1,490,756,490 +</span>
                <br />
                <span className="main-color fw-semibold">اجمالي الزيارات</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
