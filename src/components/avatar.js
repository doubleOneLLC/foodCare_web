import React from 'react'
import Image from 'next/image';

function Avatar() {
    return (
        <div className="w-[24px] h-[24px] rounded-full overflow-hidden border-2 border-white">
            <Image
                className="object-cover w-full h-full"
                src="/assets/images/dummyPic.png"
                height="24"
                width="24"
                alt="banner"
            />
        </div>
    )
}

export default Avatar;