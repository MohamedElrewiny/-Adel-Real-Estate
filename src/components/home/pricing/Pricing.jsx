import React from "react";
import IMAGE from "../../../assets/price-section/new_SidePic2.png";
import Style from "../Home.module.css"


const Pricing = () => {
  return (
    <section className="pricing  py-5 mt-3">
      <div className="container">
        <div className="section-header">
          <h2 className="heading">وثّق عقدك الآن</h2>
        </div>
        <div className={`${Style.bigBox}`}>
          <div className="box d-flex justify-content-center align-items-center">
            <img src={IMAGE} alt="" />
          </div>
          <div className={`${Style.pricing_item} box`}>
            <div className="text-center fs-4 fw-bold mb-2 second-color">عقد سكني</div>
            <div className={`${Style.pricing_item_price}`}>
              <span>299 رس</span>
            </div>
            <ul className={`${Style.pricing_item_features}`}>
              <li>خلال 30 دقيقة</li>
              <li>بدون حضورك</li>
              <li>الدفع بعد مشاهدة العقد</li>
              <li>مناسب لحساب المواطن</li>
              <li>مناسب للضمان المطور</li>
              <li>مناسب لنظام بلدي</li>
              <li>يطلبه المؤجر أو المستأجر</li>
            </ul>
            <div className="text-center">
              <a
                href="#"
                className="btn w-100"
              >
                اطلبه الآن
              </a>
            </div>
          </div>
          <div className={`${Style.pricing_item} box`}>
            <div className="text-center fs-4 fw-bold mb-2 second-color">عقد تجاري</div>
            <div className={`${Style.pricing_item_price}`}>
              <span>495 رس</span>
            </div>
            <ul className={`${Style.pricing_item_features}`}>
              <li>خلال 30 دقيقة</li>
              <li>بدون حضورك</li>
              <li>الدفع بعد مشاهدة العقد</li>
              <li>مناسب لحساب المواطن</li>
              <li>مناسب للضمان المطور</li>
              <li>مناسب لنظام بلدي</li>
              <li>يطلبه المؤجر أو المستأجر</li>
            </ul>
            <div className="text-center">
              <a
                href="#"
                className="btn w-100"
              >
                اطلبه الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
