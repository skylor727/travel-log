//Used to send API requests
import sendRequest from "./send-request";
const BASE_URL = "/api/trips";

export function createTrip(tripData) {
  return sendRequest(`${BASE_URL}/new`, "POST", tripData);
}

export function getTrips() {
  return sendRequest(`${BASE_URL}`);
}

export function getTrip(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function handleDelete(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}
