//const currentUser = 'Grace Hopper';// Write your code in this file!
//const welcomeMessage = 'Welcome to Flatbook,' + currentUser;
const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

//const shortGreeting = "Welcome, ";

//const shortGreeting = `Welcome, ${currentUser}`;
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;