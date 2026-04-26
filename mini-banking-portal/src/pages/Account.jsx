
import { useParams, useNavigate } from 'react-router-dom';
import StatsView from '../components/Stats.jsx';
import AccountView from '../components/AccountView.jsx';
import { useAccountFilters } from '../hooks/useAccountFilters.js';
import '../styles/Account.css'

function Account({ accountList, isCategoryView }) {
    const { typeName, id } = useParams();
    const navigate = useNavigate();
    const { filterByType, findById } = useAccountFilters(accountList);

    // Category view - show all accounts of a type
    if (isCategoryView) {
        const filteredAccounts = filterByType(typeName);

        const accountStats = filteredAccounts.map((acc, index) => ({
            id: index + 1,
            name: acc.name,
            value: `$${acc.balance.toFixed(2)}`
        }));

        return (
            <div className="Account list-view account-container">
                <div className="account-inner">
                    <button 
                        onClick={() => navigate('/dashboard')}
                        className="group mb-8 flex items-center gap-x-3 rounded-full bg-[#4B39EF] py-3 pl-4 pr-6 text-sm font-bold text-white shadow-lg shadow-purple-200 transition-all hover:bg-[#3b2db0] hover:shadow-purple-300 active:scale-95"
                        >
                        {/* The circular arrow icon matched to the 'Login' button style */}
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2.5} 
                            stroke="currentColor" 
                            className="h-4 w-4"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </div>
                        BACK TO OVERVIEW
                        </button>
                    <h1>{typeName.toUpperCase()} ACCOUNTS</h1>
                    <StatsView stats={accountStats} />
                </div>
            </div>
        );
    }

    // Individual account view - show single account details
    else {
        const account = findById(id);
        if (!account) {
            return <div>Account not found</div>;
        }

        return (
            <div className="Account detail-view account-container">
                <div className="account-inner">
                    <button onClick={() => navigate(`/category/${account.type.toLowerCase()}`)}>
                        ← Back to {account.type} Accounts
                    </button>
                    <AccountView
                        title={account.name}
                        balance={account.balance}
                        type={account.type}
                        id={account.id}
                    />
                </div>
            </div>
        );
    }
}

export default Account;
  