import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react'

function trackLocation() {
  return (
    <>
    <div className ="w-[1440px] h-[1477px]">
        <Navbar/>
        <div className ="w-auto h-auto text-[32px] mt-[122px] ml-[125px]">Lacak Donasi</div>
        <div className ="w-[1242px] h-[744px] flex mt-[20px] ml-[125px] shadow-2xl">
            <div className ="w-[550px] h-[744px] bg-[url(/assets/images/maps_ill.png)] rounded-[40px]">
            <div className ="w-auto h-auto flex flex-col m-auto">
                    <div className ="w-[42px] h-[42px] rounded-[50%] bg-[#F7921C] ml-[370px] mt-[30px] z-10"><Image src="/assets/svgs/mingcute_location-2-fill.svg" alt="" className ="w-[24px] h-[24px] m-auto rounded-[50%] mt-[9px]"/></div>
                    <div className ="w-auto h-auto ml-[300px] -mt-[24px]"><Image src="/assets/svgs/Vector 3.svg" alt=""/></div>
                    <div className ="w-[42px] h-[42px] rounded-[50%] bg-white ml-[370px] -mt-[40px] z-10"><Image src="/assets/svgs/noto_motor-scooter.svg" alt="" className ="w-[24px] h-[24px] rounded-[50%] m-auto mt-[9px]"/></div>
                    <div className ="w-auto h-auto ml-[160px] -mt-[34px]"><Image src="/assets/svgs/Vector 2.svg" alt=""/></div>
                    <div className ="w-[42px] h-[42px] rounded-[50%] bg-[#F7921C] ml-[140px] -mt-[90px]"><Image src="/assets/svgs/icon-park-solid_fork-spoon.svg" alt="" className ="w-[24px] h-[24px] m-auto rounded-[50%] mt-[9px]"/></div>
                </div>
                <div className ="w-[440px] h-[233px] flex flex-col bg-white m-auto mt-[100px] rounded-[31px]">
                    <div className ="flex">
                        <div className ="w-auto h-auto flex flex-col ml-[39px] mt-[34px]">
                            <div className ="w-[46px] h-[46px] rounded-[30px]">
                                <Image src="/assets/images/profile.png" alt="" className ="w-[46px] h-[46px] rounded-[30px] m-auto"/>
                            </div>
                            <div className ="w-auto h-auto text-[16px] mt-[6px]">Jody Yuantoro</div>
                            <div className ="w-auto h-auto text-[12px] text-[#A0A0A0] mt-[4px]">Kurir</div>
                        </div>
                        <div className ="w-auto h-auto flex flex-col ml-[35px] mt-[34px]">
                            <div className ="w-[38px] h-[38px] rounded-[50%] bg-[#FFE8CD]"><Image src="/assets/svgs/ep_clock.svg" alt="" className ="m-auto mt-[9px]"/></div>
                            <div class="border-[1px] border-dashed m-auto w-[1px] h-[23px] bg-gray-400"></div>
                            <div className ="w-[38px] h-[38px] rounded-[50%] bg-[#FFE8CD]"><Image src="/assets/svgs/ep_location.svg" alt="" className ="m-auto mt-[9px]"/></div>
                        </div>
                        <div className ="w-auto h-auto flex flex-col ml-[13px] mt-[34px]">
                            <div className ="w-auto h-auto text-[10px] text-[#A0A0A0]">Waktu Penjemputan</div>
                            <div className ="w-auto h-auto text-[16px] mt-[4px]">15 Menit</div>
                            <div className ="w-auto h-auto text-[10px] text-[#A0A0A0] mt-[16px]">Alamat Tujuan</div>
                            <div className ="w-auto h-auto text-[16px] mt-[4px]">Jl. Tlogomas No. 343</div>
                        </div>
                    </div>
                    <button className ="w-[400px] h-[56px] bg-[#F7921C] text-[16px] text-white hover:bg-[#C0741B] m-auto rounded-[28px]">Detai Donasi</button>
                </div>
            </div>
            <div className ="w-auto h-auto flex flex-col mt-[40px] ml-[75px]">
                <div className ="w-auto h-auto text-[24px]">Live Chat</div>
                <div className ="w-[245px] h-[68px] rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] bg-[#FFE8CD]">
                    <div className ="w-auto h-auto text-[13px] text-[#5D5D5D] ml-[20px] mt-[18px]">Halo mas, untuk posisi nya apakah<br/>sudah sesuai ?</div>
                </div>
                <div className ="w-auto h-auto text-[11px] text-[#BEBFC1] ml-[180px]">09:20 am</div>
                <div className ="w-[245px] h-[50px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-none] bg-[#F7921C] ml-[300px] mt-[16px]">
                    <div className ="w-auto h-auto text-[13px] text-[#FFF] ml-[15px] mt-[17px]">Ya, sudah sesuai mas</div>
                </div>
                <div class="flex"><div class="w-auto h-auto text-[11px] text-[#BEBFC1] ml-[480px]">09:23 am</div><Image src="/assets/svgs/check.svg" alt="" class="ml-[5px]"/></div>
                <div className ="w-[245px] h-[70px] rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] bg-[#FFE8CD] mt-[16px]">
                    <div className ="w-auto h-auto text-[13px] text-[#5D5D5D] ml-[15px] mt-[15px]">Ini untuk makanan nya dari sini ada 3 bungkus mas</div>
                </div>
                <div className ="w-auto h-auto text-[11px] text-[#BEBFC1] ml-[180px]">9:25 am</div>
                <div className ="w-[245px] h-[49px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-none] bg-[#F7921C] ml-[300px] mt-[16px]">
                    <div className ="w-auto h-auto text-[13px] text-[#FFF] ml-[15px] mt-[17px]">Okeh mas kalo gitu di tunggu ya </div>
                </div>
                <div class="flex"><div class="w-auto h-auto text-[11px] text-[#BEBFC1] ml-[480px]">09:27 am</div><Image src="/assets/svgs/check.svg" alt="" class="ml-[5px]"/></div>
                <div className ="w-[245px] h-[46px] rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] bg-[#FFE8CD] mt-[16px]">
                    <div className ="w-auto h-auto text-[13px] text-[#5D5D5D] ml-[15px] mt-[15px]">Okeh siap mas otw</div>
                </div>
                <div className ="w-auto h-auto text-[11px] text-[#BEBFC1] ml-[180px]">9:30 am</div>
                <div className ="w-[158px] h-[49px] rounded-tl-[10px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-none] bg-[#F7921C] ml-[387px] mt-[16px]">
                    <div className ="w-auto h-auto text-[13px] text-[#FFF] ml-[21px] mt-[17px]">Okeh mas hati - hati </div>
                </div>
                <div class="flex"><div class="w-auto h-auto text-[11px] text-[#BEBFC1] ml-[480px]">09:21 am</div><Image src="/assets/svgs/check.svg" alt="" class="ml-[5px]"/></div>
                <div className ="w-auto h-auto mt-[50px]">        
                    <form>
                        <div className ="flex items-center px-3 py-2 rounded-lg bg-[#FFE8CD]">
                            <textarea id="chat" rows="1" className ="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Ketik pesan..."></textarea>
                                <button type="submit" className ="inline-flex justify-center p-2 text-[#F7921C] rounded-full cursor-pointer hover:bg-white">
                                <svg className ="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    </>
  );
}

export default trackLocation