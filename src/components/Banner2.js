/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import { useEffect, useState } from 'react';
import Image from 'next/image';

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

            <div className="container">
                <img src="/assets/images/shapes/banner-shapes-1-3.png" alt="" className="banner-one__shape-moc-1" />
                <div style={{ width: '90%' }}>
                    <div >
                        <DeviceFrameset device="Nexus 5" >
                            {loading ? <div style={{ width: '100%', display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><div><Image src='/assets/images/zapbot-folded-white.png' width={150} height={150} alt='teste' /></div><p>Carregando</p></div> : <video src="/assets/video.mp4" width="320px" height='100%' alt="" muted autoPlay />}
                        </DeviceFrameset>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-7">
                        <div className="banner-one__content">
                            <h3>Automatize <br /> suas vendas</h3>
                            <p>Não perca seu tempo fazendo as tarefas que podem ser automatizadas<br /> Configure seu chatbot em um dia e economize milhares de horas.</p>
                            <a href="#contact" data-target="#contact" className="thm-btn banner-one__btn scroll-to-target">Começar Agora</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;