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
		id: 2544,
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
		id: 1129,
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
		id: 3089,
	},
	{
		title: 'My new recipe',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'francois',
		difficulty: 'difficult',
		timing: '20',
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
					<li><p>${recipe.difficulty}</p></li>
					<li><p>${recipe.timing}</p></li>
				</ul>
				<button class="more_info">More info</button>
			</div>
		`;
		// put it in the DOM
		newContainer.insertAdjacentHTML('beforebegin', myHTML);
		// document.body.innerHTML += (myHTML);
	}); 
};

const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);

const infoButton = document.querySelector('.more_info');

const realRecipe = (event) => {
	console.log(event)
	if(e.target.matches("button.more_info")) {

	}	
}
infoButton.addEventListener('click', realRecipe);


// const parent = e.target.closest(".new_container");
// const id = Number(parent.dataset.id);
// const recipe = recipes.find(singleRecipe => singleRecipe.id === id);
// openModal(recipe);

