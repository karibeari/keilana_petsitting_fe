import React from 'react'
import Review from './Review'
import NewReviewButton from './NewReviewButton'
import './ReviewContainer.css'

const ReviewContainer = props => {

  const getReviews = props.reviews.map(review => <Review {...review} key={review.id} deleteReview={props.deleteReview} updateReview={props.updateReview}/>)

  return(
    <div className="review-container">
      <h1 className="review-header">What the pets think...</h1>
        {getReviews}
      <NewReviewButton handleNewReview={props.handleNewReview} />
    </div>
  )


}

export default ReviewContainer
