'use client';

import { signIn } from 'next-auth/react';

export default function SignInButton() {
    const handleSignIn = (provider) => {
        signIn(provider);
    };

    return (
        <div className="flex flex-col gap-4">
            <button
                onClick={() => handleSignIn('google')}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
                Sign in with Google
            </button>
            <button
                onClick={() => handleSignIn('kakao')}
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
            >
                Sign in with Kakao
            </button>
        </div>

        // <div>
        //     <button onClick={() => handleSignIn('google')} style={{ display: 'block', marginBottom: '10px' }}>Sign in with Google</button>
        //     <button onClick={() => handleSignIn('kakao')} style={{ display: 'block', marginBottom: '10px' }}>Sign in with Kakao</button>
        // </div>

        // <div>
        //     <div style={{ marginBottom: '10px' }}>
        //         <button onClick={() => handleSignIn('google')}>Sign in with Google</button>
        //     </div>
        //     <div>
        //         <button onClick={() => handleSignIn('kakao')}>Sign in with Kakao</button>
        //     </div>
        // </div>
    )

}