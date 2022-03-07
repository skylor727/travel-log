import * as usersAPI from "./users-api";

export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData);
  localStorage.setItem("token", token);
  return getUser();
}

export function logOut() {
  localStorage.removeItem("token");
}

export function getToken() {
  //Accessing local storage is synchronous code, not ASYNC.
  const token = localStorage.getItem("token");
  if (!token) return null; //Return null if no token exists
  const payload = JSON.parse(atob(token.split(".")[1]));
  // A JWT's expiration is expressed in seconds, not milliseconds
  if (payload.exp < Date.now() / 1000) {
    //Token has expired
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  localStorage.setItem("token", token);
  return getUser();
}

export async function checkToken() {
  return usersAPI.checkToken().then((dateStr) => new DataTransfer(dateStr));
}
