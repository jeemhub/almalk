import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Verify() {
    const router = useRouter();
    const [otp, setOtp] = useState("");
    const [error, setError] = useState(null);
    const email = localStorage.getItem("email");
    console.log("email", email);
  
    const handelSubmit = (event) => {
      console.log(email, otp);
      event.preventDefault();
      fetch("http://almalk.org:3000/verify", {
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
          console.log("Success:", data);
        })
        .catch((error) => {
          //setError(data.error);
          console.error("Error:", data.message);
        });
    };
  
    const handelResend = () => {};
    return (
        <div className="h-screen mobile:mt-[-200px] bg-slate-50 flex justify-center items-center   w-full">
      <form onSubmit={handelSubmit}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          {/*           <img
                className="h-14 mb-4 mx-auto"
                src="https://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png"
                alt=""
              /> */}
          <h1 className="text-center text-6xl font-semibold">Logo</h1>
          <div className="space-y-4">
            <h1 className="text-center text-2xl mt-2 font-semibold ">
              Verify email address
            </h1>

            <div>
              <label className="block mb-1  font-semibold">
                To verify your email, we have sent a One Time Password (OTP) to
                {email}(Change){" "}
              </label>

              <input
                type="number"
                className="border w-full border-gray-500 p-2 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left"
                name="Verifying"
                value={otp}
                onInput={(e) => setOtp(e.target.value)}
                /* placeholder="Your Name " */
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 mb-4 w-full bg-[#DB9E43] border-gray-500 hover:bg-[#c88521] font-semibold py-3 rounded-md  tracking-wide"
          >
            Create Account
          </button>
          <div>
              <button className="text-center text-blue-500" onClick={handelResend}>Resend OTP</button>
          </div>
        </div>
      </form>
    </div>
    );
}
