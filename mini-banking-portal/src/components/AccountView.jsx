function AccountView({ title, balance, type, id }) {
    return (
        <div className="account-view bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
            <div className="account-header mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
                <p className="text-sm text-gray-600 uppercase tracking-wide">{type} Account</p>
            </div>

            <div className="account-balance mb-6">
                <p className="text-sm text-gray-600 mb-1">Current Balance</p>
                <p className="text-3xl font-bold text-green-600">${balance.toFixed(2)}</p>
            </div>

            <div className="account-details">
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-gray-600">Account ID</p>
                        <p className="font-mono text-gray-900">{id}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Account Type</p>
                        <p className="text-gray-900">{type}</p>
                    </div>
                </div>
            </div>

            <div className="account-actions mt-6 space-y-2">
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                    Transfer Money
                </button>
                <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">
                    View Transactions
                </button>
            </div>
        </div>
    );
}

export default AccountView;
