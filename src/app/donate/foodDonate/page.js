import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react'

function foodDonate() {
  return (
    <>
    <div classname ="flex flex-row w-[1440px] h-[1024px]">
        <Navbar/>
        <div classname ="w-[382px] h-[771px] mt-[126px] ml-[157px] rounded-[42px] mb-[500px] bg-white shadow-md md:shadow-2xl">
            <Image src="/assets/images/foodBanner.png" alt="" classname ="rounded-[10px] w-[330px] h-[129px] mt-[44px] ml-[26px]"/>
            <div classname ="bg-white flex flex-row ml-[26px] mt-[16px] w-[224px]">
                <div classname ="w-[34px] h-[34px] rounded-[34px] bg-white"><Image src="foodMiniBanner.png" classname ="m-auto rounded-[34px]" alt=""/></div>
                <div classname ="text-[14px] mt-[6px] ml-[6px]">Donasi Makanan Desa Kami</div>
            </div>
            <div classname ="bg-[#F5F6F8] rounded-[20px] mt-[16px] ml-[26px] flex w-[330px] h-[168px] flex-col">
                <div classname ="mt-[16px] ml-[18px] text-[14px]">Bantu Atasi Kelaparan Sekitar</div>
                <div classname ="bg-white] flex flex-row mt-[12px] ml-[18px]">
                    <div classname ="w-[24px] h-[24px] bg-white rounded-[50px]"><Image src="/assets/images/foodProfile.png" classname ="m-auto rounded-[50px]" alt=""/></div>
                    <div classname ="w-[24px] h-[24px] bg-white rounded-[50px] -ml-[8px]"><Image src="/assets/images/foodProfile.png" classname ="m-auto rounded-[50px]" alt=""/></div>
                    <div classname ="w-[24px] h-[24px] bg-white rounded-[50px] -ml-[8px]"><Image src="/assets/images/foodProfile.png" classname ="m-auto rounded-[50px]" alt=""/></div>
                    <div classname ="text-[12px] ml-[8px] mt-[4px]">100+ orang berdonasi</div>
                </div>
            </div>
            <div classname ="w-[302px] h-[120px] bg-[#F7921C] m-auto -mt-[75px] rounded-[10px] flex flex-col">
                <div classname ="w-[302px] h-[70px] bg-[#F7921C] rounded-[10px] flex flex-row">
                    <div classname ="w-[175px] h-[6px] rounded-[5px] bg-[#FFCE95] ml-[17px] mt-[30px]">
                        <div classname ="w-[122px] h-[6px] rounded-[5px] bg-white"></div>
                    </div>
                    <div classname ="text-[16px] mt-[20px] ml-[10px] text-white">25/30 hari</div>
                </div>
                <div classname ="flex justify-around bg-[#F7921C] text-white -mt-[8px] text-[12px]">
                    <div classname ="-ml-[5px]">Terkumpul</div>
                    <div classname ="mr-[15px]">Target</div>
                </div>
                <div classname ="flex justify-around bg-[#F7921C] text-white mt-[5px] text-[14px]">
                    <div>50+ Makanan</div>
                    <div>300+ Makanan</div>
                </div>
            </div>
            <div classname ="mt-[12px] mx-auto bg-white w-[298px] h-[80] text-[12px]">Memperingati 75 tahun kemerdekaan Republik Indonesia, bangsa ini masih terus berjuang mengatasi persoalan kelaparan, khususnya pada balita yang meningkat di tengah pandemi Covid-19 <a href="#" classname ="text-[#F7921C] hover:underline">lihat selengkapnya...</a></div>
            <Image src="/assets/images/maps_ill.png" classname ="w-[298px] h-[158px] rounded-[10px] mx-auto mt-[21px]" alt=""/>
        </div>
        <div classname ="w-[700px] h-[771px] mt-[126px] ml-[53px] rounded-[42px] mb-[50px] bg-white" >
            <div classname ="text-[32px] mt-[70px]">Donasi Makanan</div>
            <form action="">
                <div classname ="mt-[20px] flex">
                    <div classname ="flex flex-col">
                        <label for="" classname ="text-[12px]">Tempat Pengambilan</label>
                        <input type="text" placeholder="Masukkan alamat" classname ="w-[330px] h-[52px] rounded-[15px] mt-[12px] border-[1px] border-[#A0A0A0] border-solid px-[15px]"/>
                    </div>
                    <div classname ="flex flex-col ml-[30px]">
                        <label for="" classname ="text-[12px]">Tempat Penjemputan</label>
                        <input type="text" placeholder="Masukkan alamat" classname ="w-[330px] h-[52px] rounded-[15px] mt-[12px] border-[1px] border-[#A0A0A0] border-solid px-[15px]"/>
                    </div>
                </div>
                <div classname ="flex flex-col mt-[27px]">
                    <label for="" classname ="text-[12px]">Nama Makanan</label>
                    <input type="text" placeholder="Masukkan nama makanan" classname ="w-[688px] h-[52px] rounded-[15px] mt-[12px] border-[1px] border-[#A0A0A0] border-solid px-[15px]"/>
                </div>
                <div classname ="flex mt-[27px]">
                    <div classname ="flex flex-col">
                        <label for="" classname ="text-[12px]">Tanggal Diambil</label>
                        <input type="date" classname ="w-[330px] h-[52px] rounded-[15px] mt-[12px] border-[1px] border-[#A0A0A0] border-solid"/>
                    </div>
                    <div classname ="flex flex-col ml-[30px]">
                        <label for="" classname ="text-[14px]">Kuantitas</label>
                        <div classname ="text-[12px] w-auto h-auto mt-[6px] m-auto">30 orang</div>
                        <input type="range" name="Orang" id="" classname ="w-[330px] h-[1px] -mt-[35px] range-slider bg-[#F7921C] appearance-none" min="20" max="500"/>
                        <div classname ="flex justify-around mt-[5px]">
                            <div classname ="text-[14px]">Min: 20</div>
                            <div classname ="text-[14px]">Max: 500</div>
                        </div>
                    </div>                    
                </div>
                <div classname ="flex flex-col mt-[20px]">
                    <div><label for="" classname ="text-[14px]">Foto Makanan</label></div>
                    <div classname ="flex mt-[15px]">
                        <div classname ="w-[136px] h-[128px] rounded-[15px]"><Image src="/assets/images/foodPicture.png" alt="" classname ="m-auto rounded-[15px]"/></div>
                        <div classname ="w-[136px] h-[128px] rounded-[15px] ml-[16px]"><Image src="/assets/images/foodPicture.png" alt="" classname ="m-auto rounded-[15px]"/></div>
                        <div classname ="w-[136px] h-[128px] rounded-[15px] border-[1px] border-dashed border-[#5D5D5D] ml-[16px] hover:bg-[#C0741B]">
                        <label for="file">
                                <div className ="w-auto h-auto">
                                    <Image src="/assets/svgs/plus-logo.svg" alt="" className ="ml-[47px] mt-[45px]"/>
                                    <input id="file" type="file" className ="hidden"/>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <button classname ="text-[16px] text-white w-[690px] h-[69px] mx-auto bg-[#F7921C] rounded-[20px] mt-[47px] hover:bg-[#C0741B]">Kirim Donasi</button>
            </form>
        </div>
        <Footer/>
    </div>
    </>
  );
}

export default foodDonate