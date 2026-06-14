import { motion } from "framer-motion";

import { bannerMuzamil } from "../assets";

const ProfileBanner = () => {
  return (
    <section className='relative w-full overflow-hidden bg-primary px-4 py-10 sm:px-8 sm:py-16'>
      <motion.div
        className='relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl border border-[#915EFF]/25 bg-black-100/70 shadow-2xl shadow-black/40 sm:rounded-3xl'
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <img
          src={bannerMuzamil}
          alt='Muzamil Niaz software engineer banner'
          className='aspect-[3/1] h-auto w-full object-cover object-center'
          loading='lazy'
          decoding='async'
        />
        <div className='pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10' />
      </motion.div>
    </section>
  );
};

export default ProfileBanner;
