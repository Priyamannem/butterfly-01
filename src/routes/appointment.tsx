import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Contact } from "@/components/sections/Contact";
import { ReachUs } from "@/components/sections/ReachUs";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Sunny Sprouts Pediatric" },
      { name: "description", content: "Reserve a visit for your little one. Same-day appointments, gentle nurses, and a phone line that's always answered." },
      { property: "og:title", content: "Book a pediatric appointment" },
      { property: "og:description", content: "Same-day visits and 24/7 emergency care for children." },
    ],
  }),
  component: AppointmentPage,
});

function AppointmentPage() {
  return (
    <>
      <PageHeader eyebrow="Book a visit" title="See you (and your little one) soon." subtitle="Tell us a few details and our nurse coordinator will reach out to confirm a time that works for your family." />
      <Contact />
      <ReachUs />
    </>
  );
}