const recipes = [
	{
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'jacquit',
		difficulty: 'easy',
		timing: '15mn',
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
		picture: 'https://bit.ly/3fm5BLL',
		author: 'Rakoto',
		difficulty: 'medium',
		timing: '45mn',
		ingredients: ['oil', 'salt', 'water', 'ravitoto'],
		steps: [
			'Put a pot on the fire',
			'Put the ravitoto in the pot',
			'Wait until it is cooked',
			'Add some salt on it',
			'Add some sauce',
		],
		id: 1129,
	},
	{
		title: 'Egg plant',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Velo',
		difficulty: 'medium',
		timing: '40mn',
		ingredients: ['egg plants', 'salt', 'oil', 'tomatoes', 'water'],
		steps: [
			'Peel the egg plants',
			'Chop them and slice them thin as possible as you can',
			'Add sauce',
			'Add some salt on it',
		],
		id: 3089,
	},
	{
		title: 'Pasta',
		picture: 'https://bit.ly/3fm5BLL',
		author: 'francois',
		difficulty: 'difficult',
		timing: '1h 30mn',
		ingredients: ['leaves', 'salt', 'water'],
		steps: [
			'Put the pasta in a boiled water',
			'Prepare the sauce',
			'Take the pasta out of the hot water',
			'Mixed it with the sauce',
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
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner_modal');
// Add the "open" class to the open modal
const openModal = () => {
	outerModal.classList.add('open');
}
// Create a new function to remove the open class
const closeModal = event => {
	const outside = !event.target.closest('.inner-modal');
	if (outside) {
		outerModal.classList.remove('open');
	} 
};
const realRecipe = e => {
	if (e.target.matches('.more_info')) {
		const parent = e.target.closest('.new_container');
		const id = Number(parent.dataset.id);
		const recipe = recipes.find(recipe => recipe.id === id);
			innerModal.innerHTML = `
 				<div class="modal_container">
 					<h1>"Hello! this is my modal"</h1>
 					<h2>${recipe.title}</h2>
 					<p>${recipe.author}</p>
 					<img src="${recipe.picture}">
 					<ul class="ul_container">
 						<li><p><b>Difficulty:</b> ${recipe.difficulty}</p></li>
 						<li><p><b>Time:</b> ${recipe.timing}</p></li>
 					</ul>
 					<ul class="ul_container">
 						<li><p><b>Ingredients:</b> ${recipe.ingredients}</p></li>
 						<li><p><b>Steps:</b> ${recipe.steps}</p></li>
 					</ul>
 				</div>
			`;
		openModal(recipe); 
	 
	}
};
// Add eventListener in window and the outer modal div
window.addEventListener('click', realRecipe);
outerModal.addEventListener('click', closeModal);



const innerModal = document.querySelector('.inner-modal');
const addRecipeButton = document.querySelector('.add');
const outerModal = document.querySelector('.outer-modal');
// Create a funtion that contains the form element
const handleAddListBtn = (e) => {
    const myFormHtml = `
        <form>
            <p>Your name :</p>
            <input
                class="input-form"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name here"
                required
            />
            <p>Please select your dish :</p>
            <select name="dish" class="select-form" required>
                <option value="romazava">Romazava</option>
                <option value="koba">Koba</option>
                <option value="ravitoto">Ravitoto</option>
                <option value="mokary">Mokary</option>
                <option value="achard">Achard</option>
                <option value="masikita">Masikita</option>
                <option value="sambos">Sambos</option>
                <option value="mofo-baolina">Mofo baolina</option>
                <option value="ranonapango">Ranonapango</option>
            </select>
            <p>Please select the size of your plate :</p>
            <input type="radio" id="small" name="size" value="small" required />
            <label for="small">Small</label><br />
            <input type="radio" id="medium" name="size" value="medium" />
            <label for="medium">Medium</label><br />
            <input type="radio" id="large" name="size" value="large" />
            <label for="large">Large</label><br />
            <p>How many pieces do you want to order?</p>
            <input
                class="input-form"
                type="number"
                id="quantity"
                name="amount"
                placeholder="Enter a number here"
                required
            />
            <button class="submitOrder" type="submit">Add this order</button>
        </form>
    `;
    innerModal.innerHTML = myFormHtml;
    outerModal.classList.add('open');
}
addRecipeButton.addEventListener('click', handleAddListBtn);
const closeModal = () => {
    outerModal.classList.remove('open');
}
// Listen to the outside of the element to close the modal
outerModal.addEventListener('click', event => {
    const isOutside = !event.target.closest('.inner-modal')
    if (isOutside) {
        closeModal();
    }
});
// listen to the escape key to close the modal
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});




