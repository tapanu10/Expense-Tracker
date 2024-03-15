// Add expense
const Expense=require('../models/ExpenseModel')
const addExpense = async (req, res) => {
    try {
      const { description, amount, category, date } = req.body;
      const newExpense = new Expense({ description, amount, category, date });
      await newExpense.save();
      res.status(201).json({ success: true, message: 'Expense added successfully', expense: newExpense });
    } catch (error) {
      console.error('Error adding expense:', error);
      res.status(500).json({ success: false, message: 'Error adding expense', error });
    }
  };
  
  // Get all expenses
  const getAllExpenses = async (req, res) => {
    try {
      const expenses = await Expense.find();
      res.status(200).json(expenses);
    } catch (error) {
      console.error('Error getting expenses:', error);
      res.status(500).json({ success: false, message: 'Error getting expenses', error });
    }
  };
  
  // Edit expense
  const editExpense = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedExpense = await Expense.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json({ success: true, message: 'Expense updated successfully', expense: updatedExpense });
    } catch (error) {
      console.error('Error editing expense:', error);
      res.status(500).json({ success: false, message: 'Error editing expense', error });
    }
  };
  
  // Delete expense
  const deleteExpense = async (req, res) => {
    try {
      const { id } = req.params;
      await Expense.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: 'Expense deleted successfully' });
    } catch (error) {
      console.error('Error deleting expense:', error);
      res.status(500).json({ success: false, message: 'Error deleting expense', error });
    }
  };
  
  module.exports = { addExpense, getAllExpenses, editExpense, deleteExpense };
  