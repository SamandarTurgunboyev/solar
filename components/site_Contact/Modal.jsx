import Link from 'next/link'
import React, { useState } from 'react'
import img from '../../public/images/contact_img1.png'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const Modal = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const [nameE, setNameE] = useState(false);
    const [phoneE, setPhoneE] = useState(false);
    const [emailE, setEmailE] = useState(false);
    const [msgE, setMsgE] = useState(false);


    const handleSubmit = async () => {
        if (name.length == 0 && phone.length < 12 && msg.length < 3 && email.length < 12) {
            setNameE(true);
            setPhoneE(true);
            setMsgE(true);
            setEmailE(true)
            return;
        }

        if (name.length == 0) {
            setNameE(true);
            return;
        }

        if (phone.length < 12) {
            setNameE(true);
            return;
        }

        if (msg.length == 0) {
            setPhoneE(ture);
            return;
        }

        setIsLoading(true);
        const message = `Yangi foydalanuvchi
        \n<b>Ismi:</b> ${name}
        \n<b>Raqam:</b> <code>${phone}</code>
        \n<b>Xabar</b> ${msg}`;
        try {
            await axios.get(
                `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
                {
                    params: {
                        chat_id: chatId,
                        text: message,
                        parse_mode: "html",
                    },
                }
            );
            setIsLoading(false);
            setMsg("");
            setName("");
            setPhone("");
            setMsgE(false);
            setNameE(false);
            setPhoneE(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    };

    const { t } = useTranslation()
    return (
        <div className='p-[40px]'>
            <div className='w-full'>
                <ul className='flex lg:items-start items-center gap-[20px]'>
                    <Link href='/'>
                        <li className='site_ab before:!bg-[#646464] cursor-pointer relative hover:text-yellow text-[#646464]'>{t('site_contact.link')}</li>
                    </Link>
                    <li className='text-[#646464]'>{t('site_contact.header.title')}</li>
                </ul>
            </div>
            <div className='mt-[20px]'>
                <div>
                    <h3 className='text-blue font-barlowBlack text-3xl'>{t('site_contact.header.title')}</h3>
                </div>
                <div className='mt-[20px] flex lg:flex-row flex-col lg:items-start items-center w-full'>
                    <div className='flex flex-col gap-[30px] lg:w-[50%] w-[100%] lg:items-start items-center'>
                        <p className='text-[#646464]'>{t('site_contact.header.text')}</p>
                        <Image src={img} />
                    </div>
                    <div className='lg:w-[50%] w-[100%] flex flex-col gap-[5px]'>
                        <div>
                            <input
                                type="text"
                                placeholder={t("application.input.name")}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input-class"
                            />
                            {nameE ? (
                                <p className="mb-2 text-red text-start">
                                    {t("application.error.name")}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="w-full">
                            <input
                                type="tel"
                                placeholder={t('site_contact.header.input.mail')}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input-class"
                            />
                            {emailE ? (
                                <p className="mb-2 text-red text-start">
                                    {t('site_contact.header.input.mail_text')}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="w-full">
                            <input
                                type="tel"
                                placeholder={t("application.input.phone")}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="input-class"
                            />
                            {phoneE ? (
                                <p className="mb-2 text-red text-start">
                                    {t("application.error.phone")}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="w-full">
                            <textarea
                                placeholder={t("application.input.message")}
                                value={msg}
                                onChange={(e) => setMsg(e.target.value)}
                                className="input-class h-[200px]"
                                maxLength={200}
                            />
                            {msgE ? (
                                <p className="mb-2 text-red text-start">
                                    {t("application.error.message")}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        <button
                            className="flex flex-row items-center gap-2 button-hover text-white before:!bg-yellow !bg-blue w-fit"
                            onClick={handleSubmit}
                        >
                            {t('site_contact.header.input.button')}
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Modal