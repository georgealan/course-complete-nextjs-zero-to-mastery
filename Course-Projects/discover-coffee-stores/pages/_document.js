/* eslint-disable react/jsx-no-undef */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap"
                        as="font"
                        crossOrigin="anonymous"
                    ></link>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;