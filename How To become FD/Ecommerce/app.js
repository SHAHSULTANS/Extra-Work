// Zoom functionality for main product image
const mainImage = document.getElementById('mainImage');
const thumbnailImages = document.querySelectorAll('.thumbnail-images img');

thumbnailImages.forEach((thumbnail) => {
    thumbnail.addEventListener('click', function () {
        mainImage.src = this.src;
    });
});

// Review functionality
const reviewForm = document.getElementById('reviewForm');
const reviewsList = document.getElementById('reviewsList');

// Pre-existing reviews (can be loaded dynamically in the future)
const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

function displayReviews() {
    reviewsList.innerHTML = '';
    reviews.forEach((review) => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.innerHTML = `<strong>${review.name}</strong><p>${review.text}</p>`;
        reviewsList.appendChild(reviewDiv);
    });
}

displayReviews();

reviewForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const reviewerName = document.getElementById('reviewerName').value;
    const reviewText = document.getElementById('reviewText').value;

    const newReview = {
        name: reviewerName,
        text: reviewText
    };

    reviews.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    displayReviews();
    reviewForm.reset();
});
