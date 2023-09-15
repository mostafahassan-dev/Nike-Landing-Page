import { ReviewCard } from "../components"
import { reviews } from "../constants/constants"

function CustomerReview() {
  return (
    <section className="flex justify-center items-center flex-col">
      <h3 className="font-palanquin capitalize text-4xl font-bold">What Our <span className="text-coral-red">Customers</span> Say?</h3>
      <p className="mt-4 m-auto info-text max-w-lg text-center">
      Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-28">
        {
          reviews.map((review)=>(
            <ReviewCard key={review.customerName} {...review}/>
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReview