import Image from "next/image";
import React from "react";

function AboutTeamItem({ img, name, role, univ }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image width="200" height="195" src={img} className="z-10" alt="team" />
      <div class="flex flex-col justify-end items-center w-[260px] h-[252px] bg-white rounded-[24px] shadow-md p-2 mt-[-92px]">
        <div class="p-5">
          <h5 class="mb-2 text-xl text-center font-semibold tracking-tight text-gray-900">
            {name}
          </h5>
          <p class="mb-2 text-sm text-center font-medium text-gray-400">
            {role}
          </p>
          <p class="mb-3 text-sm text-center font-medium text-gray-400">
            {univ}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutTeamItem;
