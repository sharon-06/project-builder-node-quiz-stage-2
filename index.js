var { MongoClient } = require("mongodb");
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

////Create Connection
// mongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     console.log("MongoDB connected");
//     db.close();
//   });

////Create DataBase and collections
// mongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbo = db.db("Quiz-Stage2");
//   dbo.createCollection("question", (err, res) => {
//     if (err) throw err;
//     console.log("question collection created");
//   });
//     dbo.createCollection("options", (err, res) => {
//     if (err) throw err;
//     console.log("options collection created");
//   });

//   dbo.createCollection("answers", (err, res) => {
//     if (err) throw err;
//     console.log("answers collection created");
//   });
// });

//insert documents in collections

// const question = [{ question: "Node.js is written in "},
// { question: "Is node js multithreaded?"},
// { question: "which extention is used to save NodeJs files?"},
// { question: "How Node.js modules are available externally"},
// { question: "Which of the following is not builtin node module"}]

// const options = [{options: ["Javascript", "C", "C++", "All of the Above"]},
// {options: ["Yes", "No"]},
// {options: [".js", ".node", ".java", ".txt"]},
// {options: ["module.exports", "module.spread", "module.expose", "None of Above"]},
// {options: ["zlib", "https", "dgram", "fsread"]}]

// const answers = [{answer: "All of the above"}, {answer: "No"}, {answer: ".js"}, {answer: "module.exports"}, {answer: "fsread"}]

// mongoClient.connect(url,(err,db) =>{
//   if(err) throw err
//   var dbo = db.db("Quiz-Stage2")

//   //insert question-data into question file
//   dbo.collection("questions").insertMany(question,(err,res)=>{
//     if(err) throw err
//     console.log("question-data into collection");
//   })

//   //inserting options-data into options file
//   dbo.collection("options").insertMany(answers, (err, res)=>{
//     if (err) throw err
//     console.log("options-data inserted into collection");
//   })

//   //inserting answers-data into answers file
//   dbo.collection("answers").insertMany(answers, (err, res)=>{
//     if(err) throw err
//     console.log("answers-data inserted into collection");
//   })
//   db.close();
// })


////Display Data

MongoClient.connect(url,(err,db)=>{
  if(err) throw err
  var dbo = db.db("Quiz-Stage2")

  // Display only one question
  dbo.collection("questions").findOne({ question: "Node.js is written in"},(err,res)=>{
      if(err) throw err
      console.log(res);
      db.close()
  })

  // Display all qustions
  dbo.collection("questions").find({}).toArray(function(err, res) {
      if (err) throw err
      console.log("Found");
      console.log(res);
      db.close()
  })
})

////update question

// mongoClient.connect(url,(err,db)=>{
//     if(err) throw err
//     var dbo = db.db("Quiz-Stage2")
//     dbo.collection("questions").updateOne({ question: "Is node js multithreaded?" },
//         { $set: { question: "How Node.js modules are available externally"}},(err,res)=>{
//         if(err) throw err
//         console.log("Updated one document");
//         db.close()
//     })
// })

////Delete Document

// mongoClient.connect(url,(err,db)=>{
//     if(err) throw err
//     var dbo = db.db("Quiz-Stage2")
//     dbo.collection("questions").deleteOne({ question: "Is node js multithreaded?" },(err,res)=>{
//         if(err) throw err
//         console.log("Deleted one document");
//         db.close()
//     })
// })