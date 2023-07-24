
// scrollAnimation.js

const observerOptions = {
	root: null, // Use the viewport as the root
	rootMargin: '0px', // No root margin
	threshold: 0.2, // Triggers the animation when 20% of the element is visible
};

const handleIntersect = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
			observer.unobserve(entry.target); // Remove the observer after the animation is triggered
		}
	});
};

const observer = new IntersectionObserver(handleIntersect, observerOptions);

// Observe all elements with the class 'hidden'
document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
