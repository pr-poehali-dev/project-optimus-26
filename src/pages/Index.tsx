import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { ForWhomSection } from "@/components/ForWhomSection"
import { TemplatesSection } from "@/components/TemplatesSection"
import { PricingSection } from "@/components/PricingSection"
import { ContactSection } from "@/components/ContactSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <ForWhomSection />
      <TemplatesSection />
      <PricingSection />
      <ContactSection />
      <footer className="py-8 text-center text-sm text-gray-400">
        От карты на 14 дней до метрик первых 30 дней —{" "}
        <span className="font-medium text-white">онбординг, который запускается без HR.</span>
      </footer>
    </main>
  )
}
