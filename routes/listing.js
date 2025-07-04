const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn ,isOwner ,validateListing } = require("../middleware.js");

const multer  = require('multer');
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage })

const listingController= require("../controller/listings.js");

router.route("/")
.get(wrapAsync(listingController.index))//Index Route
.post(isLoggedIn,
    upload.single('listing[image]'),
    wrapAsync(listingController.createListing));//Create Route

//New route
router.get("/new", isLoggedIn,listingController.renderNewForm);

router.get("/filter",listingController.filter);

router.route("/:id")
.get(wrapAsync(listingController.showListing))//Show Route
.put(
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.updateListing)) //Update Route
.delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing));//delete route

//Edit form Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

module.exports=router;
