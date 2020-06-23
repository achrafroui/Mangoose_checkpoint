// Install and setup mongoose:

let mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Database Atlas connection

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection error')
  })


  // Create Shema 
  var peopleSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    age : Number,
    favoriteFoods : [String]
  });

  let personsModel = mongoose.model('people', peopleSchema);

//   // Create and Save a Record of a Model

//   let people = new personsModel({ name: 'achraf', age : 24, favoriteFoods : ["spaguetti", "meat","sea food"]  });
//   people.save(function (err, people) {
//     if (err) console.log(err)
//     console.log(people)
//   })

// //Create Many Records with model.create()

//   let arrayOfPeople = [
//     { name: 'achraf', age : 24, favoriteFoods : ["spaguetti", "meat","sea food"]},
//     { name: 'fathi', age : 28, favoriteFoods : ["fish", "meat","sea food"]},
//     { name: 'ramzi', age : 20, favoriteFoods : ["spaguetti", "gateau","sea food"]}
//   ];
  
//   personsModel.create(arrayOfPeople,function (err, people) {
//     if (err) console.log(err)
//     console.log(people)
//     })
//     //Use model.find() to Search Your Database

//     personsModel.find ( { name: "achraf" },function (err, people) {
//     if (err) {console.log(err)}
//         console.log(people)
//      } )

//  //Use model.findOne() to Return a Single Matching Document from Your Database

//  personsModel.findOne( { favoriteFoods: { "$in" : ["spaguetti"]} },function (err, people) {
//     if (err) console.log(err)
//     console.log(people)
//   })

//   //Use model.findById() to Search Your Database By _id

//   personsModel.findById('5edd483fbecd8a1828249c05',function (err, people) {
//     if (err) console.log(err)
//       console.log(people)
//     })

//     //Perform Classic Updates by Running Find, Edit, then Save

//     personsModel.findById('5edd483fbecd8a1828249c05',function (err, people) {
//     if (err) console.log(err)
//     people.favoriteFoods.push('lasagne');
//     people.save(function (err, people) {
//       if (err) console.log(err)
//       console.log(people)
//     })
    
//   })


// /*******************************************************/


// //Perform New Updates on a Document Using model.findOneAndUpdate()

// const filter = { name: 'achraf' };
// const update = { name: 'achraf rouai' };
// personsModel.findOneAndUpdate(filter, update, { new: true,upsert: true },function (err, people) {
//   if (err) console.log(err)
//     console.log(people)
//   })


// /********************************************************/

// // Delete One Document Using model.findByIdAndRemove

//   personsModel.findByIdAndRemove ('5edd483fbecd8a1828249c05',function (err, people) {
//     if (err) console.log(err)
//       console.log(people)
//   })




// //MongoDB and Mongoose - Delete Many Documents with model.remove()

// personsModel.remove ({name :"ramzi"},function (err, people) {
//     if (err) console.log(err)
//       console.log("delete all peoples having ramzi name")
//   })


//Chain Search Query Helpers to Narrow Search Results

personsModel.find( { favoriteFoods: { "$in" : ["burrito"]}})
.sort({name:1})
.limit(2)
.select({name:true, favoriteFoods:true})
.exec()
.then (peoples => {console.log(peoples)})
.catch(err => {console.log(err)})

  