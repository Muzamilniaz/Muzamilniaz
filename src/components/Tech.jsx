import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-8 sm:gap-10'>
      {technologies.map((technology) => (
        <div
          className='group flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-tertiary/70 p-4 shadow-card transition duration-300 hover:-translate-y-2 hover:border-[#915EFF]/60'
          key={technology.name}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className='h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110'
            loading='lazy'
          />
          <span className='max-w-full truncate text-center text-[11px] font-medium text-white-100'>
            {technology.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
