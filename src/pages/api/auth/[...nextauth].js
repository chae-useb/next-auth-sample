import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      // 세션에 소셜 로그인 제공자 정보 추가
      session.provider = token.provider;
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.provider = account.provider; // 로그인한 제공자 정보 추가
      }
      return token;
    },
    // jwt: {
    //   secret: process.env.NEXTAUTH_SECRET,
    //   encryption: true,
    // },
  },
};

export default NextAuth(authOptions);