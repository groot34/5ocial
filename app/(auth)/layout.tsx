import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import '../globals.css'

export const metadata = {
  title: "5ocial",
  description: "Social Media MERN NextJs App",
};

const inter = Inter({subsets:["latin"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <ClerkProvider>
        <html lang='en'>
            <body className={`${inter.className} bg-dark-1`}>
            <h1 className="text-white">yeeeee auth ka layout hai, so har jagah rendeer hoga ok sign-in and sign-upp sabme he hhoga render koi dikkat nahi aise</h1>
                {children}
            </body>
        </html> 
      </ClerkProvider>
  );
}
