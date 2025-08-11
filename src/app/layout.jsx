import "./globals.css";
export const metadata = {
  title: "Emma Thonfors Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
