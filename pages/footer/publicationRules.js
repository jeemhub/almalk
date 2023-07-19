import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
const publicationRules = () => {
    const [p,setp]=useState(`
    قواعد الإعلان" في جميع الفئات المذكورة أدناه صالحة لأصحاب الحسابات الفردية والشركات. يُعتبر صاحب الحساب الذي يدخل الإعلان قد قبل والتزم بالامتثال للتشريعات وقواعد النشر والقواعد المحددة في اتفاقية الحساب ، وعدم تضمين الإعلان أي تفسيرات قد تخدع المستهلك وفقًا لـ التشريعات ، وخاصة القوانين واللوائح.
    قائمة المنتجات المحظورة (https://www.sahibinden.com/sozlesmeler/yasakli-urunler-listesi-52) إلى القائمة الحالية للمنتجات المحظورة نشرها على بوابة sahibinden.com  متاح في الصفحة. يجوز للمالك إضافة إضافات إلى المنتجات المحظورة بما يتماشى مع التفسيرات التي يجب تقديمها في الأقسام ذات الصلة من البوابة. يجب على "صاحب الحساب" متابعة تحديث المنتجات المحظورة ووضع إعلان بخصوص المنتجات غير المحظورة. عندما يتم إزالة الإعلانات المنشورة على sahibinden.com من المنشور من قبل المعلنين أو إزالتها من المنشور بواسطة SAHİBİNDEN بسبب انتهاك قواعد النشر و / أو اتفاقية الحساب ؛ نظرًا لأن الإعلانات ومنتجات المنشطات هي خدمات يتم إجراؤها على الفور في البيئة الإلكترونية ، فإن رسوم الإعلان الذي تم إلغاؤه ورسوم المنشطات ، إن وجدت ، أو حقوق الحملات والعروض ، إن وجدت ، المحددة في نطاق هذا الإعلان (مثل الإعلان المجاني ، والمنشطات المتعلقة بالمنتج ، وما إلى ذلك) غير مستردة.
    يلتزم المستخدمون باستخدام المعلومات التي يصلون إليها في "البوابة" فقط لغرض "صاحب الحساب" أو "SAHİBİNDEN" الذي يكشف عن هذه المعلومات ، وعرضها لأغراض غير تجارية. لا يمكن استخدام معلومات الاتصال في الإعلانات التي أدخلها صاحب الحساب الذي نشر الإعلان إلا لأغراض الاتصال للحصول على معلومات حول الإعلان. لا يمكن استخدام البيانات الشخصية و / أو البيانات الشخصية ذات الجودة الخاصة التي تخص المعلن أو الأطراف الثالثة ، والمحمية بموجب قانون حماية البيانات الشخصية رقم 6698 ، والتي قد يتم تضمينها في الإعلان ، لأي غرض آخر ، منسوخة ، منشورة بشكل مباشر أو غير مباشر في قنوات أخرى ، ومعالجتها وتوزيعها ، ولا يمكن نقلها إلى قواعد بيانات أخرى وفتحها لوصول الأطراف الثالثة واستخدامها.
    المعلنون يوافقون على النشر في فئة "المنشورات الأسطورية" أو "المنشورات الشيقة" لفترة يحددها المالك ، وكذلك نشر الإعلانات التي اختارها SHIBİNDEN في وسائل التواصل الاجتماعي والبيانات الصحفية ووسائل الإعلام الأخرى.
    ميزة معلومات الأسعار هي ميزة تتيح لمستخدمينا متابعة تغيرات أسعار الإعلانات التي يفضلونها بسهولة أكبر. تظهر هذه الميزة في جميع الإعلانات ، ومع ذلك ، من أجل عرض سجل أسعار الإعلان ، يجب إضافة الإعلان إلى المفضلة. لا يمكن إزالة ميزة معلومات السعر ، التي تظهر تغيرات الأسعار في الإعلانات المضافة إلى المفضلة.
 `);
     function handlesEdit() {
        <div className="flex items-center justify-center">
      <textarea
        className="w-80 h-40 p-2 resize-none border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your text..."
      ></textarea>
    </div>
    }
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4 text-center w-full">قواعد الإعلان
          

          {/* <button onClick={()=>handlesEdit()}><AiFillEdit/></button> */}
          </h1>
          <p className="text-lg text-gray-600">
            {p}
          </p>
        </div>
   
      </div>
    );
  };
  
  export default publicationRules;
  