import { star } from "../assets/icons"
function PopularProductCard({ imgURL, name, price }) {
  return (
    <div className="flex flex-1 flex-col">
      <img src={imgURL} alt= {name}
        className="w-[280px] h-[280px]"
      />

      <div className="flex justify-start mt-8 gap-2.5">
        <img src={star} alt="star"
          width={24} height={24}
        /> 
        <p className="font-montserrat text-slate-gray text-xl leading-normal">(4.5) </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold">{name}</h3>
      <p className="text-coral-red font-montserrat font-semibold mt-2 leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard