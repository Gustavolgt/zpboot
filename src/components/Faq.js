import React from 'react';

const Faq = () => {
    return (

        <section className="faq-one">
            <img src="/assets/images/shapes/faq-shape-1.png" alt="" className="faq-one__shape-1" />
            <img src="/assets/images/shapes/faq-shape-2.png" alt="" className="faq-one__shape-2" />
            <img src="/assets/images/shapes/faq-shape-3.png" alt="" className="faq-one__shape-3" />
            <div className="container">
                <div className="block-title text-center">
                    <span className="block-title__bubbles"></span>
                    <p>Pergunts Frequentes</p>
                    <h3>Ficou alguma dúvida?</h3>
                </div>
                <div className="accrodion-grp wow fadeIn faq-accrodion animated">
                    <div className="accrodion">
                        <div className="accrodion-inner">
                            <div className="accrodion-title">
                                <h4>O que é um bot?</h4>
                            </div>
                            <div className="accrodion-content">
                                <div className="inner">
                                    <p>Bot é como se fosse um funcionário que trabalha para você 24 horas por dia sem pausas e custa bem menos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accrodion  ">
                        <div className="accrodion-inner">
                            <div className="accrodion-title">
                                <h4>Será que consigo fazer ?</h4>
                            </div>
                            <div className="accrodion-content">
                                <div className="inner">
                                    <p>Nosso sistema Arrasta e Solta é simples, feito por especialistas para que qualquer pessoa consiga criar fluxos sofisticados sem precisar saber ABSOLUTAMENTE NADA de codigo ou computador.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accrodion ">
                        <div className="accrodion-inner">
                            <div className="accrodion-title">
                                <h4>Consigo usar com meu CRM ?</h4>
                            </div>
                            <div className="accrodion-content">
                                <div className="inner">
                                    <p>Sim, você pode integrar com milhares de sistemas na internet como zapier, make, n8n, e outros. Sem contar as integrações nativas com plataformas de afiliados.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accrodion ">
                        <div className="accrodion-inner">
                            <div className="accrodion-title">
                                <h4>Como conectar meu whatsapp ao bot?</h4>
                            </div>
                            <div className="accrodion-content">
                                <div className="inner">
                                    <p>Você escaneia um QRCODE e já está conectado, zapbot é simples e descomplicado.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Faq;