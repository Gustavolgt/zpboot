/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Stack } from '@chakra-ui/react';
const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }
        , [])

    return (
        <div>

            <header className="main-nav__header-one " style={{ zIndex: '99999999' }}>
                <nav className={sticky ? "header-navigation stricky stricked-menu stricky-fixed" : "header-navigation stricky"}>
                    <div className="container">
                        <div className="main-nav__logo-box">
                            <a href="/" className="main-nav__logo">
                                <Image src="/assets/images/zapbot-black1.png" width={3480 / 20} height={802 / 20} alt="Awesome Image" />
                            </a>
                            <a href="#" className="side-menu__toggler"><i className="fa fa-bars"></i></a>
                        </div>
                        <div className="main-nav__main-navigation">
                            <ul className="one-page-scroll-menu main-nav__navigation-box">
                                <li className="current scrollToLink">
                                    <a href="/">Inicio</a>
                                </li>
                                <li className="scrollToLink">
                                    <a href="#features">Facilidades</a>
                                </li>
                                <li className="scrollToLink">
                                    <a href="#pricing">Preço</a>
                                </li>

                                <li className="scrollToLink">
                                    <a href="#testimonials">Depoimentos</a>
                                </li>

                            </ul>
                        </div>
                        <div className="main-nav__right">
                            <a href="#pricing" data-target="#pricing"
                                className="thm-btn header__btn scroll-to-target">Teste Grátis</a>
                            <a href="https://app.zapbot.online"
                                className="thm-btn header__btn2 scroll-to-target">Entrar</a>

                        </div>

                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
