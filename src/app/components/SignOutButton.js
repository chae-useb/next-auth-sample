'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton() {
    return <button
        onClick={() => signOut()}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
    >Sign out</button>;
}