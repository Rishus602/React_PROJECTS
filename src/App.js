import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const DUMMY_EXPENSES = [
  { id: 1, title: "New TV", date: new Date(2023, 2, 10), amount: 30.99 },
  {
    id: 2,
    title: "Buy Car",
    date: new Date(2023, 1, 7),
    amount: 50.99,
  },
  {
    id: 3,
    title: "clothes",
    date: new Date(2022, 11, 12),
    amount: 45.99,
  },
  {
    id: 4,
    title: "Buy House",
    date: new Date(2022, 10, 11),
    amount: 15.99,
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpenses onAddSaveExpenses={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
