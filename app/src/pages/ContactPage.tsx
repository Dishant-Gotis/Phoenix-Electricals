import { Contact } from '@/sections/Contact';
import { PageBanner } from '@/components/PageBanner';

export default function ContactPage() {
  return (
    <main className="bg-white text-electric-black">
      <PageBanner
        eyebrow="Contact Us"
        title="Reach the Team"
        description="Use the contact page to get in touch with the Phoenix Electricals team for project discussions, quotations, and support."
        image="/hero-bg.jpg"
      />
      <Contact />
    </main>
  );
}