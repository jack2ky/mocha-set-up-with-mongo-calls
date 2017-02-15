const mongoose = require("mongoose");
const log = console.log;
const assert = require("assert");
const User = require("../models/user");
const Review = require("../models/review");
const userController = require("../controllers/users.js");
should = require("chai").should();
expect = require("chai").expect;
const  {
    createAuser,
    findAUserId
} = userController;

const userData = {name : "user1", email :"email1"};

// before( done => {
//     User.remove({})
//         .then( () =>{
//             Review.remove({})
//                 .then( () =>{
//
//                 })
//         })
//         .catch(err=> {
//             console.log(err);
//             done()
//         })
//
//
// });

describe("user methods", () => {
    // beforeEach( done => {
    //     User.remove({})
    //         .then( () =>{
    //             done()
    //         })
    // });


    it("create one user", (done) => {
        createAuser(User, userData)
            .then(user => {
                expect(user).to.have.property("name");
                done();
            });
    })

    it("find one users' Id [the first user]", (done) =>{
        createAuser(User, userData)
            .then(user =>{
                findAUserId(User)
                .then(user =>{
                    expect(user._id).to.be.an("object");
                    done();
                })
            })

    })
});
