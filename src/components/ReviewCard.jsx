import { star } from "../assets/icons"

function ReviewCard({imgURL, customerName , rating , feedback}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={imgURL} alt={customerName} 
       className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className="mt-6 info-text max-w-sm text-center">{feedback}</p>
      
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} alt="star" width={24} height={24}/>
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <p className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</p>
    </div>
  )
}

export default ReviewCard