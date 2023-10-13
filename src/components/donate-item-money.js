import { calculatePercentage, convertToRupiah } from "@/utils/donateCalc.util";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DonateMoneyItem({ img, program, instance, acc, target, verified }) {
  return (
    <Link href="/donate/money">
      <div className="min-w-[250px] bg-white rounded-2xl shadow-md">
        <Image
          className="rounded-2xl object-cover h-[134px] w-[100%]"
          width="250"
          height="134"
          src={img}
          alt="img"
        />

        <div className="p-5">
          <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900">
            {program}
          </h5>
          <p className="flex items-center mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">
            {instance}{" "}
            {verified && (
              <svg
                className="ml-1"
                width="12"
                height="12"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_279_1792)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.00008 0.416656C2.46883 0.416656 0.416748 2.46874 0.416748 4.99999C0.416748 7.53124 2.46883 9.58332 5.00008 9.58332C7.53133 9.58332 9.58342 7.53124 9.58342 4.99999C9.58342 2.46874 7.53133 0.416656 5.00008 0.416656ZM6.98675 4.22499C7.02333 4.18317 7.05118 4.13446 7.06866 4.08173C7.08614 4.02899 7.09289 3.97329 7.08853 3.9179C7.08416 3.86251 7.06876 3.80856 7.04324 3.75921C7.01771 3.70986 6.98257 3.66612 6.93989 3.63055C6.89721 3.59498 6.84785 3.56831 6.79471 3.5521C6.74156 3.53589 6.68572 3.53047 6.63045 3.53617C6.57518 3.54186 6.52161 3.55855 6.47289 3.58525C6.42417 3.61196 6.38128 3.64813 6.34675 3.69166L4.55508 5.84124L3.628 4.91374C3.54941 4.83784 3.44416 4.79584 3.33491 4.79679C3.22567 4.79774 3.12116 4.84156 3.04391 4.91882C2.96665 4.99607 2.92283 5.10057 2.92188 5.20982C2.92093 5.31907 2.96293 5.42432 3.03883 5.50291L4.28883 6.75291C4.32977 6.79382 4.37879 6.82576 4.43275 6.84668C4.48672 6.8676 4.54446 6.87705 4.60228 6.87443C4.6601 6.8718 4.71674 6.85716 4.76859 6.83143C4.82043 6.8057 4.86635 6.76945 4.90341 6.72499L6.98675 4.22499Z"
                    fill="#0F8CFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_279_1792">
                    <rect width="10" height="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </p>
          <div className=" bg-gray-100 rounded-full h-1.5 mb-3">
            <div
              className={"bg-primary h-1.5 rounded-full"}
              style={{
                width: `${calculatePercentage(acc, target)}%`,
              }}
            ></div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-grow">
              <p className="font-semibold text-sm text-gray-600">
                Target:{" "}
                <span className="text-black">{convertToRupiah(target)},-</span>
              </p>
            </div>
            <p className="text-[#00A352] font-semibold text-sm">
              {calculatePercentage(acc, target)}%
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DonateMoneyItem;
