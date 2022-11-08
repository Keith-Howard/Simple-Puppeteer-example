# Simple example of Puppeteer

A simple React app using a form and generated Faker data to create 
new users. Puppeteer was used to run a test on the create route 
mimicking a user’s UI interaction and then taking a screen shot of 
the UI for a manual check.

# Installation

To run this program Make sure you have Node.JS computer. Download 
the files from the repository. In order to run this you need to 
have a local web server. How to install local, In VS Code open 
project folder where all files have been unzipped In Terminal 
window execute npm install in the client directory and in the 
server directory. Execute node index.js in the server directory and 
in another terminal run npm start in the client directory.

# To run puppeteer 

Step 1 - Launch Puppeteer and assign response to the browser variable

Step 2 - Using the browser variable, create a new page and assign the response to the page variable

Step 3 - Using the page variable goto the correct URL that the React app is running on

Step 4 - Using the page variable, use the click method by passing the ".create-user" class name

Step 5 - Using the page variable, use the screenshot method to generate a screenshot of the React app with the newly created user

// make sure to run the client first then the server so that there is something running on the port that puppeteer is listening on
