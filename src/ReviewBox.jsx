import React, { useState, useEffect, useRef } from 'react';

function ReviewForm({ onSubmitReview }) {
  const [reviewText, setReviewText] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    const formElement = formRef.current;
    if (!formElement) return;

    // Intercept events during the capture phase before react-pageflip sees them
    const blockFlip = (e) => {
      e.stopPropagation();
    };

    formElement.addEventListener('pointerdown', blockFlip, { capture: true });
    formElement.addEventListener('mousedown', blockFlip, { capture: true });
    formElement.addEventListener('touchstart', blockFlip, { capture: true });
    formElement.addEventListener('click', blockFlip, { capture: true });

    return () => {
      formElement.removeEventListener('pointerdown', blockFlip, { capture: true });
      formElement.removeEventListener('mousedown', blockFlip, { capture: true });
      formElement.removeEventListener('touchstart', blockFlip, { capture: true });
      formElement.removeEventListener('click', blockFlip, { capture: true });
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewText.trim()) return;
    if (onSubmitReview) onSubmitReview(reviewText);
    setReviewText('');
  };

  return (
    <div ref={formRef} className="review-form-container">
      <h3>Leave a Review</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review here..."
          rows={3}
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;