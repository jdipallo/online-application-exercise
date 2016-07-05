Online Job Application
=========

Objective
--------
You are the CTO of Omega 3 Studios. You need to hire some badass web developers, and you decide to create an online job application.

Skills
------

- Node.js
- Express.js
- MongoDB
- Angular
- $http
- $routeParams

Resources
-------
- <a href="http://docs.mongodb.org/manual/contents/">mongodb.org</a>
- <a href="http://docs.mongodb.org/manual/reference/method/js-collection/">Mongo Collection Commands</a>
- <a href="http://mongoosejs.com/">Mongoose</a>

Requirements
-----------

Part I: Submitting the Form
----------------

- Grab the <a href="https://github.com/RefactorU/exercise-starters/tree/master/week7/online-job-application/starter-code">starter code</a>.
- In the <code>/applicant</code> route handler console.log() the data in <code>req.body</code>. Confirm that the information that was entered in the form and submitted to the server is shown in the console before moving on to the next step.
- For testing purposes, send a response back to the client: <code>res.send('Success!');</code>.
- When you see the Success message, now you can create something a little more user-friendly. Create a new route and view for the success message. In the <code>/applicant</code> route handler, redirect the user to the new route you created. Confirm the new functionality by submitting another form. Make sure you are correctly redirected to your new Success page.

Part II: MongoDB
---------------

- Install Mongoose in your project <code>npm install mongoose --save</code>.
-Include Mongoose in your app.js on the server <code>var mongoose = require('mongoose');</code>.
- Call <code>.connect()</code> to connect to MongoDB. Give your DB a name and connect <code>mongoose.connect('mongodb://localhost/mycompanyname');</code>.
- Start Mongodb by running <code>sudo mongod</code> in a new Terminal tab.
- Based on the data received from the client in the <code>/applicant</code> endpoint, think about how you would structure the data in the database. Create a Mongoose model based on how the data should be structured. For example : <code>var Cat = mongoose.model('Cat', { name: String });</code>.
<strong>Note:</strong> Remember that Mongoose will not create the database or the collections until you attempt to insert something into the database. You should see this after completing #2 in Part III

Part III: Storing the data
--------------

- Now lets go back to the /applicant endpoint.
- Store the recieved data from req.body in your "applicants" model that you previously created. e.g. <code>var kitty = new Cat({ name: 'Zildjian' }); kitty.save()</code>. Use the example on the Mongoose homepage to guide you http://mongoosejs.com
- Go into your Mongo Shell and see if the data was successfully stored after the form is submitted. <code>db.applicants.find()</code>
- Run these commands in Mongo Shell to see your new DB and collection
    - <code>show dbs</code>
    - <code>use applications </code>
    - <code>show collections</code>

You have successfuly submitted a form and stored the data in a database!

Part IV: Listing the applicants
---------------------

- Now in the <code>/applicants</code> route, we'll want to pull out all of your applicants from your "applicants" collection. e.g. <code>Cat.find({}, ...)</code>
- Use <code>$http.get()</code> in the applicantController on the client-side to make a request to the server to get the data (you will need a new route for this).
- In the route handler for this new route, query the database for the applicants (<code>Cat.find()</code>...) and then use <code>res.send</code> to send the data back to the client.
- Once the data comes back to the client, the callback function passed to the <code>.then()</code> method chained to <code>$http.get()</code> is called. Use the response being passed back to render the applicants on the page

Bonus I: Deleting Applicants
----------
- Add a delete button to each of your applicant names in the applicants list <code>/applicants</code>.
- When the button is clicked, send a request to the server to delete the item from your Mongo Collection.

Bonus II: Application Viewer
----------------
- Create another HTML file to represent another view.
- Create a route that will send that file to the client. This route should look like <code>/:userid</code>
- In the Angular controller for this page, use <code>$http</code> and <code>$routeParams</code> to submit another request to the server for a specific applicant.
- That applicant's data should be retrieved from the database and sent to the client to be displayed to the user.
- In your list that displays your applicants. Make each name a link.
- When you click on this link it should go to a route that looks something like "/5266ec1d3939f24149000001"

<strong>Success!</strong> You have successfully built a data-driven web app!