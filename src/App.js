import { useEffect } from 'react';
import './App.css';
import Balance from "./components/Balance"
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionForm from './components/TransactionForm';
import TransactionHistory from "./components/TransactionHistory";
import { GlobalProvider } from './context/GlobalState';
import { configureNotifications } from './services/firebase';

const App = () => {

  useEffect(() => {
    configureNotifications();
  }, [])

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionHistory />
        <TransactionForm />
      </div>
    </GlobalProvider>
  );
}

export default App;
