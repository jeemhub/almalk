import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Verify = () => {
  const { t, i18n } = useTranslation();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const email = typeof localStorage !== 'undefined' ? localStorage.getItem('email') : '';
  const router = useRouter();

  const handelSubmit = (event) => {
    
    console.log(email, otp);
    event.preventDefault();
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
      .then((response) => response.json())
      .then((data) => {
        if (data.message != null) {
          setError(data.message);
          console.log(data.message);
          console.log("error", error);
        }
        router.push('/signin')
        console.log("Success:", data);
      })
      .catch((error) => {
        //setError(data.error);
        console.error("Error:", data.message);
      });
  };

  const handelResend = () => {};
  return (
    <div className="h-screen mobile:mt-[-200px] bg-slate-50 flex justify-center items-center w-full">
      <form onSubmit={handelSubmit}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <h1 className="text-center text-6xl font-semibold">Logo</h1>
          <div className="space-y-4">
            <h1 className="text-center text-2xl mt-2 font-semibold ">
             {t("VerifyEmailAddress")}
            </h1>
            <div>
              <label className="block mb-1  font-semibold">
                {t("ToverifyyouremailwehavesentaOneTimePassword")} (OTP) {t("to")}
                {email}(Change){" "}
              </label>
              <input
                type="number"
                className="border w-full border-gray-500 p-2 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left"
                name="Verifying"
                value={otp}
                onInput={(e) => setOtp(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 mb-4 w-full bg-[#DB9E43] border-gray-500 hover:bg-[#c88521] font-semibold py-3 rounded-md  tracking-wide"
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
    </div>
  );
};

export default Verify;
