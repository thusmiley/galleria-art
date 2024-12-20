import Header from "@/components/Header";
import "./globals.css";
import { SlideshowProvider } from "@/context/useSlideshowProvider";

export const metadata = {
  title: {
    template: "%s | Galleria",
    default: "Galleria",
  },
  openGraph: {
    description: "Made by Thu Smiley @Naughty Cat",
    // url: "https://my-invoice-app.vercel.app/",
    siteName: "Galleria",
    images: [],
    locale: "en_US",
    type: "website",
  },
  keywords: ["Next.js", "React", "JavaScript", "Tailwind", "SASS"],
  authors: [{ name: "Thu Smiley @Naughty Cat", url: "https://thusmiley.com/" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg" href="/favicon.svg" />
        <meta property="og:image" content="/preview.jpg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SlideshowProvider>
          <Header />
          {children}
        </SlideshowProvider>
      </body>
    </html>
  );
}
