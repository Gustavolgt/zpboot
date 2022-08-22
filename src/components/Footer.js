import { Center } from '@chakra-ui/react';
import React, { Component } from 'react';
import { FaAngleUp } from 'react-icons/fa'
export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollBtn: false
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.scrollTop = this.scrollTop.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {

        if (window.scrollY > 70) {
            this.setState({
                scrollBtn: true
            });
        } else if (window.scrollY < 70) {
            this.setState({
                scrollBtn: false
            });
        }

    }

    scrollTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <footer className="site-footer">
                    <img src="/assets/images/shapes/footer-shape-1.png" className="site-footer__shape-1" alt="" />
                    <img src="/assets/images/shapes/footer-shape-2.png" className="site-footer__shape-2" alt="" />
                    <img src="/assets/images/shapes/footer-shape-3.png" className="site-footer__shape-3" alt="" />
                    <div className="site-footer__upper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="footer-widget footer-widget__about">
                                        <a className="footer-widget__logo" href="#"><img
                                            src="/assets/images/zapbot-black.png" width="305"
                                            alt="Awesome Image" /></a>
                                        <p>Solução de automação focada no Mercado Digital para você faturar mais. </p>
                                        <p><a href="mailto:suporte@zapbot.online">suporte@zapbot.online</a> <br />
                                        </p>
                                        <a href="tel:666-888-0000">whatsapp</a>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="footer-widget footer-widget__links">
                                        <h3 className="footer-widget__title">Descubra</h3>
                                        <div className="footer-widget__links-wrap">
                                            <ul className="list-unstyled">
                                                <li><a href="#">Sobre Nós</a></li>
                                                <li><a href="#">Nosso Time</a></li>
                                                <li><a href="#">Ferramentas</a></li>
                                            </ul>

                                            <ul className="list-unstyled">
                                                <li><a href="#">Suporte</a></li>
                                                <li><a href="#">Politicas de Privacidade</a></li>
                                                <li><a href="#">Termos de Uso</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4">
                                    <div className="footer-widget footer-widget__subscribe">
                                        <h3 className="footer-widget__title">Inscreva</h3>
                                        <form className="footer-widget__mc-form mc-form" data-url="https://app.monetizze.com.br/r/BDT1548377">
                                            <input type="text" name="email" placeholder="Endereço de Email " />
                                            <button type="submit"
                                                className="thm-btn footer-widget__mc-btn">Registrar
                                                Agora
                                            </button>
                                        </form>
                                        <div className="mc-form__response"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="site-footer__bottom">
                        <div className="container">
                            <div className="inner-container">
                                <div className="site-footer__social">
                                    <a className="fab fa-facebook-f" href="#"></a>
                                    <a className="fab fa-twitter" href="#"></a>
                                    <a className="fab fa-instagram" href="#"></a>
                                    <a className="fab fa-pinterest-p" href="#"></a>
                                </div>
                                <p>© copyright 2022 by RK Solutions</p>
                            </div>

                        </div>

                    </div>
                </footer>
                <div onClick={this.scrollTop} className="scroll-to-target scroll-to-top" style={{ display: this.state.scrollBtn ? 'block' : 'none' }}>
                    <Center h='40px'><FaAngleUp size={20} color='white' /></Center></div>

                <div className="side-menu__block">


                    <div className="side-menu__block-overlay custom-cursor__overlay">
                        <div className="cursor"></div>
                        <div className="cursor-follower"></div>
                    </div>
                    <div className="side-menu__block-inner ">
                        <div className="side-menu__top justify-content-end">

                            <a href="#" className="side-menu__toggler side-menu__close-btn"><img
                                src="assets/images/shapes/close-1-1.png" alt="" /></a>
                        </div>

                        <nav className="mobile-nav__container">

                        </nav>
                        <div className="side-menu__sep"></div>

                        <div className="side-menu__content">
                            <p>Lorem Ipsum is simply dummy text the printing and setting industry. Lorm Ipsum has been
                                the industrys stanard dummy text ever. </p>
                            <p><a href="mailto:needhelp@zimed.com">needhelp@zimed.com</a> <br /> <a
                                href="tel:888-999-0000">888 999 0000</a></p>
                            <div className="side-menu__social">
                                <a className="fab fa-facebook-f" href="#"></a>
                                <a className="fab fa-twitter" href="#"></a>
                                <a className="fab fa-instagram" href="#"></a>
                                <a className="fab fa-pinterest-p" href="#"></a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        )
    }
}