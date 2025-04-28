import type { Metadata } from "next";
// Import Ubuntu and JetBrains_Mono from next/font/google
import { JetBrains_Mono, Ubuntu } from "next/font/google";
import "./globals.css";
import CustomHead from "@/components/common/CustomHead";
import RootLayoutWrapper from "@/components/layout/RootLayoutWrapper";
// Load Ubuntu font (handles variants like Sans)
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Include desired weights
  variable: "--font-ubuntu",
  display: "swap",
});

// Load JetBrains Mono
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Innervate Agency",
  description:
    "A modern marketing agency combining naturewave aesthetics with cutting-edge digital solutions.",
  keywords: [
    "marketing agency",
    "digital marketing",
    "web design",
    "branding",
    "Idaho",
  ],
  authors: [{ name: "Innervate Agency" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      // Apply font variables to the html tag
      className={`${ubuntu.variable} ${jetbrains.variable}`}
    >
        <CustomHead metadata={metadata}/>
      {/* Apply the sans font variable as the default body font */}

       <body className="font-sans">
        <RootLayoutWrapper ubuntu={ubuntu} jetbrains={jetbrains}>   
          {children}
        </RootLayoutWrapper>
      </body>
    </html>
  );
}
