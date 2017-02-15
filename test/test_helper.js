const mongoose = require("mongoose");
const log = console.log;
const assert = require("assert");
const User = require("../models/user");
const Review =require("../models/review")
const userController = require("../controllers/users.js");
const reviewController = require("../controllers/reviews.js")
const  {
    createAuser,
    findAUserId
} = userController;

const {
    createAreview,
    populateReviews
} = reviewController;



const userData = {name : "user2", email :"email2"};
const reviewData = {question1 : "q1", question2 : "q2"};
before(done => {

    mongoose.connect("mongodb://localhost/mocha-prac");
    mongoose.connection
    .once("open", () => {
        console.log("INSIDE BEFORE")
        log("opened");
        return done();

    })
    .on("error", error => {
        console.warn("warning", error);
    })
})
/*
* I create the reviews and the user beforEach describe to make sure
* that the collection exists. mongoose automatically creates a collection
* When you save data with the moedel instance.
* THEN I remove the docs to get a fresh collection with no docs.
*/
beforeEach("my before", (done) => {
    createAuser(User, userData)
        .then(user => {
            createAreview(Review, createAreview)
                .then(review =>{
                    console.log("INSIDE REVIEW")
                    User.remove({})
                        .then( () =>{
                            Review.remove({})
                                .then( () =>{
                                    done();
                                })
                        })
                        .catch(err=> {
                            console.log(err);
                            // done()
                        })

                })

        });

})



// after(done => {
//     const users = mongoose.connection.collections.users;
//     const reviews = mongoose.connection.collections.reviews;
//     // users.drop()
//     //     .then(() => done())
//     //     .catch((err) => {
//     //         log(err);
//     //          done()
//     //      }
//     //      );
//     // reviews.drop()
//     //     .then(() => done())
//     //     .catch((err) => {
//     //         log(err);
//     //          done()
//     //      }
//     //      );
// })
