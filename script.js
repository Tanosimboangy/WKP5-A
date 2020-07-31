console.log('HELLO');

const recipes = [
	{
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168482053,
	},
	{
		title: 'Ravitoto',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Jacquit',
		difficulty: 'medium',
		timing: '45',
		ingredients: ['oil', 'salt', 'water', 'ravitoto'],
		steps: [
			'Put a pan on the fire',
			'Put the ravitoto in the pot',
			'Wait until it is cooked',
			'Add some salt on it',
		],
		id: 1596168522409,
	},
	{
		title: 'My recipe',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168522409,
	},
];

const newContainer = document.querySelector(".container");
const renderCard = (event) => {
	console.log(event);
	// check the recipes collection
	recipes.forEach(recipe => {
		// generate the HTML
		const myHTML = `
			<div class="new_container">
				<h1>"Hello! this is my recipe card"</h1>
				<h2>${recipe.title}</h2>
				<img src="${recipe.picture}">
				<ul class="ul_container">
					<li><p>${recipe.difficulty}</p></li>
					<li><p>${recipe.timing}</p></li>
				</ul>
				<button class="more_info">More info</button>
			</div>
		`;
		// put it in the DOM
		document.body.innerHTML += (myHTML);
	}); 
};

const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);
