const mongoose=require("mongoose");
const Review = require("./review.js");
const { required } = require("joi");


const listingSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type : String,
    },
    image:{
        filename: String,
        url: String,
    },
    price:{
        type: Number,
    },
    location:{
        type: String,
    },
    country:{
        type: String,
    },
    reviews:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"

    }],

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    geometry:{
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true,
            default: 'Point',
        },
        coordinates: {
            type: [Number],
            required: true,
            default: [78.9629, 20.5937],
        }
    },
    category:{
        type : String,
        enum:["Trending","Rooms","Iconic Cities","Mountains","Castles","Amazing Pools","Camping","Farms","Arctics","Boats","Domes"],
        required:true,
    },
});


listingSchema.post("findOneAndDelete",async (listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in: listing.reviews}});
    }
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;


