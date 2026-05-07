import type {Metadata} from "next";
import React from "react";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "../components/header/Header";

export const metadata: Metadata = {
    title: "Redacted Remastered",
    description: "The official record keeper for combat sports worldwide.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="h-full antialiased">
        <body className="min-h-full flex flex-col">
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}