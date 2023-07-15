import CardTailWindCSS from "./CardTailWindCSS";

const CardListTailWindCSS = () => {
  return (
    <div className="card-list h-auto max-w-[1269px] mx-auto my-0 flex flex-wrap gap-[30px]">
      <CardTailWindCSS />
      <CardTailWindCSS />
      <CardTailWindCSS />
      <CardTailWindCSS />
    </div>
  );
};

export default CardListTailWindCSS;
