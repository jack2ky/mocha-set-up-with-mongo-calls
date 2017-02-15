function createAreview(Review, reviewInfo){
    return new Review(reviewInfo).save()
}
function findAllReview(Review){
    return Review.find()
}

function populateReviews(createAreview, createAuser, reviewData, userData, User, Review){
        return createAuser(User, userData)
            .then(user => {
                console.log("USER : ", user)
                reviewData.userId = user._id;
                 return createAreview(Review, reviewData)
                    .then(doc =>{
                        console.log(doc)
                        return Review.find()
                            .populate({
                                path : "userId",
                                model : "User"
                            })
                    })

            })
}

module.exports ={
    createAreview,
    populateReviews
}
