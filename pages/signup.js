import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from "../styles/Contactform.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import * as Yup from "yup";
//import { Route, Routes, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const [error, setError] = useState(null)
  const ErrorSchema = Yup.object().shape({
    name: Yup.string()
      .required("Please Enter Your Full Name")
      .min(5, "too Short")
      .max(100, "Too Long"),

      inviteCode: Yup.number()
      .integer()
      .typeError('inviteCode must be a number')
      .positive('inviteCode must be a positive number')
      ,

    email: Yup.string()
      .required("Please Enter Your Email Address")
      .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, "Please enter a valid email address"),
    role: Yup.string()
      .required("Please Select a Role"),

    password: Yup.string()
      .required("Please enter your password")
      .min(8, "Password Must be at least 8 characters")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),

    password2: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "password does not match",

    ),
  })
  //const navigate = useNavigate();


  return (

    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        password2: "",
        role: "",
        inviteCode: "",

      }}
      validationSchema={ErrorSchema}
      onSubmit={(value) => {
        console.log("value",value)
        //const data = {"email": "mohsinali@gmail.com","password":"11111qqqqq","role": "company"};
        fetch(`${process.env.API_URL}/signup/email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(value),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.error != null) {
              setError(data.error);
              console.log(data.error);
              console.log("error", error)

            } else {
              localStorage.setItem("email", JSON.stringify(value.email));

              router.push('/verify')
            }


            console.log('Success:', data);
          })
          .catch((error) => {
            setError(data.error);
            console.error('Error:', error);
          });
        console.log("error", error);
      }}
    >



      {({ errors, touched }) => (
        <Form className=' bg-white mt-4 px-10 py-8 shadow-md mb-[50px] mobile:mt-[80px] rounded-xl mobile:mx-auto mx-auto w-[30%] mobile:w-[90%] '  >
          {/*           <img
                className="h-14 mb-4 mx-auto"
                src="http://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png"
                alt=""
              /> */}
          <h1 className="text-center text-6xl font-semibold">Logo</h1>
          <div className="space-y-4">
            <h1 className="text-center text-2xl mt-2 font-semibold ">
              {t("Register")}
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
              <label className="block mb-1  font-semibold">{t("YourName")}</label>

              <Field
                type="text"
                className={
                  touched.name
                    ? `border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.name
                      ? `${styles.invalid}`
                      : `${styles.valid}`
                    } `
                    : "border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left"
                }
                name="name"
/*                  placeholder="Your Name " 
 */              />
              {touched.name && errors.name && (
                <p className="text-red-700  text-xs">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block mb-1  font-semibold">
                {t("MobileNumberOrEmail")}
              </label>
              <Field
                type="text"
                className={
                  touched.email
                    ? `border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.email ? `${styles.invalid}` : `${styles.valid}`
                    } `
                    : "border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left"
                }
                name="email"
              /* placeholder="Your Name " */
              />
              {touched.email && errors.email && (
                <p className="text-red-700  text-xs">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 font-semibold"> {t("Password")}</label>
              <Field
                type="password"
                className={
                  touched.password
                    ? `border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.password
                      ? `${styles.invalid}`
                      : `${styles.valid}`
                    } `
                    : "border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left"
                }
                name="password"
              /* placeholder="Your Name " */
              />
              {touched.password && errors.password && (
                <p className="text-red-700  text-xs">{errors.password}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 font-semibold">
                {t("ReEnterPassword")}
              </label>
              <Field
                type="password"
                className={
                  touched.password2
                    ? `border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.password2
                      ? `${styles.invalid}`
                      : `${styles.valid}`
                    } `
                    : "border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left"
                }
                name="password2"
              /* placeholder="Your Name " */
              />

              {touched.password2 && errors.password2 && (
                <p className="text-red-700  text-xs">{errors.password2}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 font-semibold ">{t("Role")}</label>
              <Field as="select" className="border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left" name="role">
                <option></option>

                <option value="company">{t("company")}</option>
                <option value="regular">{t("regular")}</option>
              </Field>
              {touched.role && errors.role && (
                <p className="text-red-700  text-xs">{errors.role}</p>
              )}
            </div>
            <label className="block mb-1  font-semibold">{t("Invite Code ")}</label>
            <div>
              <Field
                type="number"
                className={
                  touched.inviteCode
                    ? `border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left `
                    : "border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left"
                }
                name="inviteCode"
/*                  placeholder="Your Name " 
*/              />
              {touched.inviteCode && errors.inviteCode && (
                <p className="text-red-700  text-xs">{errors.inviteCode}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-[#DB9E43] border-gray-500 hover:bg-[#c88521] ] font-semibold py-3 rounded-md  tracking-wide"
          >
            {t("Continue")}
          </button>
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0">{t("OR")}</p>
          </div>

          <button className="flex-1 w-full my-2 hover:text-[#c45500] px-2 py-4 text-sm font-semibold  bg-white border border-gray-500 rounded-lg  hover:bg-indigo-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              preserveAspectRatio="xMidYMid"
              className="inline w-5 h-5 ml-[-21px] text-gray-700 fill-current"
              viewBox="0 0 256 262"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              />
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              />
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              />
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              />
            </svg>
            <span className="ml-3 ">{t("ContinueWithGoogle")}</span>
          </button>

          <button className="flex-1 hover:text-[#c45500] px-2 py-4 text-sm font-semibold border border-gray-500 bg-white  rounded-lg w-full  hover:bg-indigo-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Ebene 1"
              viewBox="0 0 1024 1024"
              width="24"
              height="24"
              className="inline w-5 h-5 text-gray-700 fill-current"
            >
              <path
                fill="#1877f2"
                d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
              />
              <path
                fill="#fff"
                d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
              />
            </svg>

            <span className="ml-3 hover:text-[#c45500]">
              {t("ContinueWithFacebook")}
            </span>
          </button>

          <p className="my-2 text-center">
            {t("AlreadyHaveAnAccount")}
            <Link
              href="/signin"
              className="text-[#0000EE] hover:no-underline hover:text-[#c45500]"
            >
              <a className='text-blue-700'>{t("signin")}</a>
            </Link>
          </p>
        </Form>
      )}





    </Formik>
  );
}
