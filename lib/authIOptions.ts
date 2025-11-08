// /lib/authOptions.ts
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // Exemple d'utilisateurs codés en dur
        const users = [
          { id: "1", name: "Admin", email: "amineelakkermi37@gmail.com", password: "123456", role: "admin" },
        ];

        const user = users.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        );

        if (!user) return null;
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// --- Pour le typage supplémentaire de `role` dans session ---
declare module "next-auth" {
  interface User {
    role?: string;
  }
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      role?: string;
    };
  }
  interface JWT {
    role?: string;
  }
}
