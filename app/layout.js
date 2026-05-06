import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SUPRSLIM | Slim Koken & Gezond Leven",
  description: "AI-gedreven weekmenu's en slimme boodschappenlijsten.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className="h-full antialiased">
      <body className={`${outfit.className} min-h-full flex flex-col bg-slate-950 text-slate-100`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
