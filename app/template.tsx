"use client";

import ClientProvider from "@/data/client-provider";

export default function Template({ children }: { children: React.ReactNode }) {
  return <ClientProvider>{children}</ClientProvider>;
}
