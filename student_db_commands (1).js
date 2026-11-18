// Student Information Management System - MongoDB (mongosh)
use("studentDB");

db.createCollection("students", {validator: {$jsonSchema: {bsonType:"object", required:["studentId","name","email","department","year","cgpa"], properties:{studentId:{bsonType:"string"}, name:{bsonType:"string"}, email:{bsonType:"string"}, year:{bsonType:"number", minimum:1, maximum:4}, cgpa:{bsonType:"number", minimum:0, maximum:10}}}}});

db.students.insertMany([{studentId:"S201",name:"Ishaan Malhotra",email:"ishaan@example.com",department:"CSE",year:2,cgpa:8.8,courses:["DBMS","OS"],address:{city:"Chandigarh",state:"Punjab"}},{studentId:"S202",name:"Ananya Kapoor",email:"ananya@example.com",department:"ECE",year:3,cgpa:9.3,courses:["DSP","VLSI"],address:{city:"Mumbai",state:"Maharashtra"}},{studentId:"S203",name:"Vikram Joshi",email:"vikram@example.com",department:"CSE",year:1,cgpa:7.2,courses:["C","Maths"],address:{city:"Lucknow",state:"Uttar Pradesh"}},{studentId:"S204",name:"Sneha Reddy",email:"sneha@example.com",department:"ME",year:4,cgpa:8.5,courses:["Thermodynamics"],address:{city:"Hyderabad",state:"Telangana"}},{studentId:"S205",name:"Arjun Nair",email:"arjun@example.com",department:"IT",year:2,cgpa:6.7,courses:["DBMS","Networks"],address:{city:"Kochi",state:"Kerala"}}]);

db.students.countDocuments();

db.students.find({department:"CSE"},{_id:0,studentId:1,name:1,cgpa:1});

db.students.find({cgpa:{$gt:8}},{_id:0,name:1,cgpa:1}).sort({cgpa:-1});

db.students.updateOne({studentId:"S203"},{$set:{cgpa:7.8}});

db.students.find({studentId:"S203"},{_id:0,name:1,cgpa:1});

db.students.deleteOne({studentId:"S205"});

db.students.countDocuments();

db.students.createIndex({studentId:1},{unique:true});

db.students.aggregate([{$group:{_id:"$department",total:{$sum:1},avgCgpa:{$avg:"$cgpa"}}},{$sort:{_id:1}}]);
