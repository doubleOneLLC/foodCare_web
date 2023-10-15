import ChatBubbles from "@/components/chat-bubbles";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";

function TrackFood() {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col md:flex-row max-w-screen-xl max-h-[744px] my-16 px-[32px] mt-24">
        <div className="flex align-middle justify-center relative overflow-hidden min-w-[550px] rounded-[32px]">
          <Image
            className="object-cover"
            height="744"
            width="550"
            alt="maps"
            src="/assets/images/track_map.png"
          />
          <div className="flex flex-col absolute bottom-0 w-[90%] mb-[32px] p-[32px] rounded-[32px] bg-white">
            <div className="flex flex-row justify-evenly">
              <div className="flex flex-col gap-2 mr-3">
                <div className="h-[42px] w-[42px] bg-black rounded-full"></div>
                <div>
                  <h2 className="font-bold">Jody Yuantoro</h2>
                  <p className="font-semibold text-xs text-gray-500">Kurir</p>
                </div>
              </div>
              <div className="flex flex-col">
                <ol className="relative border-l ml-6 border-gray-200">
                  <li className="ml-6 mb-[32px]">
                    <span className="absolute flex items-center justify-center w-[38px] h-[38px] bg-primary-4 rounded-full -left-[20px] ring-8 ring-white">
                      <Image
                        className="w-[18px] h-[18px]"
                        width="32"
                        height="32"
                        alt="location"
                        src="/assets/svgs/track_clock.svg"
                      />
                    </span>
                    <div className="ml-3">
                      <h3 className="mb-1 text-xs font-semibold text-gray-400">
                        Waktu Penjemputan
                      </h3>
                      <p className="mb-2 font-semibold leading-none">
                        15 minutes
                      </p>
                    </div>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-[38px] h-[38px] bg-primary-4 rounded-full -left-[20px] ring-8 ring-white">
                      <Image
                        className="w-[18px] h-[18px]"
                        width="32"
                        height="32"
                        alt="location"
                        src="/assets/svgs/track_location.svg"
                      />
                    </span>
                    <div className="ml-3">
                      <h3 className="mb-1 text-xs font-semibold text-gray-400">
                        Alamat Tujuan
                      </h3>
                      <p className="mb-2 font-semibold leading-none">
                        Jl. Tlogomas No. 343
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <button
              type="button"
              className="text-white w-[100%] font-medium rounded-[99px] bg-primary text-sm px-[35px] mt-6 py-4 text-center"
            >
              Detail Donasi
            </button>
          </div>
        </div>

        <div className="w-full m-[32px]">
          <div id="header" className="p-[18px]">
            <h1 className="font-semibold text-2xl">Live chat</h1>
          </div>
          <div id="chat-container" className="overflow-y-auto h-[84%] px-6">
            <ChatBubbles
              from="in"
              msg="Halo mas, untuk posisi nya apakah
sudah sesuai ?"
              time="09:15 am"
            />
            <ChatBubbles msg="Ya, sudah sesuai mas" time="09:20 am" />
            <ChatBubbles
              from="in"
              msg="Ini untuk makanan nya dari sini ada 3 bungkus mas"
              time="09:23 am"
            />
            <ChatBubbles msg="Okeh mas kalo gitu di tunggu ya" time="9:25 am" />
            <ChatBubbles from="in" msg="Okeh siap mas otw" time="09:27 am" />
            <ChatBubbles msg="Okeh mas hati - hati " time="9:30 am" />
          </div>
          <div id="text-input">
            <form>
              <label for="chat" className="sr-only">
                Ketik pesan . . .
              </label>
              <div className="flex items-center px-3 py-2">
                <button
                  type="button"
                  className="inline-flex justify-center p-2 text-primary-3 rounded-lg cursor-pointer hover:text-primary hover:bg-gray-100"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      fill="currentColor"
                      d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                    />
                  </svg>
                  <span className="sr-only">Upload image</span>
                </button>
                <button
                  type="button"
                  className="p-2 text-primary-3 rounded-lg cursor-pointer hover:text-primary hover:bg-gray-100"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
                    />
                  </svg>
                  <span className="sr-only">Add emoji</span>
                </button>
                <textarea
                  id="chat"
                  rows="1"
                  className="mx-3 px-3 w-full resize-none  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary"
                  placeholder="Ketik pesan ..."
                ></textarea>
                <button
                  type="submit"
                  className="inline-flex justify-center p-2 text-primary rounded-full cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 rotate-90"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                  </svg>
                  <span className="sr-only">Send message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TrackFood;
