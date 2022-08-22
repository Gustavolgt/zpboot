import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import { Stack, Text } from '@chakra-ui/react'
export default class Video extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    openModal = () => {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <section className="">
                <div className="container">
                    <Stack className="video-one__box wow fadeInUp" data-wow-duration="1500ms" w={['100%']} h={['320px']} borderRadius='83% 17% 85% 15% / 30% 73% 27% 70% '>
                        <div className="" style={{ width: "100%", height: '100%', color: 'white', textAlign: 'center' }}>
                            <Text fontSize={['1rem', '2rem']} paddingTop='100px' textTransform='uppercase'>Integrações para Alavancar Suas Vendas</Text>
                            <div style={{ paddingTop: '50px', fontFamily: 'monospace', width: '80%', marginLeft: '10%' }}>
                                <Text fontSize={['14px', '20px']}>Gerenciamento do Lead automatico com as principais plataformas do mercado de afiliados, marketing e automação</Text>
                            </div>
                        </div>
                    </Stack>
                </div >
            </section >

        )
    }
}