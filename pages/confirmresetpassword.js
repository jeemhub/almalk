import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Loader from "../components/Loader";
export default function ConfirmResetPassword() {
  const { t, i18n } = useTranslation();
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [otpError, setOtpError] = useState("");


  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handelSubmit = (event) => {
    event.preventDefault();
    if(otp == ""){
      setOtpError("Please Enter an OTP that send via email");
    }
    if(password == ""){
      setPasswordError("Please Enter The New Password");
    } else {
      setLoading(true)
      fetch(
        `${process.env.API_URL}/reset/${parseInt(
          otp,
          10
        )}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: JSON.parse(localStorage.getItem("email")),
            password: password,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.error != null) {
            setError(data.error);
             //console.log(data.error);
            setLoading(false)
  
          } else {
             //console.log("Success:", data);
            router.push("/signin");
          }
  
        })
        .catch((error) => {
          //setError(data.error);
          setError(data.error);
  
          console.error("Error:", error);
        });
    }

  };

  const handelResend = (event) => {
    event.preventDefault();
    fetch(`${process.env.API_URL}/resend-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: JSON.parse(localStorage.getItem("email")),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error != null) {
          setError(data.message);
           //console.log(data.message);
           //console.log("error", error);
        }
         //console.log("Success:", data);
        //router.push("/signin");
      })
      .catch((error) => {
        //setError(data.error);
        console.error("Error:", error);
      });
  };
  return (
    <>
      {loading ? (<>
        <Loader />
      </>) : (
        <>
          <div className="h-screen mobile:my-auto mobile:bg-inherit bg-slate-50 flex justify-center items-center   w-full">
            <form onSubmit={handelSubmit}>
              <div className="bg-white px-10 py-8 mobile:w-[100%] mobile:mx-auto rounded-xl w-screen mobile:shadow-none shadow-md max-w-sm">
                {/*           <img
                className="h-14 mb-4 mx-auto"
                src="http://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png"
                alt=""
              /> */}
                <h1 className="text-center text-6xl font-semibold">Logo</h1>
                <div className="space-y-4">
                  <h1 className="text-center text-2xl mt-2 font-semibold ">
                    {t("VerificationRequired")}
                  </h1>
                  {error && (
                    <div
                      className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                      role="alert"
                    >
                      <span className="font-medium"> {error}</span>
                    </div>
                  )}
                  <div>
                    <label className="block mb-1  font-semibold">{t("Enter")} OTP</label>

                    <input
                      type="number"
                      className={`border w-full ${otpError ? 'border-red-600':'border-gray-500'}  p-2 rounded-md  focus:border-[#f1b51f] focus:shadow-md focus:outline-none text-left`}
                      name="otp"
                      value={otp}
                      onInput={(e) => {
                        setOtp(e.target.value)
                        setOtpError(null)
                      }}
                    /* placeholder="Your Name " */
                    />
                    {otpError && (
                <span className="text-red-500 text-xs">{otpError}</span>
              )}
                  </div>
                  <div>
                    <label className="block mb-1  font-semibold">
                      {t("EnterNewPassword")}
                    </label>

                    <input
                      type="password"
                      className={`border w-full ${passwordError ? 'border-red-600':'border-gray-500'}  p-2 rounded-md  focus:border-[#f1b51f] focus:shadow-md focus:outline-none text-left`}
                      name="password"
                      value={password}
                      onInput={(e) => {
                        setPassword(e.target.value)
                        setPasswordError(null)
                      }}
                    /* placeholder="Your Name " */
                    />
                    {passwordError && (
                <span className="text-red-500 text-xs">{passwordError}</span>
              )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-4 mb-4 w-full bg-[#f1b51f] border-gray-500 hover:bg-[#b8ae00]  font-semibold py-3 rounded-md text-white tracking-wide"
                >
                  {t("Continue")}
                </button>
                <div>
                  <div className="text-center">
                    <button
                      className="text-blue-600 text-center"
                      onClick={handelResend}
                    >
                      {t("Resend")} OTP{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div> </>
      )}
    </>

  );
}
