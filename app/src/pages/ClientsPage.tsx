import { Clients } from '@/sections/Clients';
import { PageBanner } from '@/components/PageBanner';

export default function ClientsPage() {
  return (
    <main className="bg-white text-electric-black">
      <PageBanner
        eyebrow="Clients"
        title="Trusted by Infrastructure Teams"
        description="A snapshot of the companies and public-sector organisations that have partnered with Phoenix Electricals."
        image="/div-workforce.jpg"
      />
      <Clients />
    </main>
  );
}