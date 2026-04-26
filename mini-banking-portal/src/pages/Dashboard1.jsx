import { useNavigate } from 'react-router-dom'
import { ACCOUNT_TYPES } from '../constants/appConstants.js'

export default function Dashboard1({ title, subtitle, features, groupedData }) {
  const navigate = useNavigate();

  const handleFeatureClick = (featureName) => {
    const typeMap = {
      'Transactions': ACCOUNT_TYPES.TRANSACTION,
      'Savings': ACCOUNT_TYPES.SAVINGS,
      'Credit': ACCOUNT_TYPES.CREDIT
    };
    const type = typeMap[featureName];
    if (type) {
      navigate(`/category/${type}`);
    }
  };

  const handleAccountClick = (type) => {
    navigate(`/category/${type.toLowerCase()}`);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-24 sm:py-32 dark:bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-indigo">
            {title}
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        </div>
        {groupedData && groupedData.length > 0 && (
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">Account Overview</h3>
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
              {groupedData.map((category) => (
                <div
                  key={category.type}
                  onClick={() => navigate(`/category/${category.type.toLowerCase()}`)}
                  className="flex flex-col p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-indigo-300 cursor-pointer transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-900">{category.type}</h4>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-indigo-600">${category.balance.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">Total Balance</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{category.count} account{category.count !== 1 ? 's' : ''}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-gray-900 dark:text-indigo">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <button
                      //onClick={() => handleFeatureClick(feature.name)}
                      className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 cursor-pointer bg-transparent border-none p-0"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </button>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
