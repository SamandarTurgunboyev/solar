import React from 'react'
import { useTranslation } from 'next-i18next';
import Slider from 'react-slick';

const AreaVideo = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    const {t} = useTranslation()
    return (
        <div className='w-full mb-[70px] p-[20px] flex lg:flex-row flex-col lg:items-start items-center lg:gap-0 gap-[50px]'>
            <div className='lg:w-[35%] w-[100%]'>
                <span className='mt-[5px] font-barlowSemiBold text-yellow'>{t('site_about.Area_video.title_span')}</span>
                <h2 className='mt-[30px] font-barlowBlack text-blue text-4xl'>{t('site_about.Area_video.title')}</h2>
                <p className='text-[#646464] mt-[30px]'>{t('site_about.Area_video.text')}</p>
            </div>
            <div className='lg:w-[65%] sm:w-[100%] w-[100%]'>
                <Slider {...settings}>
                    <div>
                        <iframe className='w-[90%]' height="238" src="https://www.youtube.com/embed/qKBMQ24scgs" title="SOLARA | Մեր մասին" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe className='w-[90%]' height="238" src="https://www.youtube.com/embed/qKBMQ24scgs" title="SOLARA | Մեր մասին" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe className='w-[90%]' height="238" src="https://www.youtube.com/embed/qKBMQ24scgs" title="SOLARA | Մեր մասին" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe className='w-[90%]' height="238" src="https://www.youtube.com/embed/qKBMQ24scgs" title="SOLARA | Մեր մասին" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default AreaVideo