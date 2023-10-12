"use client";
import React from "react";

function MoreText() {
  var des = document.getElementById("description");
  var more = document.getElementById("readMore");

  des.classList.toggle("line-clamp-5");
  if (!des.classList.contains("line-clamp-5")) {
    des.classList.remove("line-clamp-5");
    more.textContent = "sembunyikan";
  } else {
    more.textContent = "baca selengkapnya...";
  }
}
function Description() {
  return (
    <>
      <div>
        <p
          id="description"
          className="text-black text-sm font-normal line-clamp-5"
        >
          Memperingati 75 tahun kemerdekaan Republik Indonesia, bangsa ini masih
          terus berjuang mengatasi persoalan kelaparan, khususnya pada balita
          yang meningkat di tengah pandemi Covid-19 yang terus kian menyebar
          keseluruh Indonesia. Oleh karena itu, campaign ini dibuat untuk
          membantu sedikit dari balita maupun orang dewasa yang terdampak dari
          pandemi Covid-19 ini.
        </p>
        <a
          id="readMore"
          className="text-[#F7921C] text-sm font-semibold hover:cursor-pointer"
          onClick={MoreText}
        >
          baca selengkapanya...
        </a>
      </div>
    </>
  );
}

export default Description;
