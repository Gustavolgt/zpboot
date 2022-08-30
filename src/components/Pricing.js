import React, { Component } from 'react';
import { Text } from '@chakra-ui/react';
export default class Pricing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            month: true,
            year: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        const month = this.state.month;
        const year = this.state.year;

        if (month) {
            this.setState({ year: true, month: false })
        }
        if (year) {
            this.setState({ year: false, month: true })
        }


    }

    render() {
        return (

            <section className="pricing-one" id="pricing">
                <div className="container">
                    <div className="pricing-one__sep"></div>

                    <div className="text-center">
                        <span className="block-title__bubbles"></span>
                        <Text color='red'>Nossos Preços</Text>
                        <Text fontSize={['40px', '56px']} pb={8} lineHeight='1.1em' fontWeight={900}>
                            O Plano certo para Você
                        </Text>
                    </div>

                    <ul className="list-inline text-center switch-toggler-list" role="tablist" id="switch-toggle-tab">
                        <li className={this.state.month ? 'month active' : 'month'}><a href="#">Mensal</a></li>
                        <li>
                            <label className={this.state.year ? 'switch off' : 'switch on'}>
                                <span onClick={this.handleToggle} className="slider round"></span>
                            </label>
                        </li>
                        <li className={this.state.year ? 'year active' : 'year'}><a href="#">Anual</a></li>
                    </ul>

                    <div className="tabed-content">
                        <div id="month" style={{ display: this.state.month ? 'block' : 'none' }}>
                            <div className="row">
                                <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1500ms">
                                    <div className="pricing-one__single">
                                        <div className="pricing-one__inner">
                                            <img src="/assets/images/shapes/pricing-line-1-1.png" alt=""
                                                className="pricing-one__line" />
                                            <img src="/assets/images/shapes/pricing-icon-1-1.png" alt=""
                                                className="pricing-one__icon" />
                                            <h3>TESTE GRÁTIS POR 14 DIAS</h3>
                                            <p>Não precisa adicionar cartão, teste sem compromisso</p>
                                            <ul className="list-unstyled pricing-one__list">
                                                <li><i className="fa fa-check"></i> 50 Leads</li>
                                                <li><i className="fa fa-check"></i> 1 Sequência</li>
                                                <li><i className="fa fa-check"></i> 4 Fluxos</li>
                                            </ul>

                                            <a href="https://app.monetizze.com.br/r/BEG1552293" className="thm-btn pricing-one__btn">ESCOLHER ESTE</a>
                                        </div>

                                    </div>

                                </div>


                                <div className="col-lg-6 wow fadeInRight" data-wow-duration="1500ms">
                                    <div className="pricing-one__single">
                                        <div className="pricing-one__inner">
                                            <img src="/assets/images/shapes/pricing-line-1-1.png" alt=""
                                                className="pricing-one__line" />
                                            <img src="/assets/images/shapes/pricing-icon-1-3.png" alt=""
                                                className="pricing-one__icon" />
                                            <h3>R$97.00</h3>
                                            <p>Pro</p>
                                            <ul className="list-unstyled pricing-one__list">
                                                <li><i className="fa fa-check"></i> Leads Ilimitados</li>
                                                <li><i className="fa fa-check"></i> Sequências Ilimitadas</li>
                                                <li><i className="fa fa-check"></i> Fluxos Ilimitados</li>
                                            </ul>

                                            <a href="https://app.monetizze.com.br/r/BGU1548378" className="thm-btn pricing-one__btn">ESCOLHER ESTE</a>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div id="year" style={{ display: this.state.year ? 'block' : 'none' }}>
                            <div className="row">
                                <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1500ms">
                                    <div className="pricing-one__single">
                                        <div className="pricing-one__inner">
                                            <img src="/assets/images/shapes/pricing-line-1-1.png" alt=""
                                                className="pricing-one__line" />
                                            <img src="/assets/images/shapes/pricing-icon-1-1.png" alt=""
                                                className="pricing-one__icon" />
                                            <h3>TESTE GRÁTIS POR 14 DIAS</h3>
                                            <p>Não precisa adicionar cartão, teste sem compromisso</p>
                                            <ul className="list-unstyled pricing-one__list">
                                                <li><i className="fa fa-check"></i> 50 Leads</li>
                                                <li><i className="fa fa-check"></i> 1 Sequência</li>
                                                <li><i className="fa fa-check"></i> 4 Fluxos</li>
                                            </ul>

                                            <a href="https://app.monetizze.com.br/r/BEG1552293" className="thm-btn pricing-one__btn">ESCOLHER ESTE</a>
                                        </div>
                                    </div>
                                </div>



                                <div className="col-lg-6 wow fadeInRight" data-wow-duration="1500ms">
                                    <div className="pricing-one__single">
                                        <div className="pricing-one__inner">
                                            <img src="/assets/images/shapes/pricing-line-1-1.png" alt=""
                                                className="pricing-one__line" />
                                            <img src="/assets/images/shapes/pricing-icon-1-3.png" alt=""
                                                className="pricing-one__icon" />
                                            <h3>R$597.00</h3>
                                            <p>Pro</p>
                                            <ul className="list-unstyled pricing-one__list">
                                                <li><i className="fa fa-check"></i> Leads Ilimitados</li>
                                                <li><i className="fa fa-check"></i> Sequências Ilimitadas</li>
                                                <li><i className="fa fa-check"></i> Fluxos Ilimitados</li>
                                            </ul>
                                            <a href="https://app.monetizze.com.br/checkout/KLH251788?src=pv" className="thm-btn pricing-one__btn">ESCOLHER ESTE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}