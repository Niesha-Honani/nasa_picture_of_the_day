/* Service API Module for NASA Picture of the Day Application */

import { assert } from "console";

/* Service Layer to interact with NASA APOD API */
const NASA_API_KEY = "ACpluxR905gV78LCf3SeoBcBZdjoIpRxUhENKyCt";

function assertDate(dateStr) {
    if(!dateStr) throw new Error("Date string is required");
}

// build URL with query parameters
// The Object.entries() static method returns an 
// array of a given object's own enumerable string-keyed property key-value pairs.
function constructNasaApiUrl(base, params){
    const url = new URL(base);
    url.searchParams.append("api_key", NASA_API_KEY);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });
    return url.toString();
}
// Fetch NASA Endpoints
export async function fetchNasaEndpoints(base, params={}, errorLabel = "Request"){
    const url = constructNasaApiUrl(base, params);
    
    const response = fetch(url);
    if(!response.ok){
        throw new Error(`${errorLabel} failed: ${response.status}`);
    }
    return response.json();
}

export async function fetchAPODbyDate(dateStr){
   assertDate(dateStr);
   return fetchNasaEndpoints("https://api.nasa.gov/planetary/apod",
        {date: dateStr},
        "APOD");
}

export async function fetchAstroidsByDate(dateStr){
    return fetchNasaEndpoints("https://api.nasa.gov/neo/rest/v1/feed", 
        {start_date: dateStr, end_date: dateStr}, 
        "Astroids");
}

export async function fetchEarthEventsByDate(dateStr){
    assertDate(dateStr);
    return fetchNasaEndpoints("https://eonet.gsfc.nasa.gov/api/v3/events",
        {start_date: dateStr, end_date: dateStr}, 
        "Earth Events");
}
