import { useRef, useState } from 'react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import Swiper from 'react-id-swiper';
import { Stack } from '@chakra-ui/react';

const Testimonial = () => {
    const ref = useRef(null);

    const goNext = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slidePrev();
        }
    };
    return (

        <section className="testimonials__one" id="testimonials">
            <img src="/assets/images/shapes/map-1-1.png" alt="Awesome Image" className="map-img" />
            <img src="/assets/images/shapes/testi-shape-1.png" alt="" className="testimonials__one-shape-1" />
            <img src="/assets/images/shapes/testi-shape-2.png" alt="" className="testimonials__one-shape-2" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex">
                        <div className="my-auto wow fadeInUp" data-wow-duration="1500ms">
                            <div id="testimonials-slider-pager">
                                <div className="testimonials-slider-pager-one">
                                    <span onClick={goNext} className="pager-item active" data-slide-index="0"><img
                                        src="/assets/images/testimonials/testi-1-1.jpg"
                                        alt="Awesome Image" /></span>
                                    <span onClick={goPrev} className="pager-item" data-slide-index="1"><img
                                        src="/assets/images/testimonials/testi-1-2.jpg"
                                        alt="Awesome Image" /></span>
                                    <span onClick={goNext} className="pager-item" data-slide-index="2"><img
                                        src="/assets/images/testimonials/testi-1-3.jpg"
                                        alt="Awesome Image" /></span>
                                    <span onClick={goPrev} className="pager-item" data-slide-index="3"><img
                                        src="/assets/images/testimonials/testi-1-4.jpg"
                                        alt="Awesome Image" /></span>
                                    <span onClick={goNext} className="pager-item" data-slide-index="4"><img
                                        src="/assets/images/testimonials/testi-1-5.jpg"
                                        alt="Awesome Image" /></span>
                                    <span onClick={goPrev} className="pager-item" data-slide-index="5"><img
                                        src="/assets/images/testimonials/testi-1-6.jpg"
                                        alt="Awesome Image" /></span>
                                </div>
                                <div className="testimonials-slider-pager-two">
                                    <a href="#" className="pager-item active" data-slide-index="0"><img
                                        src="/assets/images/testimonials/testi-1-1.jpg"
                                        alt="Awesome Image" /></a>
                                    <a href="#" className="pager-item" data-slide-index="1"><img
                                        src="/assets/images/testimonials/testi-1-2.jpg"
                                        alt="Awesome Image" /></a>
                                    <a href="#" className="pager-item" data-slide-index="2"><img
                                        src="/assets/images/testimonials/testi-1-3.jpg"
                                        alt="Awesome Image" /></a>
                                    <a href="#" className="pager-item" data-slide-index="3"><img
                                        src="/assets/images/testimonials/testi-1-4.jpg"
                                        alt="Awesome Image" /></a>
                                    <a href="#" className="pager-item" data-slide-index="4"><img
                                        src="/assets/images/testimonials/testi-1-5.jpg"
                                        alt="Awesome Image" /></a>
                                    <a href="#" className="pager-item" data-slide-index="5"><img
                                        src="/assets/images/testimonials/testi-1-6.jpg"
                                        alt="Awesome Image" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="block-title text-left">
                            <span className="block-title__bubbles"></span>
                            <p>Quem usa recomenda!</p>
                            <h3>O que Nossos Clientes Dizem</h3>
                        </div>
                        <ul className="slider testimonials-slider">

                            <Swiper ref={ref} >
                                <li className="slide-item">
                                    <div className="testimonials__one__single">
                                        <p>Adoro utilizar o zapbot por ser muito simples de criar meus bots com a ferramenta e sem contar que o suporte é muito bom me atendeu rapidinho quando precisei.</p>
                                        <h3>Central Atendimento Digital</h3>
                                    </div>
                                </li>
                                <li className="slide-item">
                                    <div className="testimonials__one__single">
                                        <p>Pagava duas funcionárias só para atender o whatsapp e tirar pedidos, substitui todo o trabalho e agora pago só 97 por mês por um serviço que não dorme e não me pede aumento.</p>
                                        <h3>Natalia S.</h3>
                                    </div>
                                </li>
                                <li className="slide-item">
                                    <div className="testimonials__one__single">
                                        <p>A integração nativa com a Monetizze é fantastica agora eu finalmente posso falar que faço vendas automaticas de verdade kkkkkkkk</p>
                                        <h3>Gustavo C</h3>
                                    </div>
                                </li>
                                <li className="slide-item">
                                    <div className="testimonials__one__single">
                                        <p>Adoro o carinho com o cliente que vocês tem, sempre que peço algo sou atendida rapidamente, obrigada por facilitar tanto o meu trabalho.</p>
                                        <h3>Carolina C. Variedades</h3>
                                    </div>
                                </li>
                                <li className="slide-item">
                                    <div className="testimonials__one__single">
                                        <p>Como eu queria ter conhecido o zapbot antes, teria economizado muito mais</p>
                                        <h3>Pedro Guilherme</h3>
                                    </div>
                                </li>
                                <li className="slide-item">
                                    <div className="testimonials__one__single">
                                        <p>A facilidade de criar o robo é o que mais me chamou atenção porque nao sei nada de computador e consegui fazer meu robo com menos de 24 horas
                                        </p>
                                        <h3>Adriana Hagans</h3>
                                    </div>
                                </li>
                            </Swiper>


                            <div className="testimonial_pagination">
                                <div className="testimonials-slider-pager-one testimonials-slider-pager-two" onClick={goPrev}>
                                    <i className="zimed-icon-left-arrow"></i>
                                </div>
                                <div className="ml-3" onClick={goNext}>
                                    <i className="zimed-icon-right-arrow"></i>
                                </div>

                            </div>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Testimonial;