import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsTelephone } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import { IoIosArrowRoundForward } from 'react-icons/io'
import logo from '../../public/images/logo.png'
import Image from 'next/image'
import { footerData1, footerData2, footerData3, footerData4 } from '@/data/footer'

const Footer = () => {
    return (
        <div className='w-full h-[500px] border border-indigo-600 grid grid-cols-4 bg-slate-500'>
            <div className='my-[50px] mx-[30px]'>
                {footerData1.map((e) => {
                    return (
                        <ul className='flex flex-col gap-[20px]' key={e.id}>
                            <li>
                                <Image
                                    src={logo}
                                    width={150}
                                    height={150}
                                    alt='logo'
                                />
                            </li>
                            <li className='flex gap-[15px]'> <HiOutlineLocationMarker className='text-xl' /> {e.location}</li>
                            <li className='flex gap-[15px]'> <BsTelephone className='text-xl' />{e.tel}</li>
                            <li className='flex gap-[15px]'> <CgMail className='text-2xl' />{e.mail}</li>
                        </ul>
                    )
                })}
            </div>
            <div className='my-[50px] mx-[30px]'>
                {footerData2.map((e) => {
                    return (
                        <ul className='flex flex-col gap-[20px]' key={e.id}>
                            <li>{e.title}</li>
                            <li>{e.text_1}</li>
                            <li>{e.text_2}</li>
                            <li>{e.text_3}</li>
                            <li>{e.text_4}</li>
                        </ul>
                    )
                })}
            </div>
            <div className='my-[50px] mx-[30px]'>
                {footerData3.map((e) => {
                    return (
                        <ul className='flex flex-col gap-[20px]' key={e.id}>
                            <li>{e.text_1}</li>
                            <li>{e.text_1}</li>
                            <li>{e.text_2}</li>
                            <li>{e.text_3}</li>
                            <li>{e.text_4}</li>
                            <li>{e.text_5}</li>
                            <li>{e.text_6}</li>
                            <li>{e.text_7}</li>
                            <li>{e.text_8}</li>
                        </ul>
                    )
                })}
            </div>
            <div className='my-[50px] mx-[30px]'>
                {footerData4.map((e) => {
                    return (
                        <ul className='flex flex-col gap-[20px]' key={e.id}>
                            <li>{e.title}</li>
                            <li>{e.text_1}</li>
                            <li><input type="text" className='w-full h-[55px] p-[15px] outline-0' placeholder='Elektron pochta manzil' /></li>
                            <li><button className='w-full bg-amber-400 text-center'>Axborot byulleteniga obuna bo'ling <IoIosArrowRoundForward className='text-center w-full text-xl my-[10px]' /></button></li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default Footer