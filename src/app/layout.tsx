import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { ClerkProvider } from '@clerk/nextjs'
import NavBar from "./_components/Nav";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>

    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <NavBar/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
