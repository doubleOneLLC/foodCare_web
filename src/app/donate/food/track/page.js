"use client";

import ChatBubbles from "@/components/chat-bubbles";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ChatDialog from "./components/chat-dialog";
import MapView from "./components/map-view";
import ChatModal from "./components/chat-modal";

export default function TrackFood() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChatDialogButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleChatModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div
        data-aos="fade-up"
        className="container w-screen h-screen flex flex-col md:flex-row md:max-w-screen-xl md:max-h-[744px] md:my-16 md:px-[32px] md:mt-24"
      >
        <MapView openModal={handleChatDialogButtonClick} />
        <div className="hidden md:inline-block">
          <ChatDialog />
        </div>
        <ChatModal isOpen={isModalOpen} onClose={handleChatModalClose} />
      </div>
      <Footer />
    </>
  );
}
