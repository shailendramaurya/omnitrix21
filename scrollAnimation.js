const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if(entry.isIntersecting)
			entry.target.classList.add('show');
	})
})

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));