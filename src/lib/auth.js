import { apiBase, endAuth } from "@/constant/api";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: `${process.env.NEXTAUTH_SECRET}`,
  session: {
    strategy: "jwt",
    maxAge: 3600,
  },
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      name: "xyzscape",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Masukkan email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        try {
          const formData = new URLSearchParams();
          formData.append("email", credentials.email);
          formData.append("password", credentials.password);
          const response = await fetch(`${apiBase}${endAuth}/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData,
          });

          if (!response.ok) {
            throw new Error("Failed to fetch user from API");
          }

          const userData = await response.json();
          return userData.data;
        } catch (error) {
          console.error("Error fetching user from API:", error);
          throw new Error("Failed to fetch user from API");
        }
      },
    }),
  ],
};
