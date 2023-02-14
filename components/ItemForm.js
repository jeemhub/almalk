import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const ItemForm = () => {
    const token = Cookies.get('loggedin');
    const [title, setTitle] = useState("");
    const [images, setImages] = useState([]);
    const [details, setdetails] = useState("");
    const [isOwner, setIsOwned] = useState(false);
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [status, setStatus] = useState("");
    const [currency, setCurrency] = useState("");
    const [category, setCategory] = useState('');
    const [categoryList, setCategoryList] = useState([]);
    const [errors, setErrors] = useState({});
    const [error, setError] = useState(null);

    const router = useRouter()

    const validate = () => {
        const newErrors = {};

        if (!title) {
            newErrors.title = "Title is required";
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

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        if(!token){
            router.push('/signin');
        }
        const geCategories = async () => {
            const response = await fetch(
                `http://app.almalk.org:3000/categories`
            );
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
            const postData = async () => {
                try {
                    const formData = new FormData();
                    formData.append("title", title);
                    formData.append("price", price);
                    formData.append("location", location);
                    formData.append("details", details);
                    formData.append("isOwner", isOwner);
                    formData.append("status", status);
                    formData.append("category", category);
                    for (const image of images) {
                        formData.append("images", image);
                    } formData.append("currency", currency);

                    const res = await fetch(
                        "http://almalk.org:3000/item",
                        {
                            method: "POST",
                            headers: {
                                "x-access-token": JSON.parse(token),
                            },
                            body: formData,
                        }
                    );
                    console.log("Response status:", res.status);
                    console.log("Response headers:", res.headers);
                    const data = await res.json();
                    console.log("Response body:", data);
                    if (res.status === 401) {
                        setError("You have to be logged in")
                    }
                } catch (error) {
                    console.error("error", error);
                }
            };

            postData();
        }
        else {
            setError("You have to be logged in")
            router.push('/signin')
        }

    };

    return (
        <>
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
                    Publish new item
                </div>
                <div className="mb-3  2xl:flex 2xl:justify-between  2xl:mx-auto  2xl:w-[100%]">
                    <div className="mb-3  2xl:flex 2xl:justify-center  2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">

                        <label className="block font-medium mb-2 text-gray-700" htmlFor="title">
                            product name
                        </label>
                        <input
                            className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.title ? " border-red-500" : ""
                                }`}
                            id="title"
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        {errors.title && (
                            <p className="text-red-500 text-xs italic">{errors.title}</p>
                        )}
                    </div>
                    <div className="mb-3 2xl:flex 2xl:justify-center 2x:litems-start 2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">
                        <label className="block font-medium mb-2 text-gray-700" htmlFor="price">
                            Price
                        </label>
                        <input
                            className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.price ? " border-red-500" : ""
                                }`}
                            id="price"
                            type="number"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                        {errors.price && (
                            <p className="text-red-500 text-xs italic">{errors.price}</p>
                        )}
                    </div>
                </div>
                <div className="mb-3  2xl:flex 2xl:justify-between  2xl:mx-auto  2xl:w-[100%]">
                    <div className="mb-3  2xl:flex 2xl:justify-center  2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">

                        <label
                            className="block font-medium mb-2 text-gray-700"
                            htmlFor="location"
                        >
                            Location
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
                    <div className="mb-3 2xl:flex 2xl:justify-center 2x:litems-start 2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">
                        <label
                            className="block font-medium mb-2 text-gray-700"
                            htmlFor="status"
                        >
                            Status
                        </label>
                        <select
                            className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.status ? " border-red-500" : ""
                                }`}
                            id="status"
                            value={status}
                            onChange={(event) => setStatus(event.target.value)}
                        >
                            <option value="" disabled>
                                Select a status
                            </option>
                            <option value="new">New</option>
                            <option value="used">Used</option>
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
                            htmlFor="currency"
                        >
                            Currency
                        </label>
                        <select
                            className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.currency ? " border-red-500" : ""
                                }`}
                            id="currency"
                            value={currency}
                            onChange={(event) => setCurrency(event.target.value)}
                        >
                            <option value="" disabled>
                                Select a currency
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
                            htmlFor="category"
                        >
                            Category
                        </label>
                        <select
                            className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.currency ? " border-red-500" : ""
                                }`}
                            id="category"
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}
                        >

                            {categoryList.length > 0 ?
                                (<>
                                    <option value="" disabled>
                                        Select a Category
                                    </option>
                                    {
                                        categoryList.map((category) => (

                                            <option value={category._id} key={category.id}>{category.name}</option>
                                        ))
                                    }
                                </>)
                                :
                                (<>

                                </>)
                            }

                        </select>
                        {errors.category && (
                            <p className="text-red-500 text-xs italic">{errors.category}</p>
                        )}
                    </div>
                </div>


                <div className="mb-3 2xl:flex 2xl:justify-center 2x:litems-start 2xl:mx-auto 2xl:flex-col 2xl:w-[95%]">
                    <label
                        className="block font-medium mb-2 text-gray-700"
                        htmlFor="details"
                    >
                        details
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
                            Images
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
                                Are you the owner of this item
                            </label>
                            <input
                                className=" mt-1"
                                id="isOwner"
                                type="checkbox"
                                checked={isOwner}
                                onChange={(event) => setIsOwned(event.target.checked)}
                            />
                        </div>
                    </div>
                </div>

                <button
                    className="bg-[#DB9E43] hover:bg-yellow-700 text-white font-medium py-3 ml-4 px-4 rounded"
                    type="submit"
                >
                    Publish
                </button>

            </form>
        </>
    );
};

export default ItemForm;




