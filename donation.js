const express = require('express');
const router = express.Router();
const { submitDonation, getDonations } = require('../controllers/donationController');

// @route   POST /api/donations
// @desc    Submit a donation
router.post('/', submitDonation);

// @route   GET /api/donations
// @desc    Get all donations
router.get('/', getDonations);

module.exports = router;