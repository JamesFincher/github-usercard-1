import axios from "axios"; /*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const me = function () {
	axios.get(`https://api.github.com/users/JamesFincher`).then((resp) => {
		console.log(resp.data);
	});
};
// me()
// console.log(me())
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/
function makeMe() {
	axios
		.get("https://api.github.com/users/JamesFincher")
		.then((resp) => {
			const myCard = cardMaker(resp.data);
			console.log(myCard);
			const applyToMe = document.querySelector(".cards");
			// console.log(applyToMe)
			applyToMe.appendChild(myCard);
		})

		.catch((err) => {
			console.log(err);
		});
}
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

// makeMe();

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
	"https://api.github.com/users/JamesFincher",
	"https://api.github.com/users/bigknell",
	"https://api.github.com/users/tetondan",
	"https://api.github.com/users/dustinmyers",
	"https://api.github.com/users/justsml",
	"https://api.github.com/users/luishrd",
	"https://api.github.com/users/bigknell",
];

function makeAll(array) {
	array.forEach((item) => {
		console.log(item);
		axios
			.get(item)
			.then((resp) => {
				const myCard = cardMaker(resp.data);
				console.log(myCard);
				const applyToMe = document.querySelector(".cards");
				// console.log(applyToMe)
				applyToMe.appendChild(myCard);
			})

			.catch((err) => {
				console.log(err);
			});
	});
}
makeAll(followersArray);
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const cardMaker = function makeCard(object) {
	const card = document.createElement("div");
	card.classList.add("card");

	const image = document.createElement("img");
	card.appendChild(image);
	image.src = object.avatar_url;

	const cardInfo = document.createElement("div");
	cardInfo.classList.add("card-info");
	card.appendChild(cardInfo);

	const h3 = document.createElement("h3");
	h3.classList.add("name");
	cardInfo.appendChild(h3);
	h3.textContent = `${object.name}`;

	const cardUserName = document.createElement("p");
	cardUserName.classList.add("username");
	cardInfo.appendChild(cardUserName);
	cardUserName.textContent = object.login;

	const cardLocation = document.createElement("p");
	cardInfo.appendChild(cardLocation);
	cardLocation.textContent = `Location: ${object.location}`;

	const cardProfile = document.createElement("p");
	cardInfo.appendChild(cardProfile);

	const cardLink = document.createElement("a");
	cardProfile.appendChild(cardLink);
	cardLink.href = object.link_url;

	const cardFollowers = document.createElement("p");
	cardInfo.appendChild(cardFollowers);
	cardFollowers.textContent = `Followers: ${object.followers}`;

	const cardFollowing = document.createElement("p");
	cardInfo.appendChild(cardFollowing);
	cardFollowing.textContent = `Following: ${object.following}`;

	const cardBio = document.createElement("p");
	cardInfo.appendChild(cardBio);
	cardBio.textContent = object.bio;

	return card;
};

const noLambda = document.querySelector("img");
noLambda.src =
	"https://cdn.theorg.com/c679e681-b714-40b9-86f3-bb6af691fac6_medium.png";
/*
  List of LS Instructors Github username's:
    https://api.github.com/users/tetondan
    https://api.github.com/users/dustinmyers
    https://api.github.com/users/justsml
    https://api.github.com/users/luishrd
    https://api.github.com/users/bigknell
*/
