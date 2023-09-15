
function ShoeCard({shoeURL,changeBigShoeImg,bigShoeImg}) {
  
  const handleCick = ()=>{
    if(bigShoeImg !== shoeURL.bigShoe){
      changeBigShoeImg(shoeURL.bigShoe)
    }
  }
  return (
    <div className={`border-2 rounded-xl cursor-pointer max-sm:flex-1
      ${bigShoeImg == shoeURL.bigShoe
        ? 'border-coral-red'
        : 'border-transparent'}

    `}
     onClick={handleCick}
    >


      <div className="flex justify-center items-center bg-card bg-cover bg-center rounded-xl sm:w-40 sm:h-40 max-sm:p-4" >
        <img src={shoeURL.thumbnail} alt="Shoe" />
      </div>
    </div>
  )
}

export default ShoeCard