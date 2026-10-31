import { lazy, Suspense, useRef } from "react";
import { useInView } from "framer-motion";
const EarthCanvas = lazy(() => import('./canvas/Earth'));
const GlobalAvailability = () => {
  const ref = useRef(null);
  const loaded = useInView(ref,{once:true,margin:'160px'});
  const visible = useInView(ref,{amount:0.1});
  return <div className='contact-global contact-global-feature'><div className='contact-globe-heading'><span className='section-eyebrow'><span aria-hidden='true' />Connected by code</span><span className='contact-globe-coordinate'>PAKISTAN / UTC+5</span></div><div ref={ref} className='contact-earth'><div className='globe-orbit globe-orbit--one' aria-hidden='true' /><div className='globe-orbit globe-orbit--two' aria-hidden='true' />{loaded && <Suspense fallback={<div className='earth-static' aria-hidden='true'><i /><i /></div>}><EarthCanvas visible={visible} /></Suspense>}</div><div className='contact-global-caption'><p>From Multan.<br /><span>To the world.</span></p><span className='contact-global-status'><i aria-hidden='true' />Open to remote opportunities</span></div></div>;
};
export default GlobalAvailability;
