import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ppneuemontrealBlod = localFont({
  src: "./ppneuemontreal-bold.otf",
});
const ppneuemontrealMedium = localFont({
  src: "./ppneuemontreal-medium.otf",
});
const ppneuemontrealNormal = localFont({
  src: "./ppneuemontreal-book.otf",
});
const ppneuemontrealNormalItalic = localFont({
  src: "./ppneuemontreal-italic.otf",
});
const ppneuemontrealSemiboldItalic = localFont({
  src: "./ppneuemontreal-semibolditalic.otf",
});
const ppneuemontrealThin = localFont({
  src: "./ppneuemontreal-thin.otf",
});

const impact = localFont({
  src: "./impact.ttf",
});

const fonts = {
  impact,
  ppneuemontreal: {
    bold: ppneuemontrealBlod,
    medium: ppneuemontrealMedium,
    normal: ppneuemontrealNormal,
    normalItalic: ppneuemontrealNormalItalic,
    semiboldItalic: ppneuemontrealSemiboldItalic,
    thin: ppneuemontrealThin,
  },
};

export default fonts;
