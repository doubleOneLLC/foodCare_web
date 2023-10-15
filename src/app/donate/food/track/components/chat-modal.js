import ChatBubbles from "@/components/chat-bubbles";
import React from "react";

function ChatModal({ isOpen, onClose }) {
  return (
    <div
      className={`${
        isOpen ? "" : "hidden"
      } flex h-screen w-screen fixed justify-center items-center`}
    >
      <div
        className={` bg-white rounded-[32px] h-fit m-[18px] p-4 shadow-2xl ${
          isOpen ? "" : "hidden"
        }  `}
      >
        <div className={`z-20 w-full `}>
          <div
            id="header"
            className="flex flex-row p-[18px] items-center justify-between"
          >
            <h1 className="font-semibold text-2xl">Live chat</h1>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
          <div
            id="chat-container"
            data-aos="zoom-in-right"
            className="h-[550px] overflow-x-hidden overflow-y-auto px-6"
          >
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
    </div>
  );
}

export default ChatModal;
