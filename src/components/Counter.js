import Image from 'next/image';
import React, { Component } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Stack, Text, Center } from '@chakra-ui/react';

export default class Counter extends Component {
    constructor() {
        super()
        this.state = {
            startCounter: false
        }
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ startCounter: true });
        }
    }

    render() {
        return (
            <div>
                <section className="funfact-one">
                    <img src="/assets/images/shapes/pricing-shape-1.png" alt="" className="funfact-one__shape-1" />
                    <img src="/assets/images/shapes/pricing-shape-2.png" alt="" className="funfact-one__shape-2" />
                    <img src="/assets/images/shapes/pricing-shape-3.png" alt="" className="funfact-one__shape-3" />
                    <Center w='100%' flexDir='column'>
                        <Stack w={['90%', '50%']} textAlign='center' mt={[-20, 0]}>
                            <Stack><Image src='/assets/images/platforms.png' width={1170} height={211} alt='' /></Stack>
                            <Text fontSize={['1rem', '2rem']}>E muito mais...</Text></Stack>
                    </Center>

                </section>

            </div>
        );
    }
}