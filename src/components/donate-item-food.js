import {
  calculateDaysRemaining,
  calculateTotalDays,
} from "@/utils/dateCalc.util";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DonateFoodItem({
  img,
  program,
  instance,
  acc,
  target,
  dest,
  verified,
  dateCreated,
  dateExpired,
}) {
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
                <g clip-path="url(#clip0_279_1792)">
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
          <div className="flex flex-row">
            <div className="flex flex-grow items-center">
              <svg
                className="mr-2"
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.18014 0.909119C7.59421 0.909119 8.95036 1.51616 9.95026 2.59671C10.9502 3.67725 11.5119 5.14279 11.5119 6.67091C11.5119 9.10564 9.92877 11.759 6.80355 14.6594C6.62977 14.8207 6.40821 14.9093 6.17912 14.9091C5.95003 14.9089 5.72861 14.8199 5.5551 14.6582L5.34839 14.4644C2.36151 11.6396 0.848389 9.05127 0.848389 6.67091C0.848389 5.14279 1.41013 3.67725 2.41002 2.59671C3.40992 1.51616 4.76607 0.909119 6.18014 0.909119ZM6.18014 4.45484C5.63627 4.45484 5.11467 4.68832 4.7301 5.10391C4.34552 5.5195 4.12947 6.08317 4.12947 6.67091C4.12947 7.25865 4.34552 7.82232 4.7301 8.23791C5.11467 8.65351 5.63627 8.88698 6.18014 8.88698C6.72401 8.88698 7.24561 8.65351 7.63019 8.23791C8.01476 7.82232 8.23082 7.25865 8.23082 6.67091C8.23082 6.08317 8.01476 5.5195 7.63019 5.10391C7.24561 4.68832 6.72401 4.45484 6.18014 4.45484Z"
                  fill="#23BF20"
                />
              </svg>
              <p className="font-semibold text-sm text-gray-400">{dest}m</p>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2"
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.18368 3.0682C4.4639 3.15987 3.93593 3.33688 3.498 3.67866C3.20463 3.90762 2.94663 4.18476 2.73348 4.4999C2.07349 5.47569 2.07349 6.86763 2.07349 9.65152C2.07349 12.4354 2.07349 13.8274 2.73348 14.8032C2.94663 15.1183 3.20463 15.3954 3.498 15.6244C4.40641 16.3333 5.70223 16.3333 8.29387 16.3333C8.8737 16.3333 9.38868 16.3333 9.84896 16.3254L9.84896 16.2733C9.84891 15.6408 9.84888 15.2555 9.89789 14.9231C10.1672 13.0965 11.5009 11.6638 13.2014 11.3745C13.5108 11.3219 13.8695 11.3219 14.4584 11.322L14.5069 11.322C14.5142 10.8276 14.5142 10.2746 14.5142 9.65187C14.5142 6.86798 14.5142 5.47569 13.8543 4.4999C13.6411 4.18476 13.3831 3.90762 13.0897 3.67866C12.6518 3.33688 12.1238 3.15987 11.4041 3.0682V3.71213C11.4041 4.32717 10.9399 4.82577 10.3673 4.82577C9.79476 4.82577 9.3306 4.32717 9.3306 3.71213V2.97179C9.00983 2.96971 8.66515 2.96971 8.29387 2.96971C7.92258 2.96971 7.5779 2.96971 7.25714 2.97179V3.71213C7.25714 4.32717 6.79298 4.82577 6.22041 4.82577C5.64784 4.82577 5.18368 4.32717 5.18368 3.71213V3.0682ZM4.8381 7.42425C5.21981 7.42425 5.52925 7.09186 5.52925 6.68183C5.52925 6.2718 5.21981 5.9394 4.8381 5.9394C4.45639 5.9394 4.14695 6.2718 4.14695 6.68183C4.14695 7.09186 4.45639 7.42425 4.8381 7.42425ZM5.52925 9.65152C5.52925 10.0616 5.21981 10.3939 4.8381 10.3939C4.45639 10.3939 4.14695 10.0616 4.14695 9.65152C4.14695 9.24149 4.45639 8.9091 4.8381 8.9091C5.21981 8.9091 5.52925 9.24149 5.52925 9.65152ZM8.29387 7.42425C8.67558 7.42425 8.98502 7.09186 8.98502 6.68183C8.98502 6.2718 8.67558 5.9394 8.29387 5.9394C7.91215 5.9394 7.60271 6.2718 7.60271 6.68183C7.60271 7.09186 7.91215 7.42425 8.29387 7.42425ZM8.98502 9.65152C8.98502 10.0616 8.67558 10.3939 8.29387 10.3939C7.91215 10.3939 7.60271 10.0616 7.60271 9.65152C7.60271 9.24149 7.91215 8.9091 8.29387 8.9091C8.67558 8.9091 8.98502 9.24149 8.98502 9.65152ZM8.29387 13.3636C8.67558 13.3636 8.98502 13.0313 8.98502 12.6212C8.98502 12.2112 8.67558 11.8788 8.29387 11.8788C7.91215 11.8788 7.60271 12.2112 7.60271 12.6212C7.60271 13.0313 7.91215 13.3636 8.29387 13.3636ZM12.4408 6.68183C12.4408 7.09186 12.1313 7.42425 11.7496 7.42425C11.3679 7.42425 11.0585 7.09186 11.0585 6.68183C11.0585 6.2718 11.3679 5.9394 11.7496 5.9394C12.1313 5.9394 12.4408 6.2718 12.4408 6.68183ZM11.7496 10.3939C12.1313 10.3939 12.4408 10.0616 12.4408 9.65152C12.4408 9.24149 12.1313 8.9091 11.7496 8.9091C11.3679 8.9091 11.0585 9.24149 11.0585 9.65152C11.0585 10.0616 11.3679 10.3939 11.7496 10.3939ZM5.52925 12.6212C5.52925 13.0313 5.21981 13.3636 4.8381 13.3636C4.45639 13.3636 4.14695 13.0313 4.14695 12.6212C4.14695 12.2112 4.45639 11.8788 4.8381 11.8788C5.21981 11.8788 5.52925 12.2112 5.52925 12.6212Z"
                  fill="#F7921C"
                />
                <path
                  d="M14.4691 12.4356C13.8399 12.4357 13.5767 12.4382 13.3636 12.4745C12.1067 12.6883 11.1209 13.7472 10.9219 15.0973C10.8881 15.3263 10.8858 15.609 10.8857 16.2848C11.8807 16.2147 12.5529 16.0434 13.0897 15.6244C13.3831 15.3954 13.6411 15.1183 13.8543 14.8032C14.2443 14.2265 14.4038 13.5044 14.4691 12.4356Z"
                  fill="#F7921C"
                />
                <path
                  d="M6.73877 1.48486C6.73877 1.17734 6.50669 0.92804 6.22041 0.92804C5.93412 0.92804 5.70204 1.17734 5.70204 1.48486V3.71213C5.70204 4.01965 5.93412 4.26895 6.22041 4.26895C6.50669 4.26895 6.73877 4.01965 6.73877 3.71213V1.48486Z"
                  fill="#F7921C"
                />
                <path
                  d="M10.8857 1.48486C10.8857 1.17734 10.6536 0.92804 10.3673 0.92804C10.081 0.92804 9.84896 1.17734 9.84896 1.48486V3.71213C9.84896 4.01965 10.081 4.26895 10.3673 4.26895C10.6536 4.26895 10.8857 4.01965 10.8857 3.71213V1.48486Z"
                  fill="#F7921C"
                />
              </svg>
              <p className={`text-sm font-semibold text-gray-400`}>
                <span className="text-primary">
                  {calculateDaysRemaining(dateExpired)}
                </span>{" "}
                / {calculateTotalDays(dateCreated, dateExpired)} hari
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DonateFoodItem;
