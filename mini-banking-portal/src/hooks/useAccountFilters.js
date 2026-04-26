import { useMemo } from 'react';

export const useAccountFilters = (accountList) => {
    const groupedAccounts = useMemo(() => {
        if (!accountList) return [];

        return accountList.reduce((acc, current) => {
            const existingGroup = acc.find(item => item.type === current.type);

            if (existingGroup) {
                existingGroup.balance += current.balance;
                existingGroup.accounts.push(current);
                existingGroup.count += 1;
            } else {
                acc.push({
                    type: current.type,
                    balance: current.balance,
                    accounts: [current],
                    count: 1,
                });
            }
            return acc;
        }, []);
    }, [accountList]);

    const filterByType = (type) => {
        return accountList.filter(
            (acc) => acc.type.toLowerCase() === type.toLowerCase()
        );
    };

    const findById = (id) => {
        return accountList.find(acc => acc.id === id);
    };

    return {
        groupedAccounts,
        filterByType,
        findById,
    };
};