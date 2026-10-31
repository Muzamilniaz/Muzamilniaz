const SectionHeading = ({ eyebrow, title, description, centered = false }) => (
  <div className={`section-heading ${centered ? "section-heading--centered" : ""}`}>
    <div className='min-w-0'>
      <p className='section-eyebrow'><span aria-hidden='true' />{eyebrow}</p>
      <h2 className='section-title'>{title}<span className='text-[#915EFF]'>.</span></h2>
    </div>
    {description && <p className='section-description'>{description}</p>}
  </div>
);

export default SectionHeading;
