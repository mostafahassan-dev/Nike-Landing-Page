
function ServiceCard({label, subtext, imgURL}) {
  
  return (
    <div className="flex-1 w-full sm:w-[350px] rounded-[20px] shadow-3xl px-10 py-16">
      <div className="rounded-full bg-coral-red w-11 h-11 flex justify-center items-center">
        <img src={imgURL} width={24} height={24} alt={label} />
      </div>

      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
        {label}
      </h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
        {subtext}
      </p>
      
    </div>
  )
}

export default ServiceCard