import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import LiveOrchestration from "@/components/landing/LiveOrchestration";
import Workflow from "@/components/landing/Workflow";
import Vision from "@/components/landing/Vision";
import Pricing from "@/components/landing/Pricing";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import WhyAtlas from "@/components/landing/WhyAtlas";
import AITeam from "@/components/landing/AITeam";
import Demo from "@/components/landing/Demo";
import MissionControl from "@/components/dashboard/MissionControl/MissionControl";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <LiveOrchestration />
      <Workflow />
      <WhyAtlas />
      <AITeam />
      <Demo />
      <MissionControl />
      <Vision />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}