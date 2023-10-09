import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import DetailsDonate from './section/details-donate'
import React from 'react'
import Image from 'next/image'

export default function MoneyDonate() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto h-screen flex flex-row justify-center items-center gap-[78px]">
                <DetailsDonate />
                <div className="h-[771px] w-[676px] bg-slate-700">
                    <h1>Donasi Keuangan</h1>
                </div>
            </div>
            <Footer />
        </>
    )
}
