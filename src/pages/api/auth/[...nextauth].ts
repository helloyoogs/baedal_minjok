import NextAuth from 'next-auth';
import kakaoProvider from 'next-auth/providers/kakao';

const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID || '';
const KAKAO_CLIENT_SECRET = process.env.KAKAO_CLIENT_SECRET || '';

export default NextAuth({
    providers: [
        kakaoProvider({
            clientId: KAKAO_CLIENT_ID,
            clientSecret: KAKAO_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
});
