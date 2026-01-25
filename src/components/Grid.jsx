import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "../constants/data";

const Grid = () => {
  return (
    <section className="w-full py-20" id="intro">
      <div className="max-w-7xl mx-auto">
        <BentoGrid>
          {gridItems.map((item, i) => (
            <BentoGridItem
              key={i}
              {...item}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;
