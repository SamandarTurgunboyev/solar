import hero from '@/data/hero';
import React from 'react'
import { useTranslation } from 'next-i18next';
import Slider from 'react-slick';
import background_1 from '../public/images/hero1.jpg'
import background_2 from '../public/images/hero2.jpg'
import background_3 from '../public/images/hero3.jpg'
import background_4 from '../public/images/hero4.jpg'
import background_5 from '../public/images/hero5.jpg'
import Image from 'next/image';
import { BsArrowRightShort } from 'react-icons/bs'
import { BsArrowLeftShort } from 'react-icons/bs'
import { IoIosArrowRoundForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <button
      style={{ justifyContent: 'center', alignItems: 'center', fontSize: '25px', cursor: 'pointer', width: "40px", height: '40px', lineHeight: '40px', background: '#273968', zIndex: '1', overflow: 'hidden', color: 'white', position: 'absolute' }}
      onClick={onClick}
      className='bottom-[60px] right-[20px] md:flex hidden'
    >
      <BsArrowRightShort />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <button
      style={{ justifyContent: 'center', alignItems: 'center', fontSize: '25px', cursor: 'pointer', width: "40px", height: '40px', lineHeight: '40px', background: '#273968', zIndex: '1', overflow: 'hidden', color: 'white', position: 'absolute', bottom: "60px" }}
      className='bottom-[60px] right-[80px] md:flex hidden'
      onClick={onClick}
    >
      <BsArrowLeftShort style={{ zIndex: '2' }} />
    </button>
  );
}

const Hero = () => {
  const { t } = useTranslation()
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div style={{ width: '100%' }}>
      <Slider {...settings} style={{ width: '100%', display: 'flex' }}
        className='md:justify-end justify-start md:items-end items-start'
      >
        <div className='relative'>
          <Image
            src={background_1}
            style={{
              width: '100%',
              height: 'auto',
            }}
            alt="bg_p1"
          />
          <h1 className='absolute font-barlowBlack top-[200px] left-[350px] md:text-6xl text-4xl text-blue'>{t("hero.page_1.title")}</h1>
          <div className='absolute top-[400px] left-[520px] flex gap-[50px]'>
            <button className='button-hover before:!bg-blue flex flex-row items-center'>
              <p>{t('hero.link_1')}</p>
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
            <button className='button-hover before:!bg-yellow !bg-blue flex flex-row items-center'>
              <p>{t('hero.link_2')}</p>
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </div>
        </div>
        <div className='relative'>
          <Image
            src={background_2}
            style={{
              width: '100%',
              height: 'auto',
            }}
            alt="bg_p2"
          />
          <h1 className='absolute font-barlowBlack top-[200px] left-[350px] md:text-6xl text-4xl text-blue'>{t("hero.page_2.title")}</h1>
          <div className='absolute top-[400px] left-[520px] flex gap-[50px]'>
            <button className='button-hover before:!bg-blue flex flex-row items-center'>
              <p>{t('hero.link_1')}</p>
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
            <button className='button-hover before:!bg-yellow !bg-blue flex flex-row items-center'>
              <p>{t('hero.link_2')}</p>
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </div>
        </div>
        <div className='relative'>
          <Image
            src={background_3}
            style={{
              width: '100%',
              height: 'auto',
            }}
            alt="bg_p2"
          />
          <h1 className='absolute font-barlowBlack top-[200px] left-[350px] md:text-6xl text-4xl text-blue'>{t("hero.page_3.title")}</h1>
          <div className='absolute top-[400px] left-[520px] flex gap-[50px]'>
            <button className='button-hover before:!bg-blue flex flex-row items-center'>
              <p>{t('hero.link_1')}</p>
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
            <button className='button-hover before:!bg-yellow !bg-blue flex flex-row items-center'>
              <p>{t('hero.link_2')}</p>
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </div>
        </div>
        <div className='relative'>
          <Image
            src={background_4}
            style={{
              width: '100%',
              height: 'auto',
            }}
            alt="bg_p2"
          />
          <h1 className='absolute font-barlowBlack top-[200px] left-[350px] md:text-6xl text-4xl text-blue'>{t("hero.page_4.title")}</h1>
          <div className='absolute top-[400px] left-[520px] flex gap-[50px]'>
            <button className='button-hover before:!bg-blue flex flex-row items-center'>
              <p>{t('hero.link_1')}</p>
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
            <button className='button-hover before:!bg-yellow !bg-blue flex flex-row items-center'>
              <p>{t('hero.link_2')}</p>
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </div>
        </div>
        <div className='relative'>
          <Image
            src={background_5}
            style={{
              width: '100%',
              height: 'auto',
            }}
            alt="bg_p2"
          />
          <h1 className='absolute font-barlowBlack w-[800px] text-center top-[200px] left-[300px] md:text-6xl text-4xl text-blue'>{t("hero.page_5.title")}</h1>
          <div className='absolute top-[400px] left-[520px] flex gap-[50px]'>
            <button className='button-hover before:!bg-blue flex flex-row items-center'>
              <p>{t('hero.link_1')}</p>
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
            <button className='button-hover before:!bg-yellow !bg-blue flex flex-row items-center'>
              <p>{t('hero.link_2')}</p>
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Hero