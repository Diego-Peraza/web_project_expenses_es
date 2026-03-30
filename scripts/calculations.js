let budgetValue = 0;
let totalExpensesValue = 0;
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];
let balanceColor = "green";
let expenseCategories = [
  "groceries",
  "restaurants",
  "transport",
  "home",
  "subscriptions",
];
let categoriesData = [];

for (let index = 0; index < expenseEntries.length; index++) {
  totalExpensesValue = totalExpensesValue + expenseEntries[index][1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  } else {
    let sum = 0;
    for (let index = 0; index < expenseEntries.length; index++) {
      sum += expenseEntries[index][1];
    }
    return sum / expenseEntries.length;
  }
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  let orange = (budgetValue / 100) * 25;
  if (budgetValue - totalExpensesValue <= 0) {
    balanceColor = "red";
  } else if (budgetValue - totalExpensesValue <= orange) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let sum = 0;

  for (let index = 0; index < expenseEntries.length; index++) {
    if (expenseEntries[index][0] === category) {
      sum += expenseEntries[index][1];
    }
  }
  return sum;
}

function calculateLargestCategory() {
  for (let index = 0; index < expenseCategories.length; index++) {
    let categoryName = expenseCategories[index];
    let categoryTotal = calculateCategoryExpenses(categoryName);
    categoriesData.push([categoryName, categoryTotal]);
  }

  let largestCategory = "";
  let largestAmount = 0;
  for (let category of categoriesData) {
    if (category[1] > largestAmount) {
      largestAmount = category[1];
      largestCategory = category[0];
    }
  }
  return largestCategory;
}

function addExpenseEntry(values) {
  totalExpensesValue += values[1];
  expenseEntries.push(values);
}
