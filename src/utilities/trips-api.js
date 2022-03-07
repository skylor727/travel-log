//Used to send API requests
const BASE_URL = "/api/trips";

export const createTrip = (tripData) => {
  return sendRequest(`${BASE_URL}/new`, "POST", tripData);
};
