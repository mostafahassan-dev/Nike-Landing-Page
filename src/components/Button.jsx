
function Button({label , iconURL}) {
  return (
    <button className={`${label ==='Learn More'
      ? 'bg-transparent text-slate-gray border-slate-gray'
      :'bg-coral-red text-white border-coral-red' } 
      rounded-full text-lg flex justify-center items-center px-7 py-4 text-lgfont-montserrat border leading-none `}>
      {label}

      {iconURL && 
        <img src={iconURL} alt="arrow" 
         className="ml-2 rounded-full w-5 h-5"

        />
      }
    </button>
  )
}

export default Button