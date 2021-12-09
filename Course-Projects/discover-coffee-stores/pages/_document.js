/* eslint-disable react/jsx-no-undef */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/MarcellusSC-Regular.ttf"
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