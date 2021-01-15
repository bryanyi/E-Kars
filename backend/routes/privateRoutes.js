const express = require("express");
const router = express.Router();
const { getPrivateData } = require("../controllers/privateController");
const { protect } = require("../middleware/authMiddleware");

// any routes from here requires you to be logged in

router.route("/checkout").get(protect, getPrivateData);
router.route("/finalizecheckout").get(protect, getPrivateData);

module.exports = router;
