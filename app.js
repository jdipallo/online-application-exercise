// Requires \\
var express 	= require('express');
var bodyParser 	= require('body-parser');
var mongoose 	= require('mongoose');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// connect to mongo DB
mongoose.connect('mongodb://localhost/sweetmusic', function(error) {
	if (error) {
		console.log("ERROR: CONNECTING TO MONGODB", error);
	}
	else {
		console.log("SUCCESS: CONNECTING TO MONGODB");
	}
});

// create a mongoose schema for our applicants
var applicantSchema = mongoose.Schema({
	name: String,
	bio: String,
	skills: String,
	years: Number, 
	why: String
});

// lets make a model which will hold our collection of Applicants based on the schema
// remember, mongoDB will create a collection from applicant pluralizing it to applicants
var Applicant = mongoose.model('applicant', applicantSchema);

// Routes \\
app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.sendFile('html/applicants.html', {root : './public'});

});

app.get('/getApplicants', function(req, res) {
	Applicant.find({}, function(error, applicants) {
		if (error) {
			res.json({ status: 400, success: false, message: "ERROR: Finding Applicants from DB" })
		}
		else {
			res.json(applicants)
		}
	})
})

app.get('/success-submit-application', function(req,res) {
	res.sendFile('html/success-submit-application.html', {root : './public'})

})

// creates and applicant
app.post('/applicant', function(req, res){
	// Here is where you need to get the data
	// from the post body and store it in the database
	// console.log("req.body = ", req.body)
	// res.send('Success!');

	// store our applicant and their info in the mongoDB: sweetmusic
	var newApplicant = new Applicant(req.body);

	newApplicant.save(req.body, function(error, applicant) {
		if (error) {
			console.error("ERROR: SAVING APPLICANT TO DB");
		}
		else {
			console.log("SUCCESS: SAVING APPLICANT TO DB", applicant);
			// req.json(applicant);
			res.redirect('/success-submit-application')
		}
	})

});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})