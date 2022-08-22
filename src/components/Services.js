import React from 'react';
import { Text } from '@chakra-ui/react'
const Services = () => {
    return (
        <section className="service-one" id="features">
            <div className="container">
                <div className=" text-center">
                    <span className="block-title__bubbles"></span>
                    <Text color='red'>Fácil e Prático</Text>
                    <Text fontSize={['40px', '65px']} fontWeight={500} mb={8} lineHeight='1.1em'>
                        Feito Pensando em Você
                    </Text>
                </div>
                <div className="row">
                    <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                        data-wow-delay="000ms">
                        <div className="service-one__single">
                            <i className="zimed-icon-responsive"></i>
                            <h3>Arrasta e Solta</h3>
                        </div>
                    </div>

                    <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                        data-wow-delay="100ms">
                        <div className="service-one__single">
                            <i className="zimed-icon-computer-graphic"></i>
                            <h3>CRM Completo</h3>
                        </div>

                    </div>

                    <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                        data-wow-delay="200ms">
                        <div className="service-one__single">
                            <i className="zimed-icon-development1"></i>
                            <h3>Etiquetas</h3>
                        </div>

                    </div>

                    <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                        data-wow-delay="300ms">
                        <div className="service-one__single">
                            <i className="zimed-icon-development"></i>
                            <h3>Automações</h3>
                        </div>

                    </div>

                    <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                        data-wow-delay="400ms">
                        <div className="service-one__single">
                            <i className="zimed-icon-development"></i>
                            <h3>Integrações Nativas</h3>
                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}
export default Services;