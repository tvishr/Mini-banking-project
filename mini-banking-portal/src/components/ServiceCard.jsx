function ServiceCard({ title, balance, count }) {
    return (
        <div className="service-card bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-indigo-300 transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <div className="text-right">
                    <p className="text-2xl font-bold text-indigo-600">${balance?.toFixed(2) || '0.00'}</p>
                    <p className="text-sm text-gray-500">Total Balance</p>
                </div>
            </div>
            {count && (
                <p className="text-sm text-gray-600">{count} account{count !== 1 ? 's' : ''}</p>
            )}
        </div>
    );
}

export default ServiceCard;