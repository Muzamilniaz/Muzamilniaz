import { BrowserRouter } from "react-router-dom";

import {
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  ProfileBanner,
  PortfolioChat,
} from "./components";
import Grid from "./components/Grid";
import SmoothScroll from "./components/SmoothScroll";
import DeveloperBackdrop from "./components/DeveloperBackdrop";
import MobileNavigation from "./components/MobileNavigation";

const App = () => {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <div className='relative z-0 bg-primary app-shell'>
        <Navbar />
        <div className='hero-background'>
          <Hero />
        </div>
        <main className='developer-content'>
        <DeveloperBackdrop />
        <Grid />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        {/* <ProfileBanner /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        </main>
        <Footer />
        <MobileNavigation />
        <PortfolioChat />
      </div>
    </BrowserRouter>
  );
}

export default App;
