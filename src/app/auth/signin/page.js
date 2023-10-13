import React from 'react'

function signIn() {
  return (
    <>
    <div className ="w-[1440px] h-[1024px] flex">
        <div className ="w-[924px] h-[1024px] bg-[url(/assets/images/bg_auth.png)] bg-cover flex flex-col">
            <div className ="text-[35px] text-white ml-[67px] mt-[74px]">foodCare</div>
            <div className ="text-[36px] text-white ml-[67px] mt-[280px]">Login untuk <br/> membantu mereka</div>
            <div className ="text-[20px] text-white ml-[67px] mt-[32px]">kamu cukup masukkan nomor ponsel atau <br/> email aja, kok.</div>
            <div className ="text-[20px] text-white ml-[67px] mt-[300px]">“ Berbagi Makanan, Berbagi Harapan, Satu Hati ”</div>
        </div>
        <div className ="w-[692px] h-[1024px] bg-white rounded-tl-[32px] rounded-bl-[32px] -ml-[28px]">
            <form action="" className ="mt-[213px]">
                <label for="" className ="text-[32px] text-[#FF9531] w-auto ml-[40px]">Log In</label>
                <div className ="flex flex-col mt-[38px] mx-auto w-[548px]">
                    <input type="text" placeholder="Nomor Ponsel atau email" className ="text-[20px] text-[#555] bg-[#FFF4E8] w-[548px] h-[69px] rounded-[999px] px-[39px]"/>
                    <input type="submit" placeholder="Log In" className ="text-[20px] bg-[#FF9531] text-[#FFF4E8] w-[548px] h-[69px] rounded-[999px] hover:bg-[#C0741B] mt-[18px]"/>
                 </div>
                 <div className ="w-[500px] text-center mx-auto mt-[43px] text-[16px] text-[#FF9531]">Atau login dengan</div>
                 <div className ="flex justify-around mt-[26px] w-[200px] mx-auto">
                    <div className ="w-[52px] h-[52px] rounded-[99px] bg-[#FF9531] hover:bg-[#C0741B]"><Image src="/assets/svgs/apple-logo.svg" alt="" className ="w-[24px] h-[24px] mx-auto mt-[11px]"/></div>
                    <div className ="w-[52px] h-[52px] rounded-[99px] bg-[#FF9531] hover:bg-[#C0741B]"><Image src="/assets/svgs/google-logo.svg" alt="" className ="w-[24px] h-[24px] mx-auto mt-[13px]"/></div>
                    <div className ="w-[52px] h-[52px] rounded-[99px] bg-[#FF9531] hover:bg-[#C0741B]"><Image src="/assets/svgs/x-logo.svg" alt="" className ="w-[24px] h-[24px] mx-auto mt-[14px]"/></div>
                 </div>
                 <div className ="w-[448px] h-[50px] m-auto mt-[59px] text-[16px] text-center text-[#555]">Dengan login kamu menyetujui <a className ="underline-[none] text-[#FF9531] hover:underline hover:cursor-pointer">Syarat & <br/>Ketentuan</a> dan <a className ="underline-[none] text-[#FF9531] hover:underline hover:cursor-pointer">Kebijakan Privasi</a> sitename.</div>
                 <div className ="w-[296px] h-[45px] text-[#555] mt-[28px] m-auto text-center">Belum punya akun? <a href="#" className ="text-[#FF9531] hover:underline-[none] hover:underline">Buat akun aja</a></div>
            </form>
        </div>
    </div>
    </>
  );
}

export default signIn