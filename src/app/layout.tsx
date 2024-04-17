import "./globals.css";
import {SessionProvider} from "next-auth/react";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const KAKAO_JS_KEY = process.env.KAKAO_JS_KEY || '';
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta
                name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <title>Document</title>
            <script type="text/javascript" src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_JS_KEY}&libraries=services&autoload=true`}></script>
        </head>
        <body>
        {/*<SessionProvider>*/}
        {/*    {children}*/}
        {/*</SessionProvider>*/}
        {children}
        </body>
        </html>
    );
}
