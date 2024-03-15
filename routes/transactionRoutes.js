const express = require("express");
const {
  addincome,
  getAllincome,
  editincome,
  deleteincome,
} = require("../controllers/incomeController");

const {
  addExpense,
  getAllExpenses,
  editExpense,
  deleteExpense,
} = require("../controllers/expenseController");

// Router objects
const router = express.Router();


// Routes for income
// Add income (POST method)
router.post("/add-income", addincome);

// Edit income (POST method)
router.post("/edit-income", editincome);

// Delete income (DELETE method)
router.delete("/delete-income/:id", deleteincome);

// Get all income (GET method)
router.get("/get-income", getAllincome);

// Routes for expenses
// Add expense (POST method)
router.post("/add-expense", addExpense);

// Edit expense (POST method)
router.post("/edit-expense", editExpense);

// Delete expense (DELETE method)
router.delete("/delete-expense/:id", deleteExpense);

// Get all expenses (GET method)
router.get("/get-expense", getAllExpenses);

module.exports = router
