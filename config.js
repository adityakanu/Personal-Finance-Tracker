// Read the environment variables from the .env file
const apiKey = process.env.API_KEY;
const authDomain = process.env.AUTH_DOMAIN;
const projectId = process.env.PROJECT_ID;
const storageBucket = process.env.STORAGE_BUCKET;
const messagingSenderId = process.env.MESSAGING_SENDER_ID;
const appId = process.env.APP_ID;
const measurementId = process.env.MEASUREMENT_ID;

// Use the environment variables in your code
// For example, you can log them to the console
console.log(apiKey);
console.log(authDomain);
console.log(projectId);
console.log(storageBucket);
console.log(messagingSenderId);
console.log(appId);
console.log(measurementId);
