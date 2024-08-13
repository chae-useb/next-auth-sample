'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import SignInButton from './components/SignInButton';
import SignOutButton from './components/SignOutButton';

export default function Home() {
  const { data: session, status } = useSession();

  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }

  useEffect(() => {
    if (session?.accessToken) {
      // JWT 토큰을 네이티브 앱으로 전달
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(session.accessToken);
      }
    }
  }, [session]);

  const providerName = session?.provider
    ? session.provider.charAt(0).toUpperCase() + session.provider.slice(1)
    : 'Kakao';

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs p-4 bg-white rounded shadow-md">
        {!session ? (
          <SignInButton />
        ) : (
          <div>
            <h2>Logged in as: {session?.provider?.charAt(0).toUpperCase() + session.provider.slice(1)}</h2>
            <pre className='text-black'>{JSON.stringify(session, null, 2)}</pre>
            <SignOutButton />
          </div>
        )}
      </div>
    </div>
  );
}