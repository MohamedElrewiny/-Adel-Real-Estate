import * as React from "react";
import Style from "./TermsOfUse.module.css";

const TermsOfUse = () => {
  return (
    <>
      <section className="main-section py-5 mt-3">
        <h1 className="heading">سياسة الإستخدام</h1>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className=" accordion-button collapsed p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  الكيان القانوني
                </h4>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse "
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  تنطبق سياسة الاستخدام هذه على موقع (خدمات رفيدة العقارية)
                  الإلكتروني و / أو التطبيق ("الخدمة") الذي تملكه وتديره (خدمات
                  رفيدة العقارية) ، ("المؤسسة") وهي مؤسسة تم تأسيسها وتسجيلها
                  حسب الأصول في مدينة جدة بالسجل التجاري رقم 4030503523. كما
                  أنها (المؤسسة) وسيط عقاري معتمد لدى منصة ايجار التابعة لوزارة
                  الإسكان ومخولة بتنفيذ عقود الإيجار من خلال منصة ايجار.
                </p>
                <p className="fs-6 px-2">
                  توضح سياسة الاستخدام هذه كيفية قيام المؤسسة بجمع واستخدام
                  المعلومات الشخصية التي تقدمها على خدمتنا. كما يصف الخيارات
                  المتاحة لك فيما يتعلق باستخدامنا لمعلوماتك الشخصية وكيف يمكنك
                  الوصول إلى هذه المعلومات وتحديثها.
                </p>
                <p className="fs-6 px-2">
                  ستستخدم المؤسسة اسمك والمعلومات الأخرى المتعلقة بك بالطريقة
                  المنصوص عليها في سياسة الاستخدام هذه. ستقوم المؤسسة بجمع
                  المعلومات فقط عند الضرورة للقيام بذلك وستقوم المؤسسة بجمع
                  المعلومات فقط إذا كانت ذات صلة بمعاملاتها معك.
                </p>
                <p className="fs-6 px-2">
                  ستحتفظ المؤسسة بمعلوماتك فقط طالما كانت المؤسسة مطلوبة بموجب
                  القانون أو كما هي مناسبة للأغراض التي تم جمعها من أجلها.
                </p>
                <p className="fs-6 px-2">
                  من خلال تقديم بيانات شخصية إلى المؤسسة أو وكيل المؤسسة ، أو
                  باستخدام الخدمة ، فإنك توافق على استخدام المؤسسة لبياناتك
                  الشخصية بالطريقة المنصوص عليها في سياسة الاستخدام هذه بما في
                  ذلك جميع الخدمات المقدمة من قبل المؤسسة أو الجهات الخارجية
                  للتحقق هويتك.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  التفويض
                </h4>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  إرسالك لطلب عقد أو التحدث معنا من خلال أي وسيلة من وسائل
                  التواصل الرسمية بالمؤسسة هو إقرار وموافقة منك بتفويض المؤسسة
                  بتنفيذ الخدمة لك والإطلاع بموجبها على البيانات اللازمة لتنفيذ
                  الخدمة
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  تسعير الخدمات
                </h4>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  تحاول المؤسسة تقديم معلومات تسعير دقيقة فيما يتعلق بالخدمات
                  المقدمة المتوفرة على خدمة المؤسسة. ومع ذلك ، فإن المؤسسة لا
                  تمثل أو تتعهد بأن الأسعار خالية من الأخطاء. تحتفظ المؤسسة
                  بالحق ، وفقًا لتقديرها الخاص ، في عدم معالجة أو إلغاء أي طلبات
                  مقدمة لخدمة تم نشر سعرها بشكل غير صحيح على الخدمة نتيجة لخطأ
                  ما. بالإضافة إلى ذلك ، تحتفظ المؤسسة بحقها ، وفقًا لتقديرها
                  الخاص ، في تصحيح أي خطأ في سعر البيع بالتجزئة الكامل والمعلن.
                </p>
                <p className="fs-6 px-2">
                  فيما يلي اسعار الخدمات الإضافية غير شاملة للرسوم الحكومية ، مع
                  احتفاظ المؤسسة بحق تغييرها في أي وقت ، هذه الرسوم يتم إضافتها
                  على السعر الاساسي المعلن للخدمة:
                </p>
                <ul className="fs-6 px-2">
                  <li>- 3 ريال في حال الرغبة في استلام تنبيهات برسائل نصية</li>
                  <li>- 6 ريال على كل تعديل يتم بعد مشاهدة المسودة</li>
                  <li>
                    - 10 ريال في كل مرة يتم الإتصال بالعميل لطلب معلومة ناقصة
                  </li>
                  <li>- 15 ريال لإعادة تفعيل العقد بعد إنتهاء الـ 7 أيام</li>
                  <li>- 34 ريال عن كل سنة إضافية للسكني</li>
                  <li>- 50 ريال عن كل سنة إضافية للتجاري</li>
                  <li>- 50 ريال للتعامل مع أي طلب بصك ورقي</li>
                  <li>- 75 ريال في حال وجود وكيل لأحد الأطراف أو ورثة</li>
                </ul>
                <p className="fs-6 px-2">
                  السعر الاساسي للعقد السكني للسنة الواحدة هو 400 ريال والسعر
                  الاساسي للعقد التجاري للسنة الواحدة هو 600 ريال كلاهما يشملان
                  رسوم شبكة ايجار وخدمات التوثيق ، تقوم المؤسسة من فترة لأخرى
                  بتخفيض اسعار هاتين الخدمتين كعروض خاصة مؤقتة وبدون إشعار مسبق.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  المحفظة والخصومات
                </h4>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul className="fs-6 px-2">
                  <li>
                    - تستمر صلاحية الرصيد في المحفظة لمدة سنة كاملة من آخر تحديث
                    حصل على المحفظة
                  </li>
                  <li>
                    - لايمكن المطالبة برصيد المحفظة نقدا وانما يستخدم رصيد
                    المحفظة في خدمات المنصة
                  </li>
                  <li>
                    - العروض والخصومات والتخفيضات تكون فقط على عمولة المؤسسة ولا
                    تشمل رسوم الدولة. مثال للتوضيح : قمنا بإعطا العميل عقد مجانا
                    ، هذا يعنني ان المؤسسة لن تأخذ أي عمولة وستكون قيمة العقد
                    فقط 125 ريال (رسوم الدولة) + الضريبة
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  التسليم في 30 دقيقة
                </h4>
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  يعمل فريقنا على مدار 12 ساعة يوميا من الساعة 9 صباحاً وحتى
                  الساعة 9مساءً طوال أيام الاسبوع ، وعليه فإنك ستحصل على عقدك
                  الإلكتروني إذا تم تقديمه ضمن هذا الوقت وقبل إنتهاء الوقت بـ 30
                  دقيقة ، اي أن آخر وقت لإستقبال طلب (يمكن تسليمه خلال 30 دقيقة)
                  سيكون الساعة 8:29 مساءً
                </p>
                <p className="fs-6 px-2">
                  بعد استلامنا لطلبك سنرسلك مسودة العقد لمراجعتها قبل اعتمادها ،
                  سرعة إنجاز المعاملة يعتمد عليك سرعة تفاعلك معنا ، حيث انه
                  يتوجب عليك اعتماد المسودة التي تصلك ثم الدفع بعدها تصل رسالة
                  نصية من شبكة ايجار للمؤجر والمستأجر لتوثيق العقد ، أما من
                  ناحيتنا فلا تقلق ، نحن نقوم بالتنفيذ فوراً
                </p>
                <p className="fs-6 px-2">
                  هذه الخدمة مجانية في الوقت الحالي وتُقدم لجميع العملاء ، قد
                  لايستطيع فريقنا الإلتزام بالتسليم خلال 30 دقيقة في حال وجود
                  ضغط على الخدمة ، وهذا لايعطي الحق لطالب الخدمة في طلب أي
                  تعويضات جراء عدم إلتزامنا تحت هذا الظرف.
                </p>
                <p className="fs-6 px-2">فيما يلي رحلة الطلب</p>
                <ul className="fs-6 px-2">
                  <li>نستلم طلبك</li>
                  <li>نرسل لك مسودة خلال 5-10 دقائق</li>
                  <li>تراجع المسودة</li>
                  <li>تدفع أو تعدل المسودة</li>
                  <li>شبكة ايجار ترسل للطرفين رابط التوثيق - 5-10 دقائق</li>
                  <li>بعد توثيق الطرفين يكون العقد جاهز ومعتمد</li>
                </ul>
                <p className="fs-6 px-2">
                  في كثير من الأحيان تكون مصنة ايجار الحكومية متعطلة ، ونقوم
                  بإظهار رسالة للعملاء لتنبيههم بهذا العطل ، في هذه الحالة
                  لايمكننا إتمام العقود إلا بعد عودة منصة ايجار للعمل مرة أخرى.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  استرجاع المبلغ
                </h4>
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  في حال تم توثيق العقد واصبح نشطاً في شبكة ايجار فلايمكن في هذه
                  الحالة إسترجاع المبلغ
                </p>
                <p className="fs-6 px-2">
                  إذا لم يتم توثيق العقد في شبكة ايجار ، يمكن استرجاع المبلغ
                  المدفوع بعد خصم قيمة توثيق الأطراف ، حيث ان هذا المبلغ دُفِع
                  بالفعل لطرف خارجي بغرض توثيق هويات اطراف العقد
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  استخدام الخدمة
                </h4>
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  بهدف الحفاظ على الخدمة بأمان قدر الإمكان ، يشير المستخدم إلى
                  أنه / أنها لن تستخدم الخدمة بأي طريقة غير قانونية أو غير
                  قانونية أو احتيالية أو ضارة ، أو فيما يتعلق بأي غرض غير قانوني
                  أو غير قانوني أو احتيالي أو ضار أو نشاط. لذلك ، لن ينشر
                  المستخدم أي مواد غير قانونية أو تشهيرية أو تشهيرية أو تهديدية
                  أو فاحشة أو غير مرغوب فيها بأي شكل كان ، أو أي محتوى يمثل
                  خطابًا يحض على الكراهية أو إباحية أو أي محتوى ينتهك حقوق
                  الملكية الفكرية بما في ذلك على سبيل المثال لا الحصر حقوق الطبع
                  والنشر أو الحقوق المعنوية أو قاعدة البيانات الحق ، أي محتوى
                  ينتهك حقوق الآخرين أو يغزو خصوصية الآخرين بعد استخدام الوسائل
                  الآلية لجمع محتوى المستخدمين أو بياناتهم أو نشر أي اتصالات
                  تجارية غير مصرح بها (مثل البريد العشوائي) على الخدمة.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  الوسطاء والسماسرة ومكاتب الخدمات
                </h4>
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  هذا الموقع بجميع خدماته مصمم للإستخدام بواسطة أصحاب المصلحة
                  (المؤجر أو المستأجر أو من يمثلهم رسمياً) ، ولايسمح للوسطاء
                  العقاريين أو السماسرة أو مكاتب الخدمات العامة أو الأفراد من
                  غير ذوي المصلحة استخدام خدماتنا بأي شكلِ كان.
                </p>
                <p className="fs-6 px-2">
                  ونؤكد أنه ليس لدينا مندوبين ولا وسطاء ولا ممثلين ، وللحصول على
                  الخدمة التي نقدمها يجب على أصحاب المصلحة (المؤجر أو المستأجر
                  أو من يمثلهم رسمياً) تقديم الطلب بصفته الشخصية من خلال موقعنا
                  الإلكتروني ، في حال قام وسيط عقاري أو مكتب أو أي شخص آخر
                  كائناً من كان من غير أصحاب المصلحة الأصليين (المؤجر أو
                  المستأجر أو من ينوب عنهما رسمياً) بتقديم الطلب فهذا يعتبر
                  إنتحال مباشر للشخصية الإعتبارية للمؤسسة وسيتعرض هذا الشخص
                  للملاحقة القانونية ، وأي خلاف ينشب بين المؤجر والمستأجر بسبب
                  تنفيذنا لعقد تم استلامه بهذه الطريقة فسيترتب عليه تحملهم لكامل
                  المسؤولية والمثول أمام القانون. كما سيتم طلب إعادة جميع
                  المدفوعات التي تمت بغرض إتمام العقد موضوع الخلاف وتعويض
                  الأطراف المتضررة بما فيها المؤسسة. أرقم التواصل الرسمية هي
                </p>
                <ul className="fs-6 px-2">
                  <li>- 0505400106 (اتصال + واتساب)</li>
                </ul>
                <p className="fs-6 px-2">
                  كما أننا نقوم بإرسال رسالة نصية (SMS) لمن تم تقديم الطلب بإسمه
                  للتحذير من التعامل مع أطراف خارجية. ولا يحق لأصحاب المصلحة
                  (المالك أو المؤجر أو من يمثلهما رسمياً) بمطالبتنا بأي تعويضات
                  نتجت عن تصرفه هذا ورغم تحذيرنا له.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  إدارة الحساب والأمان
                </h4>
              </button>
            </h2>
            <div
              id="collapseNine"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  باستخدام الخدمة ، يتعهد المستخدم ويمثل للمؤسسة أنه يبلغ من
                  العمر 18 عامًا على الأقل وأنه / ليس شخصًا ممنوعًا من الدخول في
                  عقود تحت سلطته القضائية المحلية ، وإلا يجب عليه / عليها
                  الامتناع عن استخدام الخدمة. من أجل التمكن من استخدام الخدمة ،
                  سيتعين على المستخدم الموافقة على هذه الشروط (بما في ذلك سياسة
                  الخصوصية) ، للتسجيل للحصول على حساب عن طريق ملء وتقديم نموذج
                  تسجيل الحساب على خدمتنا والنقر على رابط التحقق في البريد
                  الإلكتروني أن الخدمة سوف ترسل إليه / لها ، لتقديم معلومات
                  الاتصال وتفاصيل الهوية وكذلك لتقديم أي شكل آخر من أشكال
                  المصادقة على النحو المطلوب من قبل المؤسسة بما في ذلك سبيل
                  المثال لا الحصر إرسال رمز التحقق عن طريق رسالة نصية أو إشعار
                  الدفع.
                </p>
                <p className="fs-6 px-2">
                  تحتفظ المؤسسة بالحق في رفض أو إلغاء أو إزالة أي شخص من الخدمة
                  ومن استخدام الخدمة لأي سبب من الأسباب ، في أي وقت دون سابق
                  إنذار. باستخدام الخدمة ، يوافق المستخدم على استخدام ملفات
                  تعريف الارتباط من قبل المؤسسة بما يتوافق مع شروط سياسة
                  الخصوصية الخاصة بنا.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  حماية عمليات التوثيق
                </h4>
              </button>
            </h2>
            <div
              id="collapseTen"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  نبذل في منصتنا كل الطرق الممكنة للتحقق من هويات أطراف العقد من
                  خلال الربط التقني مع الجهات ذات الاختصاص مثل مركز المعلومات
                  الوطني (NIC) ووزارة العدل (MOJ) ومنصة ايجار والرسائل النصية
                  SMS وتوثيق الواتساب ، وتتم عملية توثيق العقد بواسطة الطرفين من
                  خلال رقم الجوال المسجل في أبشر ، وبالتالي فإن آخر خطوة في
                  عملية التوثيق لاتتم إطلاقاً إلا بوصول رمز تحقق من خلال الرقم
                  المسجل في آبشر لصاحب الصلاحية بالوصول لحساب أبشر.
                </p>
                <p className="fs-6 px-2">
                  لاتقم بمشاركة رمز التحقق مع أي أحد ، وفي حال اشتباهك بوجود
                  عملية توثيق تمت بدون علمك فتوجه فوراً برفع بلاغ لدى الجهات
                  المعنية
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse11"
                aria-expanded="false"
                aria-controls="collapse11"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  الملكية الفكرية
                </h4>
              </button>
            </h2>
            <div
              id="collapse11"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  تمتلك المؤسسة ومانحو التراخيص أو مزودي المحتوى التابع لها
                  حصريًا جميع حقوق الطبع والنشر وحقوق الملكية الفكرية المتاحة من
                  خلال الخدمة والتحكم فيها (بما في ذلك على سبيل المثال لا الحصر
                  ، النص ، التصميم ، الرسومات ، الشعارات ، الرموز ، الصور ،
                  مقاطع الصوت ، التنزيلات ، الواجهات الرمز والبرمجيات). لذلك ،
                  فإن أي نسخ أو توزيع أو نشر أو ربط أو تعديل بطريقة أخرى لخدمة
                  المؤسسة من قبل المستخدم دون الحصول على إذن كتابي صريح من
                  المؤسسة ستعتبر حقوق نشر أو علامة تجارية أو غيرها من انتهاكات
                  حقوق الملكية الفكرية وقد تكون خاضعة لحقوق مدنية و / أو إجراءات
                  قانونية جنائية.
                </p>
                <p className="fs-6 px-2">
                  يمنح المستخدم ترخيصًا محدودًا من قبل المستخدم للوصول إلى
                  الخدمة واستخدامها. لذلك ، يجوز له / لها عرض وتنزيل وطباعة وحفظ
                  الصفحات التي تحتوي على مواد محمية بحقوق النشر من خدمتنا
                  للاستخدام الشخصي فقط ، بعد الإقرار بأنه / هي لا يكتسب أي حقوق
                  ملكية ناتجة عن هذه الإجراءات. ومع ذلك ، تحتفظ المؤسسة والجهات
                  المرخصة لها أو مزوديها بالملكية الكاملة والكاملة للمحتوى
                  المتاح على الخدمة ، بما في ذلك جميع حقوق الملكية الفكرية
                  المرتبطة بها ، وتوفر هذا المحتوى للمستخدم بموجب ترخيص قابل
                  للإلغاء في أي وقت وفقًا للمؤسسة السلطة التقديرية الوحيدة.
                </p>
                <p className="fs-6 px-2">
                  فيما يتعلق بالمحتوى المشمول بحقوق الملكية الفكرية التي ينشرها
                  المستخدم أو يحمّلها أو يقدمها أو يتيحها على الخدمة ، بما في
                  ذلك على سبيل المثال لا الحصر النصوص والرسومات والصور والمواد
                  الصوتية ومواد الفيديو والمواد السمعية البصرية والبرامج ، يمنح
                  المستخدم صراحةً مؤسسة على مستوى العالم ، لا رجعة فيها ، غير
                  حصرية ، مرخصة من الباطن ، وخالية من حقوق الامتياز لاستخدام ،
                  إعادة إنتاج ، تعديل ، تخزين ، تكييف ، نشر ، ترجمة وتوزيع
                  المحتوى الخاص به / لها في أعمال أخرى بأي شكل أو وسائط أو
                  تكنولوجيا معروفة حاليًا أو التي قد تكون موجودة في المستقبل.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse12"
                aria-expanded="false"
                aria-controls="collapse12"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  الاتصالات الالكترونية
                </h4>
              </button>
            </h2>
            <div
              id="collapse12"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  يوافق المستخدم على أنه عندما يستخدم الخدمة أو يرسل رسائل بريد
                  إلكتروني إلى المؤسسة ، فإنه يتواصل مع المؤسسة إلكترونيًا. لذلك
                  ، هو / هي يوافق على تلقي أي رسائل إلكترونية تتعلق باستخدامه /
                  ها للخدمة. ستتواصل المؤسسة مع المستخدم بجميع وسائل الاتصال
                  الإلكترونية المتفق عليها. هو / هي توافق وتقر بأن جميع
                  الاتفاقات والإشعارات وغيرها من المراسلات التي يتم تقديمها إليه
                  / لها إلكترونيًا تُلبي جميع المتطلبات القانونية السارية على
                  العملية التعاقدية. لذلك ، لا يمكن حرمانهم من الفعالية
                  القانونية والصلاحية بسبب أنهم صنعوا بالوسائل الإلكترونية.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse13"
                aria-expanded="false"
                aria-controls="collapse13"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  المعلومات الواجب تقديمها
                </h4>
              </button>
            </h2>
            <div
              id="collapse13"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  تشير المؤسسة إلى أنه سيتم تقديم المعلومات التالية إلى المستخدم
                  بشكل واضح ومفهوم وبشكل لا لبس فيه قبل تقديم أي طلب ، إذا كان
                  يرغب / ترغب في تقديم طلبه بالوسائل التكنولوجية: الخطوات
                  التقنية المختلفة التي يجب اتباعها لإبرام العقد ، سواء تم تقديم
                  العقد المبرم من قبل المؤسسة أم لا ، وما إذا كان سيتم الوصول
                  إليه ، والوسائل التقنية لتحديد وتصحيح أخطاء الإدخال قبل تقديم
                  الطلب واللغات المقدمة لإبرام العقد.
                </p>
                <p className="fs-6 px-2">
                  نقوم بتقديم الخدمة لمن قام بطلبها وعلى مايوفره / توفرها لنا من
                  معلومات كماهي بدون التغيير فيها ، وعليه فإن طالب الخدمة يؤكد
                  أن جميع البيانات صحيحة وعلى مسؤوليته الشخصية ، وفي حال وجود أي
                  غرامات أو نزاعات أو خلافات بسبب ماتم تقديمه من بيانات غير
                  صحيحه فإن المستخدم وحده يتحمل هذه المسؤولية كاملةً ولا يحق له
                  أو لأي طرف متضرر من هذه المعلومات الغير صحيحة مطالبة المؤسسة
                  أو أحد أفرادها
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse14"
                aria-expanded="false"
                aria-controls="collapse14"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  الخدمات
                </h4>
              </button>
            </h2>
            <div
              id="collapse14"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  تشمل "الخدمات" جميع الوسائل المستخدمة للمساعدة في ربط العملاء
                  ، أو المستخدمين الآخرين ، بالمساعدين ، سواء في الأسواق المحلية
                  أو الدولية ، التي تعرضها المؤسسة للبيع على الخدمة. تعتبر هذه
                  الخدمات متوافقة مع القوانين واللوائح المعمول بها في المملكة
                  العربية السعودية. تحاول المؤسسة تقديم أوصاف دقيقة ودقيقة
                  للخدمات على الخدمة لكنها لا تضمن دقة وموثوقية الأوصاف.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse15"
                aria-expanded="false"
                aria-controls="collapse15"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  وضع النظام
                </h4>
              </button>
            </h2>
            <div
              id="collapse15"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  يمكن للمستخدم تقديم طلبه / طلبها بالوسائل التكنولوجية عندما
                  يرغب / ترغب في شراء أي خدمة متوفرة على خدمة المؤسسة. يعتبر
                  العقد عبر الإنترنت بين المستخدم والمؤسسة قد تشكل عندما يتم
                  استلام قبول العرض من قبل المؤسسة. تحتفظ المؤسسة بالحق في
                  اختيار عدم معالجة أو إلغاء طلب المستخدم في ظروف معينة ، بما في
                  ذلك على سبيل المثال لا الحصر ، حالة تم فيها إساءة تسعير الخدمة
                  التي يرغب المستخدم في شرائها. في هذا الحدث ، لن تقوم المؤسسة
                  إما بتحصيل رسوم على المستخدم أو رد رسوم الطلبات غير المجهزة أو
                  الملغاة. يجوز للمؤسسة أيضًا ، وفقًا لتقديرها الخاص ، اتخاذ
                  خطوات للتحقق من هوية المستخدم لمعالجة طلبه.
                </p>
                <p className="fs-6 px-2">
                  كوسيط عقاري معتمد من منصة ايجار ، فنحن نعتمد إعتماد كل في
                  تسجيل الطلبات الواردة في منصة ايجار ، وعليه في حال عدم تمكن
                  فريق عمل المؤسسة من تقديم الخدمة بسبب وجود عطل في منصة ايجار
                  أو لأي سبب قاهر خارج عن تصرف وإرادة المؤسسة ، فلن يتم استاب
                  رسوم إضافة على الخدمة إلا السعر الاساسي المعلن ، كما لاتتحمل
                  المؤسسة أو طاقمها أي ضرر يصيب أطراف عقد الإيجار بسبب أي تأخير
                  أو عطل يشوب منصة إيجار.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse16"
                aria-expanded="false"
                aria-controls="collapse16"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  الدفع
                </h4>
              </button>
            </h2>
            <div
              id="collapse16"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  حسب توجهات المملكة العربية السعودية لحوكمة عمليات الدفع ، فإن
                  جميع عمليات الدفع التي تتم مقابل تحصيل الخدمات تتم إلكترونياً
                  من خلال إستخدام بطائق مدى أو من خلال البطائق الإتمانية ، وفي
                  حالة الدفع نقداً سيتم تحصيل رسوم إضافية تعادل 30% من قيمة
                  الخدمة المراد دفعها.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse17"
                aria-expanded="false"
                aria-controls="collapse17"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  تسليم الخدمة
                </h4>
              </button>
            </h2>
            <div
              id="collapse17"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  يتم تسليم العملاء رابط ملف PDF يحتوي على مسودة العقد التي تم
                  إنشاءها من خلال منصة ايجار ، وفي حال راجع العميل المسودة وتأكد
                  من صحة البيانات الواردة فيها وسداد المبلغ ، بعد السداد سيصل
                  للطرفين رسالة من منصة ايجار تطلب الطرفين بإعتماد العقد ، بعد
                  إعتماد الطرفين سيصل رابط العقد النهائي موثق ومعتمد من منصة
                  ايجار.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse18"
                aria-expanded="false"
                aria-controls="collapse18"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  حماية البيانات على الانترنت
                </h4>
              </button>
            </h2>
            <div
              id="collapse18"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  توجد سياسة الخصوصية التي تنطبق على جمع المعلومات الشخصية
                  واستخدامها والإفصاح عنها ومعالجتها من قبل المؤسسة على هذا
                  الرابط . يوافق المستخدم على أي معلومات شخصية قد نحصل عليها
                  (سواء عبر الخدمة أو عبر البريد الإلكتروني أو الهاتف أو أي
                  وسيلة أخرى) يتم جمعها وتخزينها ومعالجتها بطريقة أخرى وفقًا
                  لشروط سياسة الخصوصية. يجوز للمؤسسة تحديث سياسة الخصوصية الخاصة
                  بها من وقت لآخر ، وفقًا لتقديرها الخاص ، ونشر نسخة محدثة من
                  الإشعار في الخدمة.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse19"
                aria-expanded="false"
                aria-controls="collapse19"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  التغييرات
                </h4>
              </button>
            </h2>
            <div
              id="collapse19"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  يجوز للمؤسسة تغيير هذه الشروط من وقت لآخر. ستقوم المؤسسة
                  بإخطار المستخدم كتابيًا بأي مراجعة لهذه الشروط ، وستنطبق
                  الشروط المعدلة على استخدام الخدمة بدءًا من تاريخ إخطاره / ها.
                  لذلك ، ستتاح له / لها فرصة مراجعة الشروط المعدلة والتعليق
                  عليها قبل الاستمرار في استخدام الخدمة. إذا كان المستخدم لا
                  يوافق على الشروط المعدلة ، فيجب عليه التوقف عن استخدام الخدمة.
                  لذلك ، إذا استمر هو / هي في استخدام الخدمة بعد إخطاره ، فهذا
                  يعني أنه / هي قد قرأ ووافق على الشروط المنقحة.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse20"
                aria-expanded="false"
                aria-controls="collapse20"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  إخلاء المسؤولية
                </h4>
              </button>
            </h2>
            <div
              id="collapse20"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  تقوم المؤسسة بتقديم الخدمة كما هي ولا تقدم أي تعهدات أو تعهدات
                  أو ضمانات صريحة أو ضمنية بما في ذلك على سبيل المثال لا الحصر ،
                  القابلية للتسويق أو الملاءمة أو الملاءمة لاستخدام معين أو غرض
                  وعدم انتهاك عضوية الخدمة وأي محتوى أو إجراءات ، دقة المعلومات
                  والبيانات من أطراف ثالثة على الخدمة.
                </p>
                <p className="fs-6 px-2">
                  تبذل المؤسسة جهدًا معقولًا للحفاظ على أداء الخدمة وخالية من
                  الأخطاء ، مع العلم أن المستخدم يستخدمها على مسؤوليته الخاصة.
                </p>
                <p className="fs-6 px-2">
                  تتنصل المؤسسة من أي ضمانات بأن الوصول إلى الخدمة سيكون دائمًا
                  آمنًا أو آمنًا أو خاليًا من الفيروسات أو خاليًا من الأخطاء أو
                  أن الخدمة ستعمل دون فشل في الأداء أو الإغفال أو الانقطاع أو
                  الحذف أو التأخير في التشغيل أو التدمير أو الوصول غير المصرح به
                  إلى أو تغيير أو استخدام السجل.
                </p>
                <p className="fs-6 px-2">
                  سيكون تنزيل أي محتوى من الخدمة وفقًا لتقدير المستخدم ومخاطره ،
                  وسيكون هو / هي المسؤول الوحيد عن أي ضرر لنظام الكمبيوتر الخاص
                  به أو فقدان البيانات الناتجة عن التنزيل. لن تتحمل المؤسسة ، أو
                  أي شخص أو كيان مشارك في تقديم الخدمة ، بأي حال من الأحوال ، أي
                  أضرار ، بما في ذلك على سبيل المثال لا الحصر ، الأضرار المباشرة
                  أو غير المباشرة أو العرضية أو الخاصة أو التبعية أو العقابية
                  الناشئة عن استخدام أو عدم القدرة على استخدام الخدمة.
                </p>
                <p className="fs-6 px-2">
                  المؤسسة ليست مسؤولة عن أي محتوى قد ينشره المستخدمون أو
                  المشتركون أو أي مستخدم غير مصرح به على خدمة المؤسسة. تحتفظ
                  المؤسسة بحقها في تغيير أي محتوى غير قانوني وتعديله وحذفه وحظره
                  ، وفقًا لتقديرها الخاص بعد إخطار المستخدم بسحبه في غضون فترة
                  زمنية معقولة.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse21"
                aria-expanded="false"
                aria-controls="collapse21"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  حدود المسؤولية
                </h4>
              </button>
            </h2>
            <div
              id="collapse21"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  المساعدون الذين تتوفر خدماتهم على خدمة المؤسسة هم مقاولون
                  مستقلون وليسوا وكلاء أو موظفين في المؤسسة. لذلك ، فإن المؤسسة
                  ليست مسؤولة عن الأفعال أو الأخطاء أو الإغفالات أو الإقرارات أو
                  الضمانات أو الخروقات أو الإهمال لأي من هؤلاء المساعدين أو عن
                  أي إصابات شخصية أو وفاة أو أضرار في الممتلكات أو أضرار أو
                  نفقات أخرى ناتجة عنهم.
                </p>
                <p className="fs-6 px-2">
                  يقر المستخدم ويوافق على أنه / هي يتحمل المسؤولية كاملة عن
                  استخدامه / ها للخدمة و / أو الحساب ، والاتصالات مع أطراف ثالثة
                  ، وشراء واستخدام الخدمات المتاحة من خلال خدمة المؤسسة. يقر
                  المستخدم ويوافق على أنه على الرغم من أن المؤسسة تتخذ تدابير
                  معقولة لحماية المعلومات ، فإن أي معلومات يرسلها المستخدم أو
                  يستلمها خلال نشاطه على الخدمة و / أو استخدام الخدمة قد لا تكون
                  آمنة وقد يتم اعتراضها من قبل أطراف غير مصرح لها بذلك.
                </p>
                <p className="fs-6 px-2">
                  يقر المستخدم ويوافق على أنه ، إلى أقصى حد يسمح به القانون
                  المعمول به ، لن تتحمل المؤسسة أو مرخصوها أو موردوها أو مقدمو
                  خدمات الطرف الثالث المسؤولية عن أي أضرار مباشرة أو غير مباشرة
                  أو تأديبية أو عرضية أو خاصة أو تبعية أو غيرها. ناشئة عن أو
                  مرتبطة بأي شكل من الأشكال بالخدمة ، أو أي موقع أو مورد آخر يصل
                  إليه المستخدم من خلال رابط من هذه الخدمة ؛ أي إجراء تتخذه
                  المؤسسة أو تفشل في تنفيذه نتيجة للاتصالات التي يرسلها المستخدم
                  إلى المؤسسة ؛ حسابه ، أي إنهاء أو إلغاء حسابه ؛ أي خدمات يتم
                  توفيرها أو شراؤها من خلال خدمة المؤسسة ، بما في ذلك أي أضرار
                  أو أضرار تنشأ عن أي استخدام لهذه الخدمات ؛ أي تأخير أو عدم
                  القدرة على استخدام الخدمة أو أي معلومات ، أو الخدمات المعلن
                  عنها أو التي تم الحصول عليها من خلال الخدمة ؛ أو تعديل أو
                  إزالة أو حذف أي محتوى مقدم أو منشور على الخدمة.
                </p>
                <p className="fs-6 px-2">
                  سيكون تنزيل أي محتوى من الخدمة وفقًا لتقدير المستخدم ومخاطره ،
                  وسيكون هو / هي المسؤول الوحيد عن أي ضرر لنظام الكمبيوتر الخاص
                  به أو فقدان البيانات الناتجة عن التنزيل. لن تتحمل المؤسسة ، أو
                  أي شخص أو كيان مشارك في تقديم الخدمة ، بأي حال من الأحوال ، أي
                  أضرار ، بما في ذلك على سبيل المثال لا الحصر ، الأضرار المباشرة
                  أو غير المباشرة أو العرضية أو الخاصة أو التبعية أو العقابية
                  الناشئة عن استخدام أو عدم القدرة على استخدام الخدمة.
                </p>
                <p className="fs-6 px-2">
                  المؤسسة ليست مسؤولة عن أي محتوى قد ينشره المستخدمون أو
                  المشتركون أو أي مستخدم غير مصرح به على خدمة المؤسسة. تحتفظ
                  المؤسسة بحقها في تغيير أي محتوى غير قانوني وتعديله وحذفه وحظره
                  ، وفقًا لتقديرها الخاص بعد إخطار المستخدم بسحبه في غضون فترة
                  زمنية معقولة.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse22"
                aria-expanded="false"
                aria-controls="collapse22"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  التعويضات{" "}
                </h4>
              </button>
            </h2>
            <div
              id="collapse22"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  يوافق المستخدم على الدفاع عن المؤسسة وتعويضها وإلحاق ضرر بها
                  ضد وضد أي وجميع المطالبات والأضرار والتكاليف والنفقات ، بما في
                  ذلك أتعاب المحاماة ، الناشئة عن أو المتعلقة باستخدامه / ها
                  للخدمة و / أو خرقه أي تمثيل أو ضمان أو أي شرط آخر من الشروط.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse23"
                aria-expanded="false"
                aria-controls="collapse23"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  إنهاء الخدمة
                </h4>
              </button>
            </h2>
            <div
              id="collapse23"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  تحتفظ المؤسسة بالحق في إنهاء هذه الشروط أو التوقف عن تقديم
                  الخدمة بعد إخطار المستخدم في غضون فترة زمنية معقولة لأي سبب
                  تراه معقولاً وفقًا لتقديرها الخاص وفي حالة خرق هذه الشروط بأي
                  طريقة أو إذا تشك المؤسسة بشكل معقول في أنه / هي قد انتهكت هذه
                  الشروط بأي طريقة.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse24"
                aria-expanded="false"
                aria-controls="collapse24"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  التنازلات
                </h4>
              </button>
            </h2>
            <div
              id="collapse24"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  إن إغفال المؤسسة بالتصرف فيما يتعلق بانتهاك هذه الشروط من قِبل
                  المستخدمين والزوار وغيرهم ممن يصلون إلى الخدمة أو يستخدمونها ،
                  لا يتنازل عن حق المؤسسة في التصرف فيما يتعلق بالانتهاكات
                  المماثلة اللاحقة.
                </p>
                <p className="fs-6 px-2">
                  إذا كان أي محتوى على هذه الخدمة ، أو استخدام المستخدم للخدمة ،
                  مخالفًا لقوانين المكان الذي يوجد فيه المستخدم عندما يصل إليه ،
                  فإن الخدمة ليست موجهة إليه ، وتطلب المؤسسة من المستخدم عدم
                  استخدام الخدمة. المستخدم مسؤول عن إبلاغ نفسه بقوانين اختصاصه
                  والامتثال لها.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse25"
                aria-expanded="false"
                aria-controls="collapse25"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  المنازعات (القانون والاختصاص القضائي)
                </h4>
              </button>
            </h2>
            <div
              id="collapse25"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  يخضع حل أي مطالبة أو نزاع ينشأ عن أو يتعلق بهذه الشروط أو
                  المؤسسة للاختصاص القضائي الحصري للمحاكم السعودية. تحكم قوانين
                  المملكة العربية السعودية هذه الشروط وأي مطالبة أو نزاع قد ينشأ
                  بين المستخدم والمؤسسة ، بغض النظر عن أحكام تنازع القوانين.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header p-0">
              <button
                className="accordion-button collapsed  p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse26"
                aria-expanded="false"
                aria-controls="collapse26"
              >
                <h4
                  className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
                >
                  محتوى الطرف الثالث
                </h4>
              </button>
            </h2>
            <div
              id="collapse26"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="fs-6 px-2">
                  يوضح المحتوى المتاح من خلال الخدمة آراء مزودي المعلومات أو
                  المستخدمين أو غيرهم من الزوار غير الملتزمين بعقود مع المؤسسة.
                  لا تتحمل المؤسسة مسؤولية دقة أو موثوقية أي رأي أو نصيحة أو
                  بيان يتم تقديمه بشأن الخدمة من قبل أي شخص آخر غير الموظفين
                  المعتمدين للمؤسسة أثناء العمل بصفتهم الرسمية. تحتوي الخدمة على
                  روابط لمواقع الطرف الثالث ، والتي يتم توفيرها فقط كراحة
                  للمستخدمين وليس كمصادقة من جانب المؤسسة للمحتويات الموجودة في
                  مواقع الطرف الثالث هذه. تتنصل المؤسسة من أي تمثيل أو ضمان فيما
                  يتعلق بهذا المحتوى ويكون وصول المستخدم إلى هذه المواقع تحت
                  مسؤوليته الخاصة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUse;
