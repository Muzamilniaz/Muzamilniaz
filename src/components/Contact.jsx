import { HiArrowUpRight, HiOutlineEnvelope, HiOutlineGlobeAlt } from "react-icons/hi2";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import GlobalAvailability from "./GlobalAvailability";

const channels = [
  { label: "Email", text: "muzamilniaz.pro@gmail.com", href: "mailto:muzamilniaz.pro@gmail.com", icon: HiOutlineEnvelope },
  { label: "WhatsApp", text: "+92 316 6844292", href: "https://wa.me/923166844292", icon: SiWhatsapp },
  { label: "LinkedIn", text: "Let's connect", href: "https://www.linkedin.com/in/muzamil-niaz-68b9991a3/", icon: SiLinkedin },
];

const Contact = () => (
  <div className='contact-editorial'>
    <div className='editorial-rule mb-9'><span>06 / GET IN TOUCH</span><span>LET'S MAKE IT HAPPEN</span></div>
    <SectionHeading eyebrow='Have a project in mind?' title="Your next big thing starts here" description='A new product, a complex challenge, or a team that needs an extra pair of hands. I would love to hear about it.' />
    <div className='contact-layout mt-9 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]'>
      <Reveal className='portfolio-panel relative isolate min-w-0 overflow-hidden p-6 sm:p-8'>
        <div aria-hidden='true' className='contact-orbit' />
        <div className='relative'>
          <span className='inline-flex items-center gap-2 rounded-full border border-[#915EFF]/25 bg-[#915EFF]/10 px-3 py-2 text-xs text-[#d2bfff]'><span className='h-1.5 w-1.5 rounded-full bg-emerald-400' aria-hidden='true' />Available for full-time & contract roles</span>
          <h3 className='mt-7 text-2xl font-semibold leading-snug text-white sm:text-3xl'>Good work starts with<br />a conversation.</h3>
          <p className='mt-4 max-w-sm text-sm leading-7 text-secondary'>Based in Pakistan. Working with teams worldwide. Share your idea, goals, and where you need support.</p>
          <div className='mt-8 space-y-3'>
            {channels.map(({ label, text, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith("https") ? "_blank" : undefined} rel={href.startsWith("https") ? "noopener noreferrer" : undefined} className='group flex min-w-0 items-center gap-3 rounded-xl border border-[#915EFF]/20 bg-primary/50 p-4 transition-colors hover:border-[#915EFF]/50 hover:bg-[#915EFF]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b59aff]'><span className='portfolio-icon shrink-0'><Icon aria-hidden='true' /></span><span className='min-w-0 flex-1'><span className='block text-[10px] uppercase tracking-[0.14em] text-secondary'>{label}</span><span className='mt-1 block break-words text-xs font-medium text-white sm:text-sm'>{label === "Email" ? <>muzamilniaz.pro<wbr />@gmail.com</> : text}</span></span><HiArrowUpRight aria-hidden='true' className='shrink-0 text-secondary group-hover:text-white' /></a>)}
          </div>
          <p className='mt-7 flex items-center gap-2 text-xs text-secondary'><HiOutlineGlobeAlt aria-hidden='true' />Multan, Pakistan<span className='text-[#915EFF]'>/</span>UTC+5</p>
        </div>
      </Reveal>
      <Reveal delay={0.06} className='contact-globe-panel'><GlobalAvailability /></Reveal>
    </div>
  </div>
);

export default SectionWrapper(Contact, "contact");
