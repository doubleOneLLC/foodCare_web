"use client";

import Accordion from "@/components/accordion";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <div
        data-aos="fade-up"
        className="container max-w-screen-xl mt-32 mb-8 px-8"
      >
        <div className="gap-12 grid md:grid-cols-2">
          <div>
            <h1 className="font-bold text-3xl mb-4">Pertanyaan umum</h1>
            <Accordion
              title="Apa itu donasi makanan?"
              summary="Donasi makanan adalah tindakan sukarela di mana individu, kelompok, atau organisasi menyumbangkan makanan kepada mereka yang membutuhkan. Makanan yang didonasikan dapat berasal dari sisa makanan, surplus, atau makanan baru yang disiapkan khusus untuk tujuan donasi."
            />
            <Accordion
              title="Apakah makanan harus dalam kondisi tertentu?"
              summary="Idealnya, makanan yang didonasikan sebaiknya dalam kondisi yang aman untuk dikonsumsi. Makanan harus segar, tidak kedaluwarsa, tidak rusak, dan disimpan dengan benar sesuai pedoman keamanan makanan. Organisasi penerima biasanya memiliki pedoman khusus terkait jenis makanan yang dapat mereka terima dan bagaimana cara penyimpanan makanan tersebut."
            />
            <Accordion
              title="Apa manfaat dari donasi makanan?"
              summary="Membantu mereka yang membutuhkan
        Mengurangi limbah makanan
        Menciptakan kepedulian sosial: Membangun rasa kepedulian dan solidaritas dalam masyarakat."
            />
          </div>
          <div>
            <h1 className="font-bold text-3xl mb-8">
              Masih belum menemukan jawaban?
            </h1>
            <div data-aos="fade-up" className="grid gap-4">
              <div>
                <label
                  for="full_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nama lengkap
                </label>
                <input
                  type="text"
                  id="full_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder="Masukkan nama lengkap anda"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder="Masukkan alamat email anda"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder="Subjek masalah anda"
                  required
                />
              </div>
              <div>
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Pesan
                </label>
                <textarea
                  type="text"
                  id="message"
                  rows="6"
                  className="block w-full resize-none p-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder="Masukkan pertanyaan atau keluhan disini"
                  required
                />
              </div>
              <button
                type="button"
                className="text-white font-medium rounded-[99px] bg-primary text-sm px-[35px] py-4 text-center"
              >
                Kirim Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
