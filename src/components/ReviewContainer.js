import React from 'react'
import Review from './Review'
import ReviewForm from './ReviewForm'
import './ReviewContainer.css'

const ReviewContainer = props => {

  const getReviews = props.reviews.map(review => <Review {...review} key={review.id} deleteReview={props.deleteReview}/>)

  return(
    <div className="review-container">
      <h1 className="review-top">What the pets think...</h1>
        {getReviews}
      <ReviewForm handleNewReview={props.handleNewReview}/>
    </div>
  )


}

export default ReviewContainer
