import { SessionProvider } from "@/lib/SessionContext";

export default function MissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
