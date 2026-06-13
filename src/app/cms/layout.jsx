import { Inter } from "next/font/google";
import "./cms.css";

const cmsInter = Inter({
  variable: "--font-cms-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Austelix CMS",
  description: "Content management studio",
};

export default function CmsLayout({ children }) {
  return (
    <div className={`austelix-cms ${cmsInter.variable} min-h-screen`}>
      {children}
    </div>
  );
}
