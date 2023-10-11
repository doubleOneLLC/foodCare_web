import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import React from 'react';
import Image from 'next/image';
import foto from '../../../../public/assets/images/create.png';
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container max-w-screen-md mt-32 mb-8 ">
        <div className="gap-12 grid md:grid-cols-1">
          <div>
            <h1 className="font-bold text-3xl  mb-4">Buat Donasi</h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label for="full_name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                  Nama Penyalur
                </label>
                <input
                  type="text"
                  id="full_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder="Masukan Nama Anda"
                  required
                />
              </div>
              <div>
                <label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder="Masukan Email Anda"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label for="subject" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Deskripsi Donasi
              </label>
              <textarea
                id="story"
                name="story"
                rows="5"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary w-full rounded-[20px]"
                placeholder="Masukan Deskripsi Donasi Anda"
                cols="33"
              />
            </div>
            <div className="flex flex-col grid-cols-2 mt-[20px] gap-y-5">
              <div>
                <label for="" class="block text-sm font-bold text-gray-900 dark:text-white">
                  Foto Donasi
                </label>
              </div>
              <Image src={foto} alt="esfsef" />
              <div className=" flex items-center justify-between ">
                <div className="flex flex-row items-start">
                  <input type="checkbox" id="namaFotoDonasi" name="namaFotoDonasi" class="mr-2 text-orange-500 form-checkbox focus:ring-orange-400 h-4 w-4 rounded-sm" />
                  <label for="namaFotoDonasi" class="block text-sm font-bold text-gray-900 dark:text-white">
                    Donasi Makanan
                  </label>
                </div>
              </div>
              <div className="flex flex-row justify-between h-fit">
                <div className=" w-[49%] p-3 gap-y-2 flex-col flex border-2 rounded-lg gap-4">
                  <div className="flex flex-col gap-y-2">
                    <label for="tglDonasi" class="block text-sm font-bold text-gray-900 dark:text-white">
                      Batas Tanggal Donasi
                    </label>
                    <input
                      type="date"
                      id="tglDonasi"
                      name="tglDonasi"
                      className="mt-2 w-full p-1 h-12 border rounded-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label for="tglDonasi" class="block text-sm font-bold text-gray-900 dark:text-white">
                      Jumlah Makanan
                    </label>
                    <input
                      type="number"
                      id="tglDonasi"
                      name="tglDonasi"
                      className="mt-2 w-full p-1 h-12 border rounded-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                      placeholder="masukan jumlah makanan anda"
                    />
                  </div>
                </div>
                <div className=" w-[49%] p-3 gap-y-2 flex-col flex border-2 rounded-lg gap-4">
                  <div className="flex flex-col gap-y-2">
                    <label for="tglDonasi" class="block text-sm font-bold text-gray-900 dark:text-white">
                      Batas Tanggal Donasi
                    </label>
                    <input
                      type="date"
                      id="tglDonasi"
                      name="tglDonasi"
                      className="mt-2 w-full p-1 h-12 border rounded-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label for="tglDonasi" class="block text-sm font-bold text-gray-900 dark:text-white">
                      Jumlah Nominal
                    </label>
                    <input
                      type="text"
                      id="tglDonasi"
                      name="tglDonasi"
                      className="mt-2 w-full p-1 h-12 border rounded-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                      placeholder="Rp"
                    />
                  </div>
                </div>
              </div>
              <button className="text-white font-medium rounded-[99px] bg-primary text-sm px-[35px] py-4 text-center">Buat Donasi</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
