//Used to send API requests
import sendRequest from "./send-request";
const BASE_URL = "https://skylor-p.com/travel-api/trips";

//Send the data for a new trip to the backend
export function createTrip(tripData) {
  return sendRequest(`${BASE_URL}/new`, "POST", tripData);
}

//Fetch all trips from backend
export function getTrips() {
  return sendRequest(`${BASE_URL}`);
}

//Fetch a single trip from backend
export function getTrip(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

//Send request to backend to delete
export function handleDelete(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}

//Send request to backend to update
export function handleUpdate(tripData, id) {
  return sendRequest(`${BASE_URL}/${id}`, "POST", tripData);
}
