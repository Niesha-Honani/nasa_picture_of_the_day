/* UI Logic for Explore NASA application */

/* Import NASA Service APIs */
import { 
    fetchAPODbyDate,
    fetchAstroidsByDate,
    fetchEarthEventsByDate
 } from "./nasaServiceApis.js";

/* DOM Elements */
const form = document.querySelector('#date-form');
const dateInput = document.querySelector('#date-selector');
/* Button Event Listeners */
const apodBtn = document.querySelector('#apodBtn');
const asteroidBtn = document.querySelector('#astroidBtn');
const earthBtn = document.querySelector('#earthBtn');
/* Display Elements */
const titleEL = document.querySelector('#picture-title');
const imgEL = document.querySelector('#picture-img');
const descriptEL = document.querySelector('#picture-description');

/* Helpers */
function getSelectedDate(){
    return dateInput.value || null;
}

function setButtonState(enabled){
    apodBtn.disabled = !enabled;
    asteroidBtn.disabled = !enabled;
    earthBtn.disabled = !enabled;   
}
initialButtonState = false;

dateInput.addEventListener("input", () => {
    setButtonState(!!getSelectedDate());
});

/* Renderers */

