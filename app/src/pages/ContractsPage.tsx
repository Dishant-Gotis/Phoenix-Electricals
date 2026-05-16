import { Services } from '@/sections/Services';
import { PageBanner } from '@/components/PageBanner';

export default function ContractsPage() {
  return (
    <main className="bg-white text-electric-black">
      <PageBanner
        eyebrow="Contracts"
        title="Electrical Contracts"
        description="Turnkey substations, transmission lines, underground cables, commissioning, and maintenance contracts delivered with disciplined execution."
        image="/service-substation.jpg"
      />
      <Services />
    </main>
  );
}