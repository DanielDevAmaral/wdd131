const year = document.querySelector("#currentyear");
const lastMod = document.querySelector("#lastModified");
let oLastModif = new Date(document.lastModified);
const today = new Date();
lastMod.innerHTML =`${oLastModif}`
year.innerHTML = `&copy${today.getFullYear()}`;
