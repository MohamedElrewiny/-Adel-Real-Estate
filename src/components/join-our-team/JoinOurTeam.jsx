import React from "react";
import Style from "./JoinOurTeam.module.css";

const JoinOurTeam = () => {
  return (
    <section className="main-section py-5">
      <h1 className="heading">انضم لفريق المندوبين</h1>

      <div className={`${Style.row}`}>
        <div className="col-xs-12 col-sm-12 col-md-12 fs-6">
          إذا كنت تريد العمل معنا من خلال تحويل عملاء علينا والحصول على عمولة ،
          فأنت في المكان المناسب ، <br />
          <br />
          تفضل بالتواصل معنا من خلال الواتساب{" "}
          <a href="https://wa.me/966502721582">بالضغط هنا</a> أو مراسلتنا على
          البريد الإلكتروني{" "}
          <a href="mailto:adelrealestate.sa@gmail.com">
            adelrealestate.sa@gmail.com
          </a>{" "}
          وسنكون سعداء بالعمل معاً وتزويدك بأدوات تساعدك في استقطاب عملاء أكثر و
          متابعة ارباحك من خلالنا.
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
