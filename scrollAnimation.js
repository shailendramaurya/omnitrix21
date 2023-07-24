
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


fetch('database.json')
	.then(res => res.json())
	.then(database => {
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

		const fragment = document.createDocumentFragment();

		for (const data of database) {
			const article = document.createElement('article');
			article.className = 'hidden';

			const span = document.createElement('span');

			const version = document.createElement('p');
			version.textContent = data.Version;

			const date = document.createElement('p');
			date.textContent = data.Date;

			const changelogButton = document.createElement('button');
			changelogButton.textContent = 'Changelog';
			changelogButton.onclick = () => changelogUL.classList.toggle('hide');

			span.append(version, date, changelogButton);

			const changelogUL = document.createElement('ul');
			changelogUL.className = 'hide';
			for (const listItem of data.Changelog) {
				const changelogLI = document.createElement('li');
				changelogLI.textContent = listItem;
				changelogUL.appendChild(changelogLI);
			}

			const miui = document.createElement('a');
			miui.textContent = 'MIUI';
			miui.href = data.MIUI;

			const oss = document.createElement('a');
			oss.textContent = 'OSS';
			oss.href = data.OSS;

			const miuisu = document.createElement('a');
			miuisu.textContent = 'MIUI-KSU';
			miuisu.href = data.MIUI_KSU;

			const osssu = document.createElement('a');
			osssu.textContent = 'OSS-KSU';
			osssu.href = data.OSS_KSU;

			const linkSpan = document.createElement('span');
			linkSpan.append(miui, oss, miuisu, osssu);

			article.append(span, changelogUL, document.createElement('br'), linkSpan);
			fragment.appendChild(article);

			// Observe the article for scroll animation
			observer.observe(article);
		}

		document.getElementById('releases').appendChild(fragment);
	})
	.catch(err => console.error('Error fetching JSON data:', err));
