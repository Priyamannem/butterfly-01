import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Doctor } from "@/components/sections/Doctor";
import { Reviews } from "@/components/sections/Reviews";
import { Blogs } from "@/components/sections/Blogs";
import { Contact } from "@/components/sections/Contact";
import { ReachUs } from "@/components/sections/ReachUs";
import { InstagramFeed } from "@/components/sections/InstagramFeed";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <Doctor />
      <Reviews />
      <InstagramFeed />
      <Blogs />
      <Contact />
      <ReachUs />
    </>
  );
}
