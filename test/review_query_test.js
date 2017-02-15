const mongoose = require("mongoose");
const log = console.log;
const assert = require("assert");
const Review = require("../models/review");
const User = require("../models/user");
const userController = require("../controllers/users.js");
const reviewController = require("../controllers/reviews.js")
const ObjectId = mongoose.Types.ObjectId;
should = require("chai").should();
expect = require("chai").expect;
// to make sure ./user_query_tests runs first you require it a later file;
require("./user_query_tests")

const  {
    createAuser,
    findAUserId
} = userController

const {
    createAreview,
    populateReviews
} = reviewController;

const userData = {name : "user2", email :"email2"};
const reviewData = {question1 : "q1", question2 : "q2"};




describe("populate The review", () => {

    /**
    * populateReviews()
    * sets the userid field of the review to the user object from the user collection.
    * We test to see if the userId has an the object that we stores.
    */
    it("succesfuly populated", (done) =>{
        populateReviews(createAreview, createAuser, reviewData, userData, User, Review)
            .then(reviews => {

                expect(reviews[0].userId).to.have.property("name");
                expect(reviews[0].userId).to.have.property("name", userData.name);
                expect(reviews[0].userId).to.not.have.property("name", "frank");
                done();
            })
    })

});

describe("Create a review", () =>{
    it("successfuly created a review", (done) => {
        createAreview(Review, reviewData)
            .then(review =>{
                console.log(JSON.stringify(review))
                console.log("REVIEW",review)
                expect(review.toObject()).to.have.property("question1")
                done();
            })
    })
})
