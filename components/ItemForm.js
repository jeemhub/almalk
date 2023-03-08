import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Loader from "./Loader";
import CurrencyInput from 'react-currency-input-field';
import { useSelector } from "react-redux";


const ItemForm = () => {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const token = Cookies.get("loggedin");
    const [title, setTitle] = useState("");
    const [images, setImages] = useState([]);
    const [details, setdetails] = useState("");
    const [isOwner, setIsOwned] = useState(false);
    const [price, setPrice] = useState(null);
    const [location, setLocation] = useState("");
    const [status, setStatus] = useState("");
    const [currency, setCurrency] = useState("");
    const [category, setCategory] = useState("");
    const [phone, setPhone] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const [errors, setErrors] = useState({});
    const [error, setError] = useState(null);
    const [requiredFields, setRequiredFields] = useState(null);
    const [inputValues, setInputValues] = useState({});
    const [loadding, setLoadding] = useState(false)
    const { isLoading, isLogged,userToken } = useSelector((state) => state.user);


    const regexExp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;


    const handleCategoryChange = (event) => {
        const categoryId = event.target.value;
        if (categoryId) {
            setCategory(categoryId);
        }
        const category2 = categoryList.find((c) => c._id === categoryId);
        const fieldName = category2.requiredFields[0].fieldName;
        setRequiredFields(fieldName);
    };

    const validate = () => {
        const newErrors = {};

        if (!title) {
            newErrors.title = "Title is required";
        }
        if (!phone) {
            newErrors.phone = "Phone Number is required";
        }
        if (!images.length) {
            newErrors.images = "At least one image is required";
        }
        if (images.length > 10) {
            newErrors.images = "The Number of Images must be less than or equal 10";
        }
        if (!details) {
            newErrors.details = "details is required";
        }
        if (!price) {
            newErrors.price = "Price is required";
        }
        if (!location) {
            newErrors.location = "Location is required";
        }
        if (!status) {
            newErrors.status = "Status is required";
        }
        if (!currency) {
            newErrors.currency = "Currency is required";
        }
        if (!category) {
            newErrors.category = "Category is required";
        }

        // if (Object.keys(inputValues).length === 0) {
        //     //console.log("inputValues.keys",inputValues.keys)
        //     newErrors.inputValues = "At least one field must be entered";
        // }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        if (!userToken) {
            router.push("/signin");
        }
        const geCategories = async () => {
            const response = await fetch(`${process.env.API_URL}/categories`);
            const data = await response.clone().json();
            setCategoryList(data);
        };

        geCategories();



    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validate()) {
            return;
        }

        if (token) {

            const formData = new FormData();
            formData.append("title", title);
            formData.append("price", price);
            formData.append("location", location);
            formData.append("details", details);
            formData.append("isOwner", isOwner);
            formData.append("status", status);
            formData.append("category", category);
            formData.append("phone", phone);
            formData.append("currency", currency);
            formData.append("requiredFields", requiredFields ? JSON.stringify(requiredFields.map((fieldName) => ({
                fieldName,
                fieldValue: inputValues[fieldName],
            }))) : [])
            for (const image of images) {
                formData.append("images", image);
            }
            setLoadding(true)

            const postData = async () => {

                try {
                    const res = await fetch("http://ap.almalk.org:3000/item", {
                        method: "POST",
                        headers: {
                            "x-access-token": JSON.parse(token),
                        },
                        body: formData,


                    });

                    console.log("Response status:", res.status);
                    console.log("Response headers:", res.headers);
                    const data = await res.json();
                    console.log("Response body:", data);

                    if (res.status === 401) {
                        setLoadding(false);
                        setError("You have to be logged in");
                        console.log("run 2")
                    }
                    router.push(`/adsproduct/${data.item._id}`);
                } catch (error) {
                    setLoadding(false);
                    console.error("error", error);
                    console.log("run 3")
                }
            };

            postData();
        } else {
            setError("You have to be logged in");
            router.push("/signin");
        }
    };

    return (
        <>
            {loadding ? (<>
                <Loader />
            </>) : <>

                <form
                    className="w-[50%] mobile:w-[90%] mx-auto shadow-lg bg-white p-7 mt-10 mobile:mt-16 mb-10  rounded-lg"
                    onSubmit={handleSubmit}
                >
                    {error && (
                        <div
                            className="p-4 mb-3 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                            role="alert"
                        >
                            <span className="font-medium"> {error}</span>
                        </div>
                    )}
                    <div className="mb-6 text-2xl text-center font-bold">
                        {t("Publishnewitem")}
                    </div>






                    <div className="mb-3  2xl:flex 2xl:justify-between  2xl:mx-auto  2xl:w-[100%]">
                        <div className="mb-3  2xl:flex 2xl:justify-center  2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">
                            <label
                                className="block font-medium mb-2 text-gray-700"
                                htmlFor="title"
                            >
                                {t("productname")}
                            </label>
                            <input
                                className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.title ? " border-red-500" : ""
                                    }`}
                                id="title"
                                type="text"
                                value={regexExp.test(title) ? '' : title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                            {errors.title && (
                                <p className="text-red-500 text-xs italic">{errors.title}</p>
                            )}
                        </div>
                        <div className="mb-3 2xl:flex 2xl:justify-center 2x:litems-start 2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">
                            <label
                                className="block font-medium mb-2 text-gray-700"
                                htmlFor="price"
                            >
                                {t("Price")}
                            </label>

                            <CurrencyInput
                                className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.price ? " border-red-500" : ""
                                }`}
                                id="price"
                                defaultValue={price}
                                decimalsLimit={2}
                                onValueChange={(value, name) => setPrice(event.target.value)}


                                />
                            {/* <input
                                className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.price ? " border-red-500" : ""
                                    }`}
                                id="price"
                                type="number"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                            /> */}
                            {errors.price && (
                                <p className="text-red-500 text-xs italic">{errors.price}</p>
                            )}
                        </div>
                    </div>






                    <div className="mb-3  2xl:flex 2xl:justify-between  2xl:mx-auto  2xl:w-[100%]">

                        <div className="mb-3  2xl:flex 2xl:justify-center  2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">
                            <label
                                className="block font-medium mb-2 text-gray-700"
                                htmlFor="currency"
                            >
                                {t("Currency")}
                            </label>
                            <select
                                className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.currency ? " border-red-500" : ""
                                    }`}
                                id="currency"
                                value={currency}
                                onChange={(event) => setCurrency(event.target.value)}
                            >
                                <option value="" disabled>
                                    {t("SelectAcurrency")}
                                </option>
                                <option value="USD">USD</option>
                                <option value="IQD">IQD</option>
                            </select>
                            {errors.currency && (
                                <p className="text-red-500 text-xs italic">{errors.currency}</p>
                            )}
                        </div>



                        <div className="mb-3 2xl:flex 2xl:justify-center 2x:litems-start 2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">
                            <label
                                className="block font-medium mb-2 text-gray-700"
                                htmlFor="status"
                            >
                                {t("Status")}
                            </label>
                            <select
                                className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.status ? " border-red-500" : ""
                                    }`}
                                id="status"
                                value={status}
                                onChange={(event) => setStatus(event.target.value)}
                            >
                                <option value="" disabled>
                                    {t("SelectAstatus")}
                                </option>
                                <option value="new">{t("New")}</option>
                                <option value="used">{t("Used")}</option>
                            </select>
                            {errors.status && (
                                <p className="text-red-500 text-xs italic">{errors.status}</p>
                            )}
                        </div>
                    </div>
                    <div className="mb-3  2xl:flex 2xl:justify-between  2xl:mx-auto  2xl:w-[100%]">
                        <div className="mb-3  2xl:flex 2xl:justify-center  2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">
                            <label
                                className="block font-medium mb-2 text-gray-700"
                                htmlFor="location"
                            >
                                {t("Location")}
                            </label>
                            <input
                                className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.location ? " border-red-500" : ""
                                    }`}
                                id="location"
                                type="text"
                                value={location}
                                onChange={(event) => setLocation(event.target.value)}
                            />
                            {errors.location && (
                                <p className="text-red-500 text-xs italic">{errors.location}</p>
                            )}
                        </div>
                        <div className="mb-3  2xl:flex 2xl:justify-center  mx-auto 2xl:flex-col 2xl:w-[45%]">
                            <label
                                className="block font-medium mb-2 text-gray-700"
                                htmlFor="phone"
                            >
                                {t("Phone Number")}
                            </label>
                            <input
                                className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.title ? " border-red-500" : ""
                                    }`}
                                id="phone"
                                type="text"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs italic">{errors.phone}</p>
                            )}
                        </div>
                    </div>


                    <div className="mb-3 2xl:flex 2xl:justify-center 2x:litems-start 2xl:ml-5 2xl:flex-col 2xl:w-[45%]">
                        <label
                            className="block font-medium mb-2 text-gray-700"
                            htmlFor="category"
                        >
                            {t("Category")}
                        </label>
                        <select
                            className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.currency ? " border-red-500" : ""
                                }`}
                            id="category"
                            value={category}
                            onChange={handleCategoryChange}
                        >
                            {categoryList.length > 0 ? (
                                <>
                                    <option value="" >
                                        {t("SelectACategory")}

                                    </option>
                                    {categoryList.map((category) => (
                                        <option value={category._id} key={category._id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </>
                            ) : (
                                <></>
                            )}
                        </select>
                        {errors.category && (
                            <p className="text-red-500 text-xs italic">{errors.category}</p>
                        )}
                    </div>



                    {requiredFields && (
                        <>
                            
                            <div className={`flex flex-wrap ${requiredFields.length % 2 === 1 ? "justify-end" : ""}`}>
                                {requiredFields.map((cat, index) => (
                                    <div key={index} className={`w-[45%] mobile:w-[100%] mb-3 ${index === requiredFields.length - 1 && requiredFields.length % 2 === 1 ? "mr-auto ml-4 mobile:mx-auto" : "mx-auto"}`}>
                                        <label className="block font-medium mb-2 text-gray-700" htmlFor={cat}>
                                            {t(`${cat}`)}
                                        </label>
                                        <input
                                            className={`border w-full border-gray-500 p-3 rounded-md focus:border-[#E77600] focus:shadow-md focus:outline-none text-left`}
                                            id={cat}
                                            type="text"
                                            name={cat}
                                            onChange={(e) =>
                                                setInputValues({ ...inputValues, [cat]: e.target.value })
                                            }
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}






                    <div className="mb-3 2xl:flex 2xl:justify-center 2x:litems-start 2xl:mx-auto 2xl:flex-col 2xl:w-[95%]">
                        <label
                            className="block font-medium mb-2 text-gray-700"
                            htmlFor="details"
                        >
                            {t("details")}
                        </label>
                        <textarea
                            className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left${errors.details ? " border-red-500" : ""
                                }`}
                            id="details"
                            value={details}
                            onChange={(event) => setdetails(event.target.value)}
                        />
                        {errors.details && (
                            <p className="text-red-500 text-xs italic">{errors.details}</p>
                        )}
                    </div>
                    <div className="mb-3  2xl:flex 2xl:justify-between  2xl:mx-auto  2xl:w-[100%]">
                        <div className="mb-3  2xl:flex 2xl:justify-center  2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">
                            <label
                                className="block font-medium mb-2 text-gray-700"
                                htmlFor="images"
                            >
                                {t("Images")}
                            </label>
                            <input
                                className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left${errors.images ? " border-red-500" : ""
                                    }`}
                                id="images"
                                type="file"
                                multiple
                                onChange={(event) => setImages(event.target.files)}
                            />
                            {errors.images && (
                                <p className="text-red-500 text-xs italic">{errors.images}</p>
                            )}
                        </div>
                        <div className="mb-3 2xl:flex 2xl:justify-center 2x:litems-start 2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">
                            <div>
                                <label
                                    className="block font-medium mb-2 text-gray-700"
                                    htmlFor="isOwner"
                                >
                                    {t("Areyoutheownerofthisitem")}
                                </label>
                                       {/* start toggle switcher */}
                        <div className="">
                        <div className="flex">
                            <label class="inline-flex relative items-center mr-5 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={isOwner}
                                    readOnly
                                />
                                <div
                                    onClick={() => {
                                        setIsOwned(!isOwner); 
                                    }}
                                    className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                                ></div>
                               
                            </label>
                        </div>
                    </div>
                   {/* end toggle switcher */}
                                {/* <input
                                    className=" mt-1"
                                    id="isOwner"
                                    type="checkbox"
                                    checked={isOwner}
                                    onChange={(event) => setIsOwned(event.target.checked)}
                                /> */}
                            </div>
                        </div>
                    </div>

                    <button
                        className="bg-[#DB9E43] hover:bg-yellow-700 mobile:w-full mobile:mx-auto text-white font-medium py-3 ml-4 px-4 rounded"
                        type="submit"
                    >
                        {t("Publish")}
                    </button>
                </form>
            </>}


        </>
    );
};

export default ItemForm;