import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
const accountSuspension = () => {
    return (
      <div className="flex flex-col justify-start min-h-screen bg-gray-100">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl mt-4 font-bold mb-4 text-end w-full">
          ما هو تعليق الحساب؟          
          {/* <button onClick={()=>handlesEdit()}><AiFillEdit/></button> */}
          </h1>
          <p className="text-lg text-gray-600 text-end">
          تعليق الحساب هو الإغلاق المؤقت أو الدائم لحساب  مع مراعاة سلامة جميع المستخدمين ، وفقًا لاتفاقية الحساب  شروط الاستخدام   
          </p>
          <h1 className="text-4xl mt-4 font-bold mb-4 text-end w-full">
          في أي حالات يتم تعليق الحساب؟          
          </h1>
          <p className="text-lg text-gray-600 text-end">
          عدم الامتثال للقواعد الواردة في اتفاقية الحساب
          </p>
          <p className="text-lg text-gray-600 text-end">
          فتح أكثر من حساب وفقًا للمادة 1.11 من الملحق 3 لاتفاقية الحساب، من خدمات المالك، وتحديده          
          </p>
          <p className="text-lg text-gray-600 text-end">
          لا تضلل المستخدمين الآخرين من خلال تقديم منتج غير حقيقي على أنه حقيقي          
          </p>
          <p className="text-lg text-gray-600 text-end">
          تحديد أن المعلومات الموجودة في ملف تعريف الحساب لا تخص شخصًا حقيقيًا أو اعتباريًا          
          </p>
          <p className="text-lg text-gray-600 text-end">
          إظهار السلوكيات السلبية مثل التحرش والألفاظ النابية والعنف ضد الأعضاء الآخرين         
           </p>
          <p className="text-lg text-gray-600 text-end">
          حساب مكتب المدعي العام والمحكمة والشرطة وما إلى ذلك. كونه موضوع خطاب مرسل من المؤسسات الرسمية           
          </p>
          <p className="text-lg text-gray-600 text-end">
          إعادة الموافقة على إعلان لم تتم الموافقة عليه مرتين من قبل، لوجود رقم هاتف في قسم الوصف أو صور للإعلان خلافًا لقواعد النشر.         
           </p>
           <h1 className="text-4xl mt-4 font-bold mb-4 text-end w-full">
           كيف أكتشف أنه تم تعليق حسابي؟          
           </h1>
           <p className="text-lg text-gray-600 text-end">
           عندما يحاول أصحاب الحسابات الذين تم تعليق حسابهم تسجيل الدخول إلى ، فإنهم يرون تحذيرتم تعليق حسابكبيان يوضح سبب تعليق الحساب.
           </p>
           <p className="text-lg text-gray-600 text-end">
           في نفس الوقت ، يتم إرسال إشعار بالبريد الإلكتروني حول تعليق الحساب إلى عناوين البريد الإلكتروني المسجلة لهؤلاء المستخدمين.          
        </p>
        <h1 className="text-4xl mt-4 font-bold mb-4 text-end w-full">
        ماذا علي أن أفعل لاستئناف حسابي المعلق؟           
        </h1>
        <p className="text-lg text-gray-600 text-end">
        لا يمكن إعادة تنشيط المستخدمين الذين تم تعليق حساباتهم على .بشكل دائم (تم إغلاق الحسابات) تحت أي ظرف من الظروف.
سيتم إعادة تنشيط عضوية المستخدمين الذين تم تعليق حساب .الخاص بهم لأول مرة بسبب السلوك السلبي تجاه مستخدم آخر بعد ٤٨ ساعة. إذا كرر المستخدم السلوك الذي تسبب في تعليق الحساب ، فسيتم إلغاء الحساب دون إعادة تنشيطه.
يمكن للمستخدمين الذين تم تعليق حسابهم تنشيط حساباتهم عن طريق تسجيل الدخول (https://secure..com/giris) والتحقق من أن الحساب يخصهم بأحد وثائق الهوية الرسمية الخاصة بهم. ستتم مقارنة المعلومات المتعلقة بالحساب بالمعلومات الموجودة في وثيقة الهوية الرسمية التي سيتم اختيارها عبر النظام لأغراض التحقق.
إذا تم تعليق الحساب بسبب خطاب من مؤسسة رسمية ، يمكن إعادة تنشيط الحساب إذا تم إرسال خطاب إلى .مع خطاب من المؤسسة التي أرسلت الرسالة الرسمية تفيد بأن الحسابمناسب 

هل يمكن إيقاف الحساب في حالة وجود مشاكل متعلقة بالتسوق؟
إذا تم تعليق الحساب بسبب موقف سلبي ناجم عن عملية التسوق ، فيجب على مالك الحساب أولاً حل الموقف السلبي مع المستخدم الذي يواجه مشاكل معه. يتلقى المشتري أو البائع تحذيرًا نتيجة موقف

        </p>
        </div>
   
      </div>
    );
  };
  
  export default accountSuspension;
  