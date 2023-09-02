import Image from 'next/image';
import React from 'react'
import { BsFiletypePdf } from 'react-icons/bs'
import Crt from '../../public/images/about_crt.jpg'
import Slider from 'react-slick'
import { useTranslation } from 'next-i18next';

const Certification = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    className: "center",
                    centerMode: true,
                    centerPadding: "80px"
                }
            }
        ]
    };

    const { t } = useTranslation()
    console.log(t('Cert'));
    return (
        <div className='w-full mb-[70px] p-[20px] flex lg:flex-row flex-col lg:items-start items-center lg:gap-0 gap-[50px]'>
            <div className='lg:w-[35%] w-[100%]'>
                <span className='mt-[5px] font-barlowSemiBold text-yellow'>{t('site_about.Cert.title')}</span>
                <h2 className='mt-[30px] font-barlowBlack text-blue text-4xl'>{t('site_about.Cert.title')}</h2>
                <p className='text-[#646464] mt-[30px]'>{t("site_about.Cert.text")}</p>
                <button className='text-white flex mt-[30px] items-center button-hover before:!bg-blue bg-yellow text-center relative pl-[35px] pt-[15px] pb-[15px] pr-[35px]'>
                    {t("site_about.Cert.button")}
                    <BsFiletypePdf className='text-white ml-[10px]' />
                </button>
            </div>
            <div className='lg:w-[65%] sm:w-[100%] w-[100%]'>
                <Slider {...settings}>
                    <div>
                        <Image src={Crt} className='w-[90%]' />
                    </div>
                    <div>
                        <Image src={Crt} className='w-[90%]' />
                    </div>
                    <div>
                        <Image src={Crt} className='w-[90%]' />
                    </div>
                    <div>
                        <Image src={Crt} className='w-[90%]' />
                    </div>
                    <div>
                        <Image src={Crt} className='w-[90%]' />
                    </div>
                    <div>
                        <Image src={Crt} className='w-[90%]' />
                    </div>
                    <div>
                        <Image src={Crt} className='w-[90%]' />
                    </div>
                    <div>
                        <Image src={Crt} className='w-[90%]' />
                    </div>
                </Slider>
            </div>
        </div>
        // <section className='w-full pb-100 lg:h-[300px] h-[500px]'>
        //     <div className='flex lg:flex-row flex-col lg:items-start items-center lg:gap-0 gap-[50px]'>
        //         <div className='lg:w-[50%] md:w-[80%] lg:pl-[40px] pl-0'>
        //             <span className='text-yellow font-barlowSemiBold  mb-[15px]'>{t('Cert.title')}</span>
        //             <h2 className='font-barlowBlack text-[42px] mb-[30px] text-blue'>{t("Cert.title")}</h2>
        //             <p className='mb-[30px] text-[#646464]'>{t("Cert.text")}</p>
        //             <button className='text-white flex items-center button-hover before:!bg-blue bg-yellow text-center relative pl-[35px] pt-[15px] pb-[15px] pr-[35px]'>
        //                 {t("Cert.button")}
        //                 <BsFiletypePdf className='text-white ml-[10px]' />
        //             </button>
        //         </div>
        //         <div className='lg:w-[50%] w-[80%]'>
        //             <Slider {...settings}>
        //                 <div>
        //                     <div>
        //                         <Image src={Crt} />
        //                     </div>
        //                 </div>
        //                 <div>
        //                     <Image src={Crt} />
        //                 </div>
        //                 <div>
        //                     <Image src={Crt} />
        //                 </div>
        //                 <div>
        //                     <Image src={Crt} />
        //                 </div>
        //                 <div>
        //                     <Image src={Crt} />
        //                 </div>
        //             </Slider>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Certification