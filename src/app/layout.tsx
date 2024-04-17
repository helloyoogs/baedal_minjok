import "./globals.css";
import {SessionProvider} from "next-auth/react";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
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
            <script type="text/javascript"
                    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d8dd58190fcb7587e2160d2dd7c3e0c4"></script>
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
