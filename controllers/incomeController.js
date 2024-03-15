const Transaction = require('../models/transactionModel');

// Add transaction
const addincome = async (req, res) => {
  try {
    const { description, amount, category, date } = req.body;
    const newTransaction = new Transaction({ description, amount, category, date });
    await newTransaction.save();
    res.status(201).json({ success: true, message: 'Transaction added successfully', transaction: newTransaction });
  } catch (error) {
    console.error('Error adding transaction:', error);
    res.status(500).json({ success: false, message: 'Error adding transaction', error });
  }
};

// Get all transactions
const getAllincome = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    console.error('Error getting transactions:', error);
    res.status(500).json({ success: false, message: 'Error getting transactions', error });
  }
};

// Edit transaction
const editincome = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTransaction = await Transaction.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ success: true, message: 'Transaction updated successfully', transaction: updatedTransaction });
  } catch (error) {
    console.error('Error editing transaction:', error);
    res.status(500).json({ success: false, message: 'Error editing transaction', error });
  }
};

// Delete income
const deleteincome = async (req, res) => {
  try {
    const { id } = req.params;
    await Transaction.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Transaction deleted successfully' });
  } catch (error) {
    console.error('Error deleting transaction:', error);
    res.status(500).json({ success: false, message: 'Error deleting transaction', error });
  }
};

module.exports = { addincome, getAllincome, editincome, deleteincome };
