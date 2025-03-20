const Donation = require('../models/Donation');
const paystack = require('../config/paymentConfig');

// @desc    Create new donation
// @route   POST /api/donations
// @access  Public
const createDonation = async (req, res) => {
  try {
    const { name, email, amount, message, paymentMethod, isAnonymous } = req.body;

    const donation = new Donation({
      name,
      email,
      amount,
      message,
      paymentMethod,
      isAnonymous,
      transactionId: 'pending',
      status: 'pending',
    });

    const createdDonation = await donation.save();

    res.status(201).json(createdDonation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all donations
// @route   GET /api/donations
// @access  Public
const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ status: 'success' }).sort({ createdAt: -1 });
    res.json(donations);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update donation status
// @route   PUT /api/donations/:id
// @access  Private
const updateDonationStatus = async (req, res) => {
  try {
    const { status, transactionId } = req.body;

    const donation = await Donation.findById(req.params.id);

    if (donation) {
      donation.status = status || donation.status;
      donation.transactionId = transactionId || donation.transactionId;

      const updatedDonation = await donation.save();
      res.json(updatedDonation);
    } else {
      res.status(404).json({ message: 'Donation not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createDonation, getDonations, updateDonationStatus };