/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Flex, Stack, Center, Text } from '@chakra-ui/react'

const Banner = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }
        , [])

    return (

        <section className="banner-one" id="banner" style={{ backgroundImage: `url(/assets/images/background/banner-bg-1-1.png)` }}>
            <img src="/assets/images/shapes/banner-shapes-1-1.png" alt="" className="banner-one__shape-1" />
            <img src="/assets/images/shapes/banner-shapes-1-2.png" alt="" className="banner-one__shape-2" />

            <img src="/assets/images/shapes/banner-shapes-1-4.png" alt="" className="banner-one__shape-4" />
            <img src="/assets/images/shapes/banner-shapes-1-5.png" alt="" className="banner-one__shape-5" />
            <img src="/assets/images/shapes/banner-shapes-1-6.png" alt="" className="banner-one__shape-6" />
            <img src="/assets/images/shapes/banner-shapes-1-7.png" alt="" className="banner-one__shape-7" />
            <Center w='100%' minH='100vh' pt={40}>
                <Stack direction={['column', 'row']} w='80%'>
                    <Stack w={['100%', '70%']} pt={[0, 40]} pl={[0, 10]}>
                        <div className="col-lg-7">
                            <Flex flexDir='column' color='white' >
                                <Text fontSize={['40px', '56px']} lineHeight='1.1em' fontWeight={900}>
                                    Automatize <br /> suas vendas
                                </Text>
                                <Text fontWeight={400} py={2}>Não perca seu tempo fazendo as tarefas que podem ser automatizadas<br /> Configure seu chatbot em um dia e economize milhares de horas.</Text>
                                <a href="#pricing" data-target="#pricing" className="thm-btn banner-one__btn scroll-to-target">Começar Agora</a>
                            </Flex>

                        </div>
                    </Stack>
                    <Stack flex='1' >
                        <img src="/assets/images/shapes/banner-shapes-1-3.png" alt="" className="banner-one__shape-moc-1" />
                        <div className="">
                            <Center my={[20, 0]}>
                                <DeviceFrameset device="Nexus 5" >
                                    {!loading && <video src="/assets/video.mp4" width="320px" alt="" height='100%' muted autoPlay />}
                                </DeviceFrameset>
                            </Center>
                        </div>
                    </Stack>
                </Stack>
            </Center>
            <iframe style="opacity: 0;" src="https://app.monetizze.com.br/r/BDT1548377" width="1" height="1" scrolling="no"></iframe>
        </section>
    )
}
export default Banner;