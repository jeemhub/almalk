import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Loader from "../components/Loader";

export default function ResetPassword() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(null)
  const router = useRouter(null);



  const handelSubmit = (event) => {
    event.preventDefault();
    if (email == "") {
      setEmailError("Please Enter An Email")
    } else {
      setLoading(true)
      fetch(`${process.env.API_URL}/reset/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message != null) {
            setLoading(false)
            setError(data.message);
             //console.log(data.message);
             //console.log("error", error);
          }
           //console.log("Success:", data);
          localStorage.setItem("email", JSON.stringify(email))

          router.push("/confirmresetpassword");
        })
        .catch((error) => {
          //setError(data.error);
          console.error("Error:", error);
          setLoading(false)
        });
    }

  };

  return (
    <>
      {loading ? (<><Loader /> </>) : (<>
        <div className="h-screen mobile:my-auto mobile:bg-inherit flex justify-center items-center   w-full">
          <form onSubmit={handelSubmit}>
            <div className="bg-white px-10 py-8 mobile:w-[90%] mobile:mx-auto rounded-xl w-screen mobile:shadow-none shadow-md max-w-sm">
              {/*           <img
                className="h-14 mb-4 mx-auto"
                src="http://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png"
                alt=""
              /> */}
                <div className="text-center text-6xl font-semibold flex justify-center items-center">
                  <img className='w-20 text-center' alt='logo' src='/Images/logowithoutbg.png'/>
                </div>
              <div className="space-y-4">
                <h1 className="text-center text-2xl mt-2 font-semibold ">
                  {t("PasswordAssistance")}
                </h1>

                <div>
                  <label className="block mb-1  font-semibold text-center ">
                    {/* {t("Entertheemailaddressormobilephonenumberassociatedwithyouraccount")} */}
                   {t("Enter ")}
                   {t("the email address")}
                   <br/>
                   {t("or ")}
                   {t("mobile phone number")}
                   
                   {t("associated with your account")}
                  </label>

                  <input
                    type="email"
                    className={`border w-full  p-2 rounded-md hover:bg-[#b8ae00]  focus:border-[#f1b51f] ${emailError? 'border-red-500':'border-gray-500'} focus:shadow-md focus:outline-none text-left`}
                    name="email"
                    value={email}
                    onInput={(e) => {
                      setEmail(e.target.value)
                      setEmailError(null)
                    }}
                  /* placeholder="Your Name " */
                  />
                  {emailError && (
                <span className="text-red-500 text-xs">{emailError}</span>
              )}
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 mb-4 w-full bg-[#1c505e] border-gray-500 hover:bg-white text-[#f1b51f] hover:text-[#1c505e] hover:border-2 hover:border-[#1c505e]   font-semibold py-3 rounded-md  tracking-wide"
              >
                {t("Continue")}
              </button>
              <div>

              </div>
            </div>
          </form>
        </div></>)}
    </>

  );
}
