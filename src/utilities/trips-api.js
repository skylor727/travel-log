//Used to send API requests
const BASE_URL = "/api/trips";

export function createTrip(tripData) {
  return sendRequest(`${BASE_URL}/new`, "POST", tripData);
}

/*--- Helper Functions ---*/

export async function sendRequest(url, method = "GET", payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}
