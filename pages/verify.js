import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Loader from "../components/Loader";

const Verify = () => {
  const { t, i18n } = useTranslation();
  const [otp, setOtp] = useState("");
  const [otpError, setOtperror] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const email = typeof localStorage !== 'undefined' ? localStorage.getItem('email') : '';
  const router = useRouter();

  const handelSubmit = (event) => {
    event.preventDefault();
    if(otp ==""){
      setOtperror("Please Enter A value")
    }else {
      
      setLoading(true)
      fetch(`${process.env.API_URL}/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: JSON.parse(localStorage.getItem("email")),
          otp: parseInt(otp, 10),
        }),
      })
        .then((response) => {
        console.log(response.status);
        
        if(response.status==200){
          router.push('/signin');
          localStorage.removeItem('name');
          localStorage.removeItem('email');
          localStorage.removeItem('role');
          localStorage.removeItem('inviteCode');
        }
        return response.json();
    })
        .then((data) => {
          if(data){
            if (data.message != null) {
              setLoading(false)
            
              setError(data.message);
              console.log(data.message);
              console.log("error", error);
            }
          }
          setLoading(false)
  
          
        })
        .catch((error) => {
          //setError(data.error);
          console.error("Error:", error);
          setLoading(false)
  
        });

    }

  };

  const handelResend = () => {};
  return (
    <>
      {loading ? (<>
      <Loader />
      </>):(<>
        <div className="h-screen mobile:mt-auto  bg-slate-50 flex justify-center items-center w-full">
      <form onSubmit={handelSubmit}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-lg max-w-sm">
          <h1 className="text-center text-6xl font-semibold">Logo</h1>
          <div className="space-y-4">
            <h1 className="text-center text-2xl mt-2 font-semibold ">
             {t("VerifyEmailAddress")}
            </h1>
            <div>
            {error && (
                      <div
                        className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                        role="alert"
                      >
                        <span className="font-medium"> {error}</span>
                      </div>
                    )}
              <label className="block mb-1  font-semibold">
                {t("ToverifyyouremailwehavesentaOneTimePassword")} (OTP) {t("to")}
                {email} 
              </label>
              <button className="text-blue-600 mt-0 mb-3" onClick={() => router.push("/signup")} >(Change Email)</button> {" "}
              <input
                type="number"
                className={otpError ? 'border w-full border-red-500 p-2 rounded-md  focus:border-red-500 focus:shadow-md focus:outline-none text-left':'border w-full border-gray-500 p-2 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left'}
                name="Verifying"
                value={otp}
                onInput={(e) => {
                  setOtp(e.target.value)
                  setOtperror(null)
                }}
              />
              {otpError && (
                <span className="text-red-500 text-xs">{otpError}</span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 mb-4 w-full bg-[#DB9E43] border-gray-500 hover:bg-[#c88521] text-white font-semibold py-3 rounded-md  tracking-wide"
          >
            {t("CreateAccount")}
          </button>
          <div>
            <button className="text-center text-blue-500" onClick={handelResend}>
              {t("Resend")} OTP
            </button>
          </div>
        </div>
      </form>
    </div></>)}
    </>

  );
};

export default Verify;
