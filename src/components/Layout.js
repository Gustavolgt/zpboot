import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>{props.pageTitle}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon.ico" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon.ico" />



            </Head>

            <div className="page-wrapper">

                {props.children}

            </div>

        </div>
    )
}
export default Layout;