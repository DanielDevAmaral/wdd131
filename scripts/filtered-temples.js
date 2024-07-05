const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');
const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Billings Montana Temple",
		location: "Billings, Montana",
		dedicated: "1999, November, 20",
		area: 33800,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/billings-montana/400x225/07-Billings-Montana-Temple-2220507.jpg"
	  },
	  {
		templeName: "Boise Idaho Temple",
		location: "Boise, Idaho",
		dedicated: "1984, May, 25",
		area: 35868,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/400x250/boise-idaho-temple-exterior-2012-1029114-wallpaper.jpg"
	  },
	  {
		templeName: "Bern Switzerland Temple",
		location: "Bern, Switzerland",
		dedicated: "1955, September , 11",
		area: 35546,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784288-wallpaper.jpg"
	  },
  ];

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

callTemples(temples);

function callTemples(filter) {
	document.querySelector(".temples-grid").innerHTML = "";
	filter.forEach(temple => {
		const card = document.createElement("section");
		const name = document.createElement("h2")
		const location = document.createElement("p");
		const dedicated = document.createElement("p");
		const area = document.createElement("p");
		const image = document.createElement("img");
	
		name.textContent = temple.templeName;
		location.innerHTML = `<span class='label'>Location:</span> ${temple.location} ` ;
		dedicated.innerHTML = `<span class='label'>Dedicated:</span> ${temple.dedicated} `;
		area.innerHTML = `<span class='label'>Area:</span> ${temple.area} `;
		image.setAttribute("src", temple.imageUrl);
		image.setAttribute("alt", `${temple.templeName}`);
		image.setAttribute("loading", "lazy");
	
		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);
		card.appendChild(image);
	
		document.querySelector('.temples-grid').appendChild(card);
	
	
	});
}

const old = document.querySelector(".old");
const newt = document.querySelector(".new");
const large = document.querySelector(".large");
const small = document.querySelector(".small");
const home = document.querySelector(".home");

old.addEventListener('click', () => {
	callTemples(temples.filter(temple => temple.dedicated.split(',')[0] < 1900));
})

newt.addEventListener('click', () => {
	callTemples(temples.filter(temple => temple.dedicated.split(',')[0] > 2000));
})

large.addEventListener('click', () => {
	callTemples(temples.filter(temple => temple.area > 90000));
})

small.addEventListener('click', () => {
	callTemples(temples.filter(temple => temple.area < 10000 ));
})
home.addEventListener('click', () => {
	callTemples(temples);
})



