import bcrypt from 'bcrypt';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from './db';

export const NEXT_AUTH_CONFIG = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Email', type: 'text', placeholder: '' },
                password: { label: 'Password', type: 'password', placeholder: '' },
            },
            async authorize(credentials) {
                try {
                    // Use credentials.username to access the email
                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials?.username, // Change this to username
                        },
                    });
                    if (!user) {
                        return null; // User not found
                    }
                    // const verifyPass = await bcrypt.compare(
                    //     credentials.password,
                    //     user.password,
                    // );
                    // if (!verifyPass) {
                    //     return null; // Password does not match
                    // }
                    return user; // Return the user object on successful authentication
                } catch (error) {
                    console.error("Authorization error:", error);
                    return null; // Return null on error
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.uid = user.id; // Store user ID in token
            }
            return token;
        },
        session: ({ session, token }: any) => {
            if (session.user) {
                session.user.id = token.uid; // Attach user ID to session
            }
            return session;
        },
    },
    pages: {
        signIn: '/login', // Custom sign-in page
    },
};