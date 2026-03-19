import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import HistoryOfTCCBC from "./pages/HistoryOfTCCBC";
import BoardStaff from "./pages/BoardStaff";
import FormerPresidents from "./pages/FormerPresidents";
import Yearbook from "./pages/Yearbook";
import LatestNews from "./pages/LatestNews";
import Newsletter from "./pages/Newsletter";
import UpcomingEvents from "./pages/UpcomingEvents";
import PhotoAlbum from "./pages/PhotoAlbum";
import SponsorshipOpportunities from "./pages/SponsorshipOpportunities";
import WhyJoinUs from "./pages/WhyJoinUs";
import MembershipLevels from "./pages/MembershipLevels";
import MembershipBenefits from "./pages/MembershipBenefits";
import JoinUs from "./pages/JoinUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/About-us__" element={<AboutUs />} />
            <Route path="/History-of-TCCBC" element={<HistoryOfTCCBC />} />
            <Route path="/Board-Staff" element={<BoardStaff />} />
            <Route path="/Former-Presidents" element={<FormerPresidents />} />
            <Route path="/Yearbook" element={<Yearbook />} />
            <Route path="/Latest-News" element={<LatestNews />} />
            <Route path="/Newsletter" element={<Newsletter />} />
            <Route path="/upcoming-events" element={<UpcomingEvents />} />
            <Route path="/Photo-Album" element={<PhotoAlbum />} />
            <Route path="/Sponsorship-Opportunities" element={<SponsorshipOpportunities />} />
            <Route path="/Why-Join-Us" element={<WhyJoinUs />} />
            <Route path="/Membership-Levels" element={<MembershipLevels />} />
            <Route path="/Membership-Benefits" element={<MembershipBenefits />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
