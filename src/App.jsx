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

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='hero-background bg-hero-pattern bg-cover bg-center bg-no-repeat'>
          <Hero />
        </div>
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
        <Footer />
        <PortfolioChat />
      </div>
    </BrowserRouter>
  );
}

export default App;
