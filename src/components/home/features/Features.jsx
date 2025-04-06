import React from "react";
import { Link } from "react-router-dom";
import Style from "../Home.module.css";

const Features = () => {
  return (
    <section className="features py-5 mt-3">
      <div className="container">
        <div className="section-header">
          <h2 className="heading">مميزاتنا</h2>
        </div>
        <div className={`${Style.feature_row} row`}>
          <div className="col-lg-4 col-md-12">
            <div className={`${Style.features} text-center`}>
              <div className={`${Style.feature_icon}`}>
                <i className="fas fa-award"></i>
              </div>
              <div>
                <h3 className="fs-5">معتمد من منصة ايجار</h3>
                <p className={`${Style.feature_P}`}>
                  نحن مؤسسة سعودية رسمية مسجلة في وزارة التجارة وحصلنا على رخصة
                  اعتماد كوسيط عقاري معتمد من منصة ايجار التابعة لوزارة الإسكان
                  ، يمكنك التعرف علينا أكثر من خلال صفحة{" "}
                  <Link to="/about" className={`${Style.about_link}`}>
                    من نحن
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className={`${Style.features} text-center`}>
              <div className={`${Style.feature_icon}`}>
                <i className="fas fa-history"></i>
              </div>
              <div>
                <h3 className="fs-5">أسرع شي في كل الأوقات</h3>
                <p className={`${Style.feature_P}`}>
                  يمكنك طلب العقد في أي وقت يناسبك وسنقوم بتنفيذه لك خلال 30
                  دقيقة فقط ، نعمل 12 ساعة يومياً وفي كل الأيام حتى في الإجازات
                  والأعياد
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className={`${Style.features} text-center`}>
              <div className={`${Style.feature_icon}`}>
                <i class="fas fa-map-marker-alt"></i>{" "}
              </div>
              <div>
                <h3 className="fs-5">في كل مكان</h3>
                <p className={`${Style.feature_P}`}>
                  اطلب عقدك ايجارك الالكتروني من أي مكان في المملكة وسيصلك في
                  اسرع وقت ممكن من وقت استلامنا لكامل الطلبات ، نعم ، في أسرع
                  وقت ومن أي مكان في المملكة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
