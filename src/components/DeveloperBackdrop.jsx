const codeFragments = [
  { text: '{ build: "with purpose" }', top: '4%', side: 'left' },
  { text: 'const idea = await build();', top: '18%', side: 'right' },
  { text: '<Component />', top: '35%', side: 'left' },
  { text: 'git commit -m "ship it"', top: '53%', side: 'right' },
  { text: 'export default possibility;', top: '72%', side: 'left' },
  { text: '{ design, develop, deliver }', top: '90%', side: 'right' },
];

const DeveloperBackdrop = () => (
  <div className='developer-backdrop' aria-hidden='true'>
    <div className='developer-grid' />
    <div className='developer-aura developer-aura--one' />
    <div className='developer-aura developer-aura--two' />
    <svg className='developer-network developer-network--left' width='280' height='700' viewBox='0 0 280 700' fill='none'>
      <path d='M12 20H110V150H210V290H72V440H175V610H260' stroke='currentColor' strokeWidth='1' />
      <path d='M0 240H65V340H240M10 540H90V650H200' stroke='currentColor' strokeWidth='1' strokeDasharray='3 8' />
      {[[110,150],[210,290],[72,440],[175,610],[65,340],[90,650]].map(([x,y],i) => <g key={i}><circle className='network-node' style={{animationDelay:`${i * .6}s`}} cx={x} cy={y} r='4' fill='currentColor' /><circle cx={x} cy={y} r='10' stroke='currentColor' opacity='.4' /></g>)}
    </svg>
    <svg className='developer-network developer-network--right' width='260' height='650' viewBox='0 0 260 650' fill='none'>
      <path d='M260 30H160V170H50V340H195V480H90V620H240' stroke='currentColor' strokeWidth='1' />
      <path d='M250 250H120V410H15M230 550H170V650' stroke='currentColor' strokeWidth='1' strokeDasharray='3 8' />
      {[[160,170],[50,340],[195,480],[90,620]].map(([x,y],i) => <g key={i}><circle className='network-node' style={{animationDelay:`${i * .8}s`}} cx={x} cy={y} r='4' fill='currentColor' /><circle cx={x} cy={y} r='11' stroke='currentColor' opacity='.4' /></g>)}
    </svg>
    {codeFragments.map(({text,top,side},index) => <span key={text} className={`background-code background-code--${side}`} style={{top,animationDelay:`${index * -1.5}s`}}>{text}</span>)}
  </div>
);

export default DeveloperBackdrop;
