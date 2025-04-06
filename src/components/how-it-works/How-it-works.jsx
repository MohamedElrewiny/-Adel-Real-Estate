import React from "react";

const How_it_works = () => {
  return (
    <section className="main-section py-5 mt-3">
      <div className="container">
        <h1 className="heading">كيف نعمل</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <figure>
                <iframe
                  className="w-100 rounded-3"
                  src="https://www.youtube.com/embed/Meb82StIWeg?feature=oembed"
                  height="600"
                ></iframe>
            </figure>
            <br />
            <br />
            <figure>
                <iframe
                  className="w-100 rounded-3"
                  src="https://www.youtube.com/embed/O9u4QVrMZ34?feature=oembed"
                  height="600"
                ></iframe>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How_it_works;
