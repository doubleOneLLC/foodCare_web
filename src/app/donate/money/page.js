import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import DetailsDonate from './section/details.donate'
import InputDetails from './section/input.details'
import React from 'react'


export default function MoneyDonate() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto h-fit flex flex-row justify-center gap-[78px] mt-24">
                <DetailsDonate />
                <div>
                <h1 className="text-black text-[32px] font-bold">Donasi Keuangan</h1>
                <InputDetails />
                </div>
            </div>
            <Footer />
        </>
    )
}
