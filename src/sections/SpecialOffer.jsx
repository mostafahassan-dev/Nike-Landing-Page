import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import { Button } from "../components"

function SpecialOffer() {
  return (
    <section className="w-full flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">

        <img src={offer} alt="shoe" 
        width={773}
        height={687}
        className='object-contain w-full'
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold"> <span className="text-coral-red">Special</span> Offer</h2>
        <p className="mt-4 info-text"> 
        Embark on a shopping journey that redefines your experience with unbeatable deals. 
        From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. 
        Your journey with us is nothing short of exceptional.
        </p>
        <div className="flex flex-wrap mt-11 gap-4">
          <Button label='Shop Now' iconURL={arrowRight}/>
          <Button label='Learn More'/>
        </div>
      </div>
    
    </section>
  )
}

export default SpecialOffer