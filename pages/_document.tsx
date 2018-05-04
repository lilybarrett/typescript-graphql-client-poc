import Document, { Main, Head, NextScript } from "next/document";
import * as React from "react";
import "reflect-metadata";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    public static getInitialProps ({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage( (App) => (props) => sheet.collectStyles(<App {...props}/>));
        const styleTags = sheet.getStyleElement();
        return {...page, styleTags};
    }

    constructor (props) {
        super(props);
        const { __NEXT_DATA__, ids } = props;
        if (ids) {
          __NEXT_DATA__.ids = ids;
        }
      }

    public render () {
        return (
            <html>
                <Head>
                    <title>TypeScript React GraphQL Client</title>
                    <link rel="icon" href="/static/favicon.ico" type="image/x-icon"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    {this.props.styleTags}
                    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        );
    }
}
