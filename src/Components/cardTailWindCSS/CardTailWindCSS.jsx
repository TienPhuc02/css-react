const CardTailWindCSS = () => {
  return (
    <div className="w-[400px] h-[463px] relative">
      <div className="img-card w-[400px] h-[400px] rounded-[8px]">
        <img className="card-img w-full object-cover" src="/img21.png" alt="" />
      </div>
      <div className="card-content  w-[363px] h-auto bg-white p-5 rounded-[20px] absolute -translate-y-1/2 left-4">
        <div className="card-content-top flex justify-between mb-[30px]">
          <div className="content-author flex justify-center items-center">
            <img className="avatar object-cover mr-3" src="/img11.png" alt="" />
            <span className="name-author text-base font-light">@zndrson</span>
          </div>
          <div className="content-rating flex justify-center items-center">
            <img
              className="rating-heart h-[18px] w-[20px] mr-3"
              src="/img12.png "
              alt=""
            />
            <span className="number-rating font-normal text-base">256</span>
          </div>
        </div>
        <div className="card-content-bottom flex justify-between ">
          <span className="content-bottom-left font-medium text-lg">
            Cosmic Perspective
          </span>
          <div className="flex justify-center items-center">
            <span className="content-bottom-right font-bold text-lg bg-gradient-to-r from-[#7D6AFF] to-[#FFB86C,#FC2872] bg-clip-text text-transparent ">
              12,000 PSL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTailWindCSS;
