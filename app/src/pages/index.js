import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Mayor Whiskers</title>
        <meta name="description" content="Mayor Whiskers ERC20 Token" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Verification Banner */}
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "#000",    // Black background for high contrast
          color: "#fff",              // White text for readability
          textAlign: "center",
          padding: "10px",
          zIndex: 9999,               // Ensure it stays on top of other elements
          fontFamily: "sans-serif",
          fontSize: "14px",
        }}
      >
        <p style={{ margin: 0 }}>
          You are currently on <strong>mayorwhiskers.com</strong> — Always verify the domain!
        </p>
      </div>

      {/* Adjust the main content to account for the fixed banner height */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          marginTop: "50px", // Add spacing to avoid content being hidden behind the banner
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <Image src="/mayor.png" alt="Mayor Whiskers" width={400} height={400} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1>Mayor Whiskers</h1>
              <h4>I'm a stray cat</h4>
            </div>

            {/* Social Links */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <Link href="https://etherscan.io/token/0x6BE05eA23a6fe5bDDB1B249A2e484Fef0Aa40bC5">
                <Image src="/etherscan.svg" alt="Etherscan" width={40} height={40} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}