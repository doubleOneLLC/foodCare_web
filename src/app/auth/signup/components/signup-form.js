"use client";

import { apiBase, endAuth } from "@/constant/api";
import { Icon } from "@iconify/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new URLSearchParams();
      formData.append("name", formValues.name);
      formData.append("email", formValues.email);
      formData.append("password", formValues.password);

      const response = await fetch(`${apiBase}${endAuth}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      if (!response.ok) {
        setError((await response.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: "/" });
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
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nama Lengkap
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 "
              id="name"
              type="name"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              required
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap"
            />
          </div>
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
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[99px] bg-primary">
              <Image
                height="52"
                width="52"
                src="/assets/svgs/auth_apple.svg"
                alt="apple"
                className="w-[24px] h-[24px]"
              />
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[99px] bg-primary">
              <Image
                height="52"
                width="52"
                src="/assets/svgs/auth_google.svg"
                alt="google"
                className="w-[24px] h-[24px]"
              />
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[99px] bg-primary">
              <Image
                height="52"
                width="52"
                src="/assets/svgs/auth_x.svg"
                alt="x"
                className="w-[24px] h-[24px]"
              />
            </div>
          </div>
          <button
            className="text-white font-medium rounded-[99px] bg-primary text-sm px-[35px] py-4 text-center"
            disabled={loading}
          >
            {loading && (
              <Icon icon="spin" className="mr-2 h-4 w-4 animate-spin" />
            )}
            Daftar
          </button>
        </div>
      </form>
    </div>
  );
};
