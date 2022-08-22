import React from 'react';
import { Stack } from '@chakra-ui/react'
const FeaturesTwo = () => {
    return (
        <section className="cta-two">
            <img src="/assets/images/shapes/cta-2-shape-1.png" alt="" className="cta-two__shape-1" />
            <img src="/assets/images/shapes/cta-2-shape-2.png" alt="" className="cta-two__shape-2" />
            <div className="container">
                <img src="/assets/images/shapes/cta-2-shape-3.png" alt="" className="cta-two__shape-3" />
                <Stack display={['none', 'block']}><img src="/assets/afaturamento.png" alt="" className="cta-two__moc" /></Stack>
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="cta-two__content">
                            <div className="block-title text-left">
                                <span className="block-title__bubbles"></span>
                                <p>O cliente vale Ouro</p>
                                <h3>Aumente seu Faturamento sem investir mais.</h3>
                            </div>

                            <p>Ofereça o produto certo para seu cliente, com nosso sistema de transmissão você pode fazer ofertas personalizadas para cada cliente automaticamente.</p>
                            <a href="#pricing" className="thm-btn cta-two__btn">Quero Faturar Mais</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FeaturesTwo;