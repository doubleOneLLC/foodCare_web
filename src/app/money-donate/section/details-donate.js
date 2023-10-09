import React from 'react'
import Image from 'next/image';
import { jakarta } from "@/constant/fonts";

function DetailsDonate() {
    return (
        <div className={`flex flex-col h-[771px] w-[382px] rounded-[42px] shadow-md items-center p-[28px] gap-4 ${jakarta.className}`}>
            <div className="w-[330px] h-[128px] rounded-2xl bg-slate-900 overflow-hidden">
                <Image
                    className="object-cover"
                    src="/assets/images/donateBanner.jpg"
                    height="128"
                    width="330"
                    alt="banner"
                />
            </div>
            <div className="flex flex-row justify-start items-center gap-3  w-[100%]">
                <div className="w-[34px] h-[34px] rounded-full overflow-hidden">
                    <Image
                        className="object-cover w-full h-full"
                        src="/assets/images/donateBanner.jpg"
                        height="34"
                        width="34"
                        alt="banner"
                    />
                </div>
                <p className="text-center text-zinc-900 tx font-bold">
                    Indonesia Merdeka Dari Kelaparan
                </p>
            </div>
            <div className="flex flex-col w-[100%] h-[168px] bg-[#F5F6F8] rounded-[22px] p-3 gap-1">
                <p className="text-zinc-900 text-sm font-semibold">
                    Bantu Atasi Kelaparan Sekitar
                </p>
                <div className="flex flex-row h-[24px] justify-start items-center gap-3 ">
                    <div className="flex flex-row h-[100%] w-max -space-x-2 ">
                        <div className="w-[24px] h-[24px] rounded-full overflow-hidden border-2 border-white">
                            <Image
                                className="object-cover w-full h-full"
                                src="/assets/images/donateBanner.jpg"
                                height="24"
                                width="24"
                                alt="banner"
                            />
                        </div>
                        <div className="w-[24px] h-[24px] rounded-full overflow-hidden border-2 border-white">
                            <Image
                                className="object-cover w-full h-full"
                                src="/assets/images/donateBanner.jpg"
                                height="24"
                                width="24"
                                alt="banner"
                            />
                        </div>
                        <div className="w-[24px] h-[24px] rounded-full overflow-hidden border-2 border-white">
                            <Image
                                className="object-cover w-full h-full"
                                src="/assets/images/donateBanner.jpg"
                                height="24"
                                width="24"
                                alt="banner"
                            />
                        </div>
                    </div>
                    <p className="text-neutral-400 text-xs font-bold">
                        100+ orang berdonasi
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-[90%] mt-[-100px] gap-3">
                <div className="flex flex-col w-[100%] h-[122px] bg-[#F7921C] rounded-xl py-4 px-4 gap-5">
                    <div className="flex flex-row justify-start items-center gap-3  w-[100%]">
                        <div className=" bg-[#FFCE95] rounded-full h-1.5 dark:bg-gray-700 w-[60%]">
                            <div className="w-[45%] bg-white h-1.5 rounded-full dark:bg-blue-500"></div>
                        </div>
                        <p className="text-center text-white text-base font-bold">21/30 Hari</p>
                    </div>
                    <div className="w-[100%] h-[50%] flex flex-row justify-between">
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-center text-white text-xs font-medium">
                                Terkumpul
                            </p>
                            <p className="text-center text-white text-sm font-bold">
                                Rp. 20.000,00
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-center text-white text-xs font-medium">
                                Terkumpul
                            </p>
                            <p className="text-center text-white text-sm font-bold">
                                Rp. 20.000,00
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-black text-sm font-normal">
                    Memperingati 75 tahun kemerdekaan Republik Indonesia, bangsa ini masih terus berjuang mengatasi persoalan kelaparan, khususnya pada balita yang meningkat di tengah pandemi Covid-19
                </p>
                <div className="w-[100%] h-[160] rounded-xl overflow-hidden">
                    <Image
                        className="object-cover w-full h-full"
                        src="/assets/images/donateBanner.jpg"
                        height="160"
                        width="300"
                        alt="map"
                    />
                </div>
            </div>
        </div>
    );
}

export default DetailsDonate;