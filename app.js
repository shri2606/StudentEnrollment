
var express = require("express");
var app = express();
const router = express.Router();
var bodyParser = require('body-parser')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentdb', {useNewUrlParser: true, useUnifiedTopology: true});

studentSchema = mongoose.Schema({
	FirstName: String,
	LastName:String,
	Email: String,
	MobileNumber: Number
});
Student = mongoose.model("students", studentSchema);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
//app.use("/", router)
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });


app.get('/getStudent', function(req, res){
	mongoose.model('students').find(function(err, students){
		res.send(students);
	});
});

app.post('/newStudent', function(req, res){
	console.log("Requets:::", req.body)
	const newStudent = new Student({
		FirstName: req.body.firstname,
		LastName: req.body.lastname,
		Email: req.body.email,
		MobileNumber: req.body.number
	});
	console.log("Requets:::", req.body)
	Student.insertMany([newStudent], function(err, result){
		if(err){
			console.log(err);
		}else {
			//newStudent.save()
			console.log(result)
		}
		res.redirect("/newStudent")
	});
	
	// try{
	// 	await newStudent.save()
	// 	res.status(201)
	// 	res.send(newStudent)
	// 	res.send("Successfully inserted")
	// }catch(error){
	// 	res.status(400).send(error)
	// }
});

app.listen(5000, function(){
	console.log("Server running on port 5000")
})