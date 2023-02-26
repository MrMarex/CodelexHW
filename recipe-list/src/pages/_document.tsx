import {
    Html, Head, Main, NextScript,
} from 'next/document';

export default function Document () {
    return (
        <Html>
            <Head/>
            <body className='container'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
