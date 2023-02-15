import React, { useState } from "react";
import { useRouter } from "next/router";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();



  const handelSubmit = (event) => {
    event.preventDefault();
    fetch("https://app.almalk.org:3000/reset/email", {
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
          setError(data.message);
          console.log(data.message);
          console.log("error", error);
        }
        console.log("Success:", data);
        localStorage.setItem("email", JSON.stringify(email))

        router.push("/confirmresetpassword");
      })
      .catch((error) => {
        //setError(data.error);
        console.error("Error:", error);
      });
  };

  return (
    <div className="h-screen mobile:mt-[-100px] mobile:bg-inherit bg-slate-50 flex justify-center items-center   w-full">
      <form onSubmit={handelSubmit}>
        <div className="bg-white px-10 py-8 mobile:w-[90%] mobile:mx-auto rounded-xl w-screen mobile:shadow-none shadow-md max-w-sm">
          {/*           <img
                className="h-14 mb-4 mx-auto"
                src="https://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png"
                alt=""
              /> */}
          <h1 className="text-center text-6xl font-semibold">Logo</h1>
          <div className="space-y-4">
            <h1 className="text-center text-2xl mt-2 font-semibold ">
              Password assistance
            </h1>

            <div>
              <label className="block mb-1  font-semibold">
                Enter the email address or mobile phone number associated with
                your account.{" "}
              </label>

              <input
                type="email"
                className="border w-full border-gray-500 p-2 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left"
                name="email"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
                /* placeholder="Your Name " */
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 mb-4 w-full  bg-[#DB9E43] border-gray-500 hover:bg-[#c88521] font-semibold py-3 rounded-md  tracking-wide"
          >
            Continue
          </button>
          <div>

          </div>
        </div>
      </form>
    </div>
  );
}
