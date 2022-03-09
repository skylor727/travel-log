//Used to send API requests
import sendRequest from "./send-request";
const BASE_URL = "/api/trips";

export function createTrip(tripData) {
  return sendRequest(`${BASE_URL}/new`, "POST", tripData);
}
