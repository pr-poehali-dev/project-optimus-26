import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { ProblemSection } from "@/components/ProblemSection"
import { TimelineSection } from "@/components/TimelineSection"
import { ForWhomSection } from "@/components/ForWhomSection"
import { PlatformSection } from "@/components/PlatformSection"
import { CasesSection } from "@/components/CasesSection"
import { PricingSection } from "@/components/PricingSection"
import { FaqSection } from "@/components/FaqSection"
import { LeadSection } from "@/components/LeadSection"
import { FooterSection } from "@/components/FooterSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <ProblemSection />
      <TimelineSection />
      <ForWhomSection />
      <PlatformSection />
      <CasesSection />
      <PricingSection />
      <FaqSection />
      <LeadSection />
      <FooterSection />
    </main>
  )
}
