const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const User = require('./models/user');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

const dbUrl = "mongodb+srv://junjie:8LETN2GxF98lZ2It@junjie-mern.p63jc.mongodb.net/junjiereactdb?retryWrites=true&w=majority"

const connectDB = async () => {
	try {
		await mongoose.connect(dbUrl, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		});
		console.log("MongoDB is Connected");
	} catch (error) {
		console.log(error);
	}
}

//connect Database
connectDB();

app.post("/api/register", async (req, res) => {
	try {
		await User.create({
		name: req.body.userName,
		email: req.body.userEmail		
		});
		
		res.json({
		message: "User Registered"
	})
		
	} catch (error) {
		res.json({
		message: "That email is already registered"
	});
	}	
	
});

app.get("/api/users", async (req, res) => {
	try {
		const users = await User.find();
		
		res.json({
			users: users
		})
		
	} catch (error) {
		console.log(error);
	}

});

const Port = 5000;

app.listen( Port, () => {
	console.log("Server running on Port " + Port);
});
