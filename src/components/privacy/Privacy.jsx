import React from "react";
import Style from "./Privacy.module.css";

const Privacy = () => {
  return (
    <section className="main-section py-5 mt-3">
      <h1 className="heading">سياسة الخصوصية</h1>

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
                تنطبق سياسة الاستخدام هذه على موقع (عادل العقارية) الإلكتروني و
                / أو التطبيق ("الخدمة") الذي تملكه وتديره (عادل العقارية) ،
                ("المؤسسة") وهي مؤسسة تم تأسيسها وتسجيلها حسب الأصول في مدينة
                جدة بالسجل التجاري رقم 5850158580 وعنوانها 2456 طريق الملك عبدالعزيز  حي المفتاحه ابها. في قدرتها على التحكم في
                البيانات الشخصية.
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
                الشخصية بالطريقة المنصوص عليها في سياسة الاستخدام هذه بما في ذلك
                جميع الخدمات المقدمة من قبل المؤسسة أو الجهات الخارجية للتحقق
                هويتك.
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
                البيانات التي تجمعها المؤسسة
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
                تتم معالجة بياناتك الشخصية (الاسم الأول والاسم الأخير والبريد
                الإلكتروني ومعلومات الفوترة مثل رقم بطاقة الائتمان وعنوان
                الفواتير) من قبل المؤسسة.
              </p>
              <p className="fs-6 px-2">
                يتم جمع بياناتك ومعالجتها من أجل: إدارة حسابك ، ومعالجة طلباتك
                (بما في ذلك على سبيل المثال لا الحصر تقديم الخدمات) ، والتحقق من
                المعاملات المالية المتعلقة بالمدفوعات التي تقوم بها عبر الإنترنت
                وتنفيذها (بما في ذلك على سبيل المثال لا الحصر التحقق من الدفع
                وحماية الغش) ، إجراء التسويق المباشر ، ومراجعة تنزيل البيانات من
                الخدمة ، وتحديد الزائرين على الخدمة ، وإجراء البحوث حول التركيبة
                السكانية لمستخدمي المؤسسة ، و / أو إرسال معلومات إليك ترى
                المؤسسة أنها قد تجدها مفيدة أو التي طلبتها من المؤسسة (بما في
                ذلك المعلومات حول المؤسسة أو النشرات الإخبارية أو المبيعات أو
                العروض الترويجية) ، بشرط أن تكون قد أوضحت أنك لم تعترض على
                الاتصال بك لهذه الأغراض.
              </p>
              <p className="fs-6 px-2">
                ستستخدم المؤسسة بياناتك الشخصية للأغراض المذكورة أعلاه فقط.
              </p>
              <p className="fs-6 px-2">
                من خلال تقديم بياناتك الشخصية للمؤسسة ، فإنك توافق على أن يتم
                نقلها إلى شركائها التجاريين ، الذين قد يكونون موجودين في بلد
                خارج الاتحاد الأوروبي ("EU") حيث قد تنطبق معايير أخرى لحماية
                البيانات ، بما في ذلك الشركات التي تدخلها يُطلب من معالجات
                البيانات ، التي تعمل نيابة عن المؤسسة وتحت سيطرة المؤسسة ، تحقيق
                الأغراض المذكورة أعلاه.
              </p>
              <p className="fs-6 px-2">
                وفقًا لما ورد أعلاه ، لن تقوم المؤسسة بالإفصاح عن هذه البيانات
                الشخصية أو بيعها أو تأجيرها أو تبادلها إلى أي منظمة أو كيان آخر
                ، ما لم يتم إعلامك أولاً والموافقة الصريحة ، أو وفقًا لما يقتضيه
                القانون.
              </p>
              <p className="fs-6 px-2">
                قد يتم تخزين تفاصيل طلبك الفعلية على خادم المؤسسة ولكن لأسباب
                أمنية لا يمكن استردادها مباشرة من قبل المؤسسة. ومع ذلك ، يمكنك
                الوصول إلى هذه المعلومات عن طريق تسجيل الدخول إلى حسابك على
                الخدمة. هناك يمكنك عرض تفاصيل طلبات الشراء التي تم إكمالها ،
                وتلك التي يتم فتحها وتلك التي سيتم إرسالها قريبًا ؛ وإدارة
                تفاصيل عنوانك وتفاصيل البنك وأي نشرة إخبارية قد تكون قد اشتركت
                فيها.
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
                سجل المعلومات
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
                في كل مرة تقوم فيها بتسجيل الدخول إلى الخدمة ، يتم إرسال
                المعلومات من المستعرض الخاص بك إلى ملفات سجل خادم المؤسسة ، حيث
                سيتم حفظها. تتضمن المعلومات المنقولة: وقت وتاريخ زيارة الخدمة ،
                والصفحات التي تم عرضها ، وعنوان IP ، وعنوان URL للموقع الذي
                أحالك إلى الخدمة ، وكم المعلومات التي تم تخزينها والمتصفح الذي
                تستخدمه.
              </p>
              <p className="fs-6 px-2">
                ثم يتم استخدام المعلومات المخزنة في ملف السجل هذا لتحسين استخدام
                الخدمة من خلال جعل التنقل أكثر سهولة في الاستخدام ، والعثور على
                الأخطاء بسرعة وتوجيه سعة خادم المؤسسة إلى الأماكن التي تشتد
                الحاجة إليها. أنت توافق وتقر بأنه باستخدام الخدمة ، فإنك تمنح
                المؤسسة الإذن لتحليل واستخدام بيانات البروتوكول لتطوير وتحسين
                تنقلك على الخدمة.
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
                الكوكيز (الكعكات){" "}
              </h4>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="fs-6 px-2">
                تستخدم المؤسسة وشركاؤها ملفات تعريف الارتباط أو التقنيات
                المماثلة كعلامات إجراءات لتحليل الاتجاهات وإدارة الخدمة وتتبع
                تحركات المستخدمين حول الخدمة وجمع المعلومات الديموغرافية حول
                قاعدة مستخدمينا ككل. يمكن للمستخدمين التحكم في استخدام ملفات
                تعريف الارتباط على مستوى المستعرض الفردي.
              </p>
              <p className="fs-6 px-2">
                ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم وضعها على جهاز
                الكمبيوتر الخاص بك لتحديد مستعرض الويب الخاص بك وأنشطة جهاز
                الكمبيوتر الخاص بك على الخدمة ومواقع الويب الأخرى. قد تستخدم
                المؤسسة ملفات تعريف الارتباط لمراقبة كيفية استخدامك للخدمة أو
                لمساعدتها على تحسين عروضها عبر الإنترنت أو لتحديد مدى شعبية
                محتوى معين. علاوة على ذلك ، ترسل المؤسسة "ملف تعريف ارتباط
                للجلسة" إلى جهاز الكمبيوتر الخاص بك عند تسجيل الدخول إلى الخدمة.
                تسمح ملفات تعريف ارتباط الجلسة هذه للمؤسسة بالتعرف على ما إذا
                كنت تزور صفحات متعددة أثناء جلسة المتصفح نفسها ، دون الحاجة إلى
                إعادة إدخال معلومات تسجيل الدخول الخاصة بك عدة مرات. على الرغم
                من أن معظم المتصفحات مضبوطة في البداية لقبول ملفات تعريف
                الارتباط ، يمكنك إعادة ضبط المتصفح الخاص بك لإعلامك عندما تتلقى
                ملف تعريف ارتباط أو لرفض ملفات تعريف الارتباط بشكل عام. تقدم
                معظم المتصفحات إرشادات حول كيفية القيام بذلك في قسم "المساعدة"
                من شريط الأدوات.
              </p>
              <p className="fs-6 px-2">
                علامات الإجراء (تُعرف أيضًا باسم إشارات الويب أو علامات gif) هي
                تقنية ويب تُستخدم للمساعدة في تتبع معلومات استخدام موقع الويب ،
                مثل عدد مرات مشاهدة صفحة معينة. علامات الإجراء غير مرئية لك ،
                وقد يحتوي أي جزء من خدمة المؤسسة ، بما في ذلك الإعلانات أو
                البريد الإلكتروني المرسل نيابة عن المؤسسة ، على علامات إجراءات.
                يجوز للمؤسسة اختيار واستخدام أطراف ثالثة مختلفة من وقت لآخر
                لتتبع استخدام الخدمة من خلال علامات الإجراء.
              </p>
              <p className="fs-6 px-2">
                يمكن استخدام ملفات تعريف الارتباط التي تستخدمها المؤسسة لتخزين
                أي معلومات شخصية. قد يتم تتبع ملفات تعريف ارتباط المؤسسة مرة
                أخرى إلى مستخدم فردي مع إجراء بحث مستفيض. بمجرد تنشيط ملف تعريف
                الارتباط ، يتم إعطاؤه رقم معرّف ، يُستخدم فقط كمرجع داخلي ويمكن
                استخدامه لتحديد المستخدم والوصول إلى المعلومات الشخصية ، مثل
                اسمك أو عنوان IP.
              </p>
              <p className="fs-6 px-2">
                يجوز للمؤسسة السماح بملفات تعريف الارتباط من شركاء أعمال معينين
                لغرض تخصيص إعلاناتهم بما يتناسب مع أذواقك وعادات التصفح ،
                وبالتالي قد يتم تخزين ملفات تعريف الارتباط هذه على جهاز
                الكمبيوتر الخاص بك عند زيارتك للخدمة. قد تكون ملفات تعريف
                الارتباط هذه ملفات تعريف ارتباط مؤقتة أو دائمة ، وسيتم حذفها
                تلقائيًا من جهاز الكمبيوتر الخاص بك في نهاية عمرها الافتراضي.
                إذا تم استخدام ملفات تعريف ارتباط الطرف الثالث ، فسيكون الغرض
                الوحيد منها هو السماح لشركاء المؤسسة بالإعلان عن الخدمات التي قد
                تهمك.
              </p>
              <p className="fs-6 px-2">
                أنت توافق وتقر بأنه باستخدام الخدمة ، فإنك تمنح إذنًا لتخزين
                معلومات المستخدم الخاصة بك على ملفات تعريف الارتباط. يمكنك أيضًا
                السماح لهذه الملفات بالبقاء على جهاز الكمبيوتر الخاص بك بعد أن
                تنتهي من جلسة المستعرض لديك بحيث يمكن استخدامها عند زيارتك
                التالية للخدمة. يمكنك الاحتفاظ بحق سحب هذا الإذن عن طريق تغيير
                إعداد المستعرض الخاص بك لرفض ملفات تعريف الارتباط.
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
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <h4
                className={`${Style.aboutHeading} fs-6 m-0 py-2 px-3  position-relative`}
              >
                حقوقك{" "}
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
                إذا تغيرت بياناتك الشخصية ، أو إذا لم تعد ترغب في خدمة المؤسسة ،
                يمكنك تصحيح أو تحديث أو تعديل أو حذف / إزالة أو طلب إزالتها من
                منتدى عام أو دليل أو شهادة على خدمة المؤسسة أو إلغاء تنشيطها عن
                طريق إجراء التغيير في حسابك أو عن طريق البريد الإلكتروني للمؤسسة
                على info(-at-)rofida.sa سوف تستجيب المؤسسة لطلبك خلال فترة زمنية
                معقولة.
              </p>
              <p className="fs-6 px-2">
                سيتم الاحتفاظ بمعلوماتك طالما كان حسابك نشطًا ، حسب الحاجة
                لتزويدك بالخدمات وبغية استخدام معلوماتك عند الضرورة للامتثال
                للالتزامات القانونية للمؤسسة ، لحل النزاعات ، وفرض اتفاقيات
                المؤسسة . يمكنك أيضًا استشارة أو تعديل بياناتك الشخصية من خلال
                النقر على "حسابي" المتاح على الخدمة. قد يتم نقل البيانات الشخصية
                (العنوان ، البريد الإلكتروني ، رقم الهاتف ...) إلى جهات خارجية
                حصريًا لأغراض تسليم الخدمات المطلوبة. قد يتم نقل البيانات
                الشخصية إلى شركاء تجاريين للمؤسسة في حالة منحك للمؤسسة إذنًا
                بذلك.
              </p>
              <p className="fs-6 px-2">
                قد تحتوي الخدمة على روابط لمواقع إلكترونية أخرى لا تملكها أو
                تديرها المؤسسة. يرجى العلم بأن المؤسسة غير مسؤولة عن ممارسات
                الخصوصية لهذه المواقع وأن سياسة الخصوصية هذه تنطبق فقط على
                البيانات التي تجمعها المؤسسة.
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
                إلغاء الاشتراك من النشرة الإخبارية{" "}
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
                مع مراعاة الحصول على موافقتك ، يجوز للمؤسسة الاتصال بك عن طريق
                البريد الإلكتروني للحصول على تفاصيل حول المؤسسة ، والخدمات
                الأخرى المقدمة ، وترقيات المبيعات ، والتسويق المباشر (بما في ذلك
                الرأي وبحوث السوق) ، والنشرة الإخبارية وغيرها من المعلومات
                المتعلقة بالشركات في مجموعة المؤسسة أو المؤسسة. شركاء العمل.
              </p>
              <p className="fs-6 px-2">
                إذا كنت ترغب في إلغاء اشتراكك في تلقي هذه المعلومات ، يمكنك ، في
                أي وقت ، الانسحاب من خلال النقر على رابط إلغاء الاشتراك ، أو
                تقديم أسفل الصفحة لجميع رسائل البريد الإلكتروني المرسلة إليك من
                المؤسسة ، أو عن طريق إرسال بريد إلكتروني إلى المؤسسة في
                adelrealestate.sa@gmail.com
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
                استخدام الشبكات الاجتماعية والإضافات (plugins) الخاصة بها{" "}
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
                قد تستخدم الخدمة الإضافات الاجتماعية ("الإضافات") التي توفرها
                وسائل التواصل الاجتماعي facebook.com ، التي تديرها Facebook Inc.
                ، 1601 S. California Avenue ، Palo Alto ، CA 94304 ، الولايات
                المتحدة الأمريكية ("Facebook"). يمكن تحديد المكونات الإضافية عن
                طريق شعار Facebook أو إشعار "Facebook Social Plugin".
              </p>
              <p className="fs-6 px-2">
                قد تستخدم الخدمة الإضافات الاجتماعية ("الإضافات") التي توفرها
                الشبكة الاجتماعية twitter.com ، التي تديرها Twitter Inc. ، 1355
                Market Street، Suite 900، San Francisco، CA 94103، USA
                ("Twitter"). يمكن تحديد المكونات الإضافية عن طريق شعار Twitter
                أو إشعار "Twitter Social Plugin".
              </p>
              <p className="fs-6 px-2">
                قد تستخدم الخدمة الإضافات الاجتماعية ("الإضافات") التي توفرها
                الشبكة الاجتماعية linkedin.com ، التي تديرها LinkedIn Ltd. ،
                2029 Stierlin Court ، Mountain View ، CA 94043 ، USA
                ("LinkedIn"). يمكن تحديد المكونات الإضافية بواسطة شعار LinkedIn
                أو الإشعار "LinkedIn Social Plugin".
              </p>
              <p className="fs-6 px-2">
                عندما تزور صفحة من الخدمة تحتوي على مكون إضافي اجتماعي ، ينشئ
                متصفحك اتصالًا مباشرًا بخوادم Facebook و / أو Twitter. ينقل
                Facebook و Twitter محتوى المكون الإضافي مباشرة إلى متصفحك الذي
                يدمج الأخير في الخدمة ، مما يمكّن Facebook و Twitter من تلقي
                معلومات حول وصولك إلى صفحة الخدمة المعنية. لهذا الغرض ، يتم نقل
                عنوان الإنترنت الخاص بالموقع الذي تمت زيارته (بما في ذلك عنوان
                IP الخاص بك) إلى خادم Facebook و / أو Twitter في الولايات
                المتحدة الأمريكية حيث يتم تخزين البيانات. يحدث هذا حتى إذا لم
                يكن لديك حساب Facebook أو Twitter أو لم تقم بتسجيل الدخول إلى
                Facebook / Twitter في ذلك الوقت.
              </p>
              <p className="fs-6 px-2">
                إذا قمت بتسجيل الدخول إلى Facebook ، يمكن تعيين زيارتك لحساب
                Facebook الخاص بك. إذا كنت تتفاعل مع المكونات الإضافية ، على
                سبيل المثال عن طريق النقر على "أعجبني" ، أو إدخال تعليق ، يتم
                نقل المعلومات المقابلة من متصفحك مباشرة إلى Facebook وتخزينها
                بواسطتها. يمكن أيضًا نشر المعلومات على Facebook ، وعرضها على
                أصدقائك على Facebook.
              </p>
              <p className="fs-6 px-2">
                إذا كنت ترغب في الحصول على معلومات إضافية حول الغرض ونطاق جمع
                البيانات عن طريق Facebook / Twitter / LinkedIn / وكيفية معالجتها
                واستخدامها ، فضلاً عن حقوقك في هذا الصدد وخيارات الإعدادات
                لحماية خصوصيتك ، يرجى زيارة سياسة خصوصية Facebook
                https://www.facebook.com/fbprivacy أو سياسة خصوصية Twitter
                (https://twitter.com/privacy) أو سياسة خصوصية LinkedIn
                (http://www.linkedin.com/legal/privacy-policy). لا تتحمل المؤسسة
                أي مسؤولية عن سياسات الخصوصية الخاصة بالملحقات الاجتماعية لأطراف
                أخرى.
              </p>
              <p className="fs-6 px-2">
                يمكنك تسجيل الدخول إلى خدمة المؤسسة باستخدام خدمات تسجيل الدخول
                مثل Facebook Connect أو مزود Open ID. ستصادق هذه الخدمات على
                هويتك وتزودك بخيار مشاركة بعض المعلومات الشخصية معنا ، مثل اسمك
                وعنوان بريدك الإلكتروني لتعبئة نموذج تسجيل المؤسسة مسبقًا.
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
                جمع معلومات الطرف الثالث{" "}
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
                عندما تضع طلبًا على خدمة المؤسسة ، قد يكون لديك خيار إدراج
                تفاصيل شخص آخر (الاسم والعنوان) عن طريق إدراج تفاصيله / بياناتها
                أسفل تفاصيل الشحن. تحتفظ لنفسك بالحق في أن تكون قادرًا على تحرير
                / حذف التفاصيل المدرجة من خلال الوصول إلى تفاصيل حسابك.
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
                التغييرات في هذه السياسة{" "}
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
                تحتفظ المؤسسة بالحق في تحديث سياسة الخصوصية هذه لتعكس التغييرات
                في ممارسات المعلومات. في حالة قيام المؤسسة بإجراء أي تغييرات
                جوهرية ، سيتم إرسال إشعار إليك عبر البريد الإلكتروني إلى بريدك
                الإلكتروني المحدد في حسابك قبل أن يصبح التغيير ساريًا.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
