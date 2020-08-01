const recipes = [
	{
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15 mn',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 2544,
	},
	{
		title: 'Ravitoto',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Jacquit',
		difficulty: 'medium',
		timing: '45 mn',
		ingredients: ['oil', 'salt', 'water', 'ravitoto'],
		steps: [
			'Put a pan on the fire',
			'Put the ravitoto in the pot',
			'Wait until it is cooked',
			'Add some salt on it',
		],
		id: 1129,
	},
	{
		title: 'My recipe',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15 mn',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 3089,
	},
	{
		title: 'My new recipe',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'francois',
		difficulty: 'difficult',
		timing: '20 mn',
		ingredients: ['leaves', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 5003,
	},
];

const newContainer = document.querySelector(".container");
const renderCard = (event) => {
	console.log(event);
	// check the recipes collection
	recipes.forEach(recipe => {
		// generate the HTML
		const myHTML = `
			<div class="new_container" data-id="${recipe.id}">
				<h1>"Hello! this is my recipe card"</h1>
				<h2>${recipe.title}</h2>
				<img src="${recipe.picture}">
				<ul class="ul_container">
					<li><p>Difficulty: ${recipe.difficulty}</p></li>
					<li><p>Time: ${recipe.timing}</p></li>
				</ul>
				<button class="more_info">More info</button>
			</div>
		`;
		// put it in the DOM
		newContainer.insertAdjacentHTML('beforebegin', myHTML);
	}); 
};
const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);


// Grab the open modal container from the HTML
const openModal = document.getElementsByClassName('open_modal');
// Create a funciton for the new modal
// Grab the info button
// Grab those values into those new html elements
const realRecipe = e => {
	if (e.target.matches('button.more_info')) {
		const parent = e.target.closest('div.modal_container');
		const id = Number("parent.dataset.id");
		const recipe = recipes.find(recipe => recipe.id === id);
		recipes.forEach(recipe => {
			const newModalHTML = `
				<div class="modal_container" data-id="${recipe.id}">
					<h1>"Hello! this is my modal"</h1>
					<h2>${recipe.title}</h2>
					<p>${recipe.author}</p>
					<img src="${recipe.picture}">
					<ul class="ul_container">
						<li><p>Difficulty: ${recipe.difficulty}</p></li>
						<li><p>Time: ${recipe.timing}</p></li>
					</ul>
					<ul>
						<li>ingredients: ${recipe.ingredients}</li>
						<li>steps: ${recipe.steps}</li>
					</ul>
				</div>
			`;
			// openModal(recipe);
			openModal.insertAdjacentHTML('beforebegin', newModalHTML);
		});
	}
};
window.addEventListener('click', realRecipe);

