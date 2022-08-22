import React from 'react';
import { Text, Stack, Center } from '@chakra-ui/react'
const FeaturesOne = () => {
    return (
        <div className="cta-three">

            <img src="/assets/images/shapes/cta-1-shape-2.png" alt="" className="cta-three__shape-2" />
            <img src="/assets/images/shapes/cta-1-shape-3.png" alt="" className="cta-three__shape-3" />
            <Center w='100%'>
                <img src="/assets/images/shapes/cta-1-shape-1.png" alt="" className="cta-three__shape-1" />
                <Stack direction={['column', 'row']} w={['100%', '80%']} alignItems='center' justifyContent='space-between' zIndex='100000'>
                    <Stack w={['90%', '50%']} border={['2px solid #00ff00', 'none']} >
                        <img src="/assets/images/teste1.gif" alt="" width='100%' />
                    </Stack>
                    <Stack w={['100%', '45%']}>
                        <div className="cta-three__content">
                            <div className="text-left">
                                <span className="block-title__bubbles"></span>
                                <Text color='red'>Interface Intuitiva</Text>
                                <Text fontSize={['40px', '45px']} fontWeight={500} mb={8} lineHeight='1.1em'>
                                    Construa Bots arrastando e soltando
                                </Text>
                            </div>
                            <div className="cta-three__box-wrap">
                                <div className="cta-three__box">
                                    <div className="cta-three__box-icon">
                                        <i className="zimed-icon-strategy"></i>
                                    </div>
                                    <div className="cta-three__box-content">
                                        <h3>Fluxos</h3>
                                        <p>Envie um funil de vendas para seu cliente e envie ofertas personalizada para cada cliente automaticamente.</p>
                                    </div>

                                </div>

                                <div className="cta-three__box">
                                    <div className="cta-three__box-icon">
                                        <i className="zimed-icon-training"></i>
                                    </div>

                                    <div className="cta-three__box-content">
                                        <h3>Conheça seus Clientes</h3>
                                        <p>Você tem controle de todos os passos do seu cliente, use com sabedoria.</p>
                                    </div>

                                </div>
                            </div>

                            <a href="#pricing" className="thm-btn cta-three__btn">Construir um Robô</a>
                        </div>

                    </Stack>
                </Stack>
            </Center>
        </div>
    )
}
export default FeaturesOne;


{/*
                <div className="row justify-content-end">
                    <div className="col-lg-6">
                        <div className="cta-three__content">
                            <div className="block-title text-left">
                                <span className="block-title__bubbles"></span>
                                <p>Interface Intuitiva</p>
                                <h3>Construa Bots arrastando e soltando</h3>
                            </div>
                            <div className="cta-three__box-wrap">
                                <div className="cta-three__box">
                                    <div className="cta-three__box-icon">
                                        <i className="zimed-icon-strategy"></i>
                                    </div>
                                    <div className="cta-three__box-content">
                                        <h3>Fluxos</h3>
                                        <p>Envie um funil de vendas para seu cliente e envie ofertas personalizada para cada cliente automaticamente.</p>
                                    </div>

                                </div>

                                <div className="cta-three__box">
                                    <div className="cta-three__box-icon">
                                        <i className="zimed-icon-training"></i>
                                    </div>

                                    <div className="cta-three__box-content">
                                        <h3>Conheça seus Clientes</h3>
                                        <p>Você tem controle de todos os passos do seu cliente, use com sabedoria.</p>
                                    </div>

                                </div>
                            </div>

                            <a href="#" className="thm-btn cta-three__btn">Construir um Robô</a>
                        </div>

                    </div>

                </div>
    */}



