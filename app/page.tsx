import ClassCards from "@/components/landing-page/class-cards";
import DiscordLinks from "@/components/landing-page/discord-links";
import Intro from "@/components/landing-page/intro";

export default async function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6 ">
      <div className="flex flex-col items-center justify-between space-y-16 max-w-4xl">
        <Intro />
        <ClassCards />
        <DiscordLinks />
      </div>
    </main>
  );
}
