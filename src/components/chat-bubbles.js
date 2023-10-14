import React from "react";

function ChatBubbles({ from, msg, time }) {
  if (from === "in") {
    return (
      <div className="flex w-full justify-start">
        <div>
          <div className="w-fit h-fit max-w-[245px] rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] bg-primary-4">
            <div className="p-[18px] text-[13px] text-[#5D5D5D]">{msg}</div>
          </div>
          <p className="text-end text-xs text-gray-500 my-3">{time}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex w-full justify-end">
        <div>
          <div className="w-fit h-fit max-w-[245px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-none bg-primary">
            <div className="p-[18px] text-[13px] text-white">{msg}</div>
          </div>
          <p className="text-end text-xs text-gray-500 my-3">{time}</p>
        </div>
      </div>
    );
  }
}

export default ChatBubbles;
