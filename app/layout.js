import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "SUPRSLIM | Slim Koken & Gezond Leven",
  description: "AI-gedreven weekmenu's en slimme boodschappenlijsten.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
