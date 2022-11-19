import '../styles/globals.css';
import '../styles/notion.css';
import React from 'react';
import Header from '#/Components/Portfolio/Header';
import { PageSocial } from '#/Components/socials/PageSocial';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next.js App Directory Playground</title>
        <meta
          name="description"
          content="Next.js App Directory Playground"
          key="desc"
        />
      </head>
      <body className="notion notion-app notion-block-78fc5a4b88d74b0e824e29407e9f1ec1">
        <div className="notion-viewport"></div>
        <div className="flex h-screen w-screen flex-col justify-between">
          <Header />
          {children}
          <div className={` w-full mb-2 bottom-0 p-4 flex items-end justify-between flex-row  `}>
            <PageSocial/>
          </div>
        </div>
      </body>
    </html>
  );
}
