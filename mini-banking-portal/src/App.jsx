import { Routes, Route } from 'react-router-dom';
import Dashboard1 from './pages/Dashboard1.jsx'
import Account from './pages/Account.jsx';
import { accountList } from './data/mockdata.js';
import './App.css'
import HeroSection from './pages/HeroSection.jsx';
import { FEATURES, ROUTES } from './constants/appConstants.js';
import { useAccountFilters } from './hooks/useAccountFilters.js';

function App() {
  const { groupedAccounts } = useAccountFilters(accountList);

  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.HOME} element={<HeroSection />} />
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <Dashboard1
              title="This is your banking dashboard!"
              subtitle="Click to find out more about your accounts."
              features={FEATURES}
              groupedData={groupedAccounts}
            />
          }
        />
        <Route
          path={ROUTES.CATEGORY}
          element={<Account accountList={accountList} isCategoryView={true} />}
        />
        <Route
          path={ROUTES.ACCOUNT}
          element={<Account accountList={accountList} isCategoryView={false} />}
        />
      </Routes>
    </div>
  );
}

export default App;