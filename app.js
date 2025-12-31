const NASA_API_KEY = "ACpluxR905gV78LCf3SeoBcBZdjoIpRxUhENKyCt";
const BASE_URL = "https://api.nasa.gov/planetary/apod";

function buildApiUrl(date) {
    const url = new URL(BASE_URL);
    url.searchParams.append("api_key", NASA_API_KEY);
    if (date) {
        url.searchParams.append("date", date);
    }
    return url.toString();
}