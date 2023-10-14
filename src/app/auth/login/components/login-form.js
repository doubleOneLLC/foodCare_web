"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      });

      setLoading(false);

      if (res?.error) {
        setError("Invalid email or password");
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className={"grid gap-6"}>
      <form onSubmit={onSubmit}>
        {error && (
          <p className="text-center bg-red-300 rounded-lg py-4 mb-6">{error}</p>
        )}
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              id="email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              required
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Masukkan email"
            />
          </div>
          <div className="grid gap-1">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="email"
            >
              Password
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              required
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <p className="text-center text-sm my-2">Atau gunakan akun</p>
          <div className="flex justify-around mb-8 mx-auto gap-3">
            <div className="w-[52px] h-[52px] rounded-[99px] bg-[#FF9531] hover:bg-[#C0741B]">
              {/* <Image
                src="/assets/svgs/apple-logo.svg"
                alt=""
                className="w-[24px] h-[24px] mx-auto mt-[11px]"
              /> */}
            </div>
            <div className="w-[52px] h-[52px] rounded-[99px] bg-[#FF9531] hover:bg-[#C0741B]">
              {/* <Image
                src="/assets/svgs/google-logo.svg"
                alt=""
                className="w-[24px] h-[24px] mx-auto mt-[13px]"
              /> */}
            </div>
            <div className="w-[52px] h-[52px] rounded-[99px] bg-[#FF9531] hover:bg-[#C0741B]">
              {/* <Image
                src="/assets/svgs/x-logo.svg"
                alt=""
                className="w-[24px] h-[24px] mx-auto mt-[14px]"
              /> */}
            </div>
          </div>
          <button
            className="text-white font-medium rounded-[99px] bg-primary text-sm px-[35px] py-4 text-center"
            disabled={loading}
          >
            {/* {loading && <Icon.spin className="mr-2 h-4 w-4 animate-spin" />} */}
            Masuk
          </button>
        </div>
      </form>
    </div>
  );
};
