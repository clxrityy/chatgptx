import React from "react";
import '../src/styles/globals.css';
import SideBar from "../components/SideBar";
import { getServerSession } from "next-auth";
import { SessionProvider } from "../components/SessionProvider";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Login from "../components/Login";
import ClientProvider from "../components/ClientProvider";
import Head from "./head";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <Head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              {/* sidebar */}
              <div className="bg-[#323337] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>
              {/* clientprovider - notification */}
              <ClientProvider />

              <div className="bg-[#1b1b1b] flex-1">
                {children}
              </div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
