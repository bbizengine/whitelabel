import Footer from "@/components/layout/navbar/Footer";
import TopNav from "@/components/layout/navbar/TopNav";
import NextTopLoader from "nextjs-toploader";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function Provider(props: IProps) {
  const { children } = props;
  return (
    <div>
      <NextTopLoader
        color="#7FC7D9"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        zIndex={100000}
        showSpinner={true}
        easing="ease"
      />
      <TopNav />
      {children}
      <Footer />
    </div>
  );
}
