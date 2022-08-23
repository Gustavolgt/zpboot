import Head from 'next/head'


const lp = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Arts de Amigurumi</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"/>
            </Head>
            <main>
                <div className="">
                <div className="CTA has-text-centered mt-5">
                <p className="is-size-1 is-size-4-mobile">
                  ESTÁ CANSADA
                </p>
                <p className="is-orange is-size-3-mobile">
                  De perder seu valioso tempo procurando receitas e não encontrar?
                </p>
                <p
                  className="has-background-roxo is-size-2 is-size-4-mobile has-text-white"
                >
                  Isso é um grande problema!
                </p>
                <p className="is-size-1 has-text-weight-bold has-text-black is-size-3-mobile mt-1">
                  E em breve vamos resolver o seu problema.
                </p>
        
                <p className="is-size-4 is-size-6-mobile mt-2">
                  Venha falar <br /> Com uma artesã profissional,
                  com direito a lindos modelos de receitas de brinde.<br/> <span className="has-text-weight-bold"> Os mais lindos modelos de receitas te Espera.</span>
                </p>
        
              </div>
              <div className="columns is-mobile mt-2">
                    <div className="column"></div>
                    <div className="column">
                        <a href="https://api.whatsapp.com/send?phone=5511961845970&text=Eu%20quero"><button className="botao2-mobile has-background-light-verde mt-5" value="Submit">EU QUERO</button></a>
                    </div>
                    <div className="column"></div>
                </div>
                </div>
            </main>
        </>
        
    );
}

export default lp;