import { accountList } from "../data/mockdata.js"

export const groupedTransactions = (accountList) => {
    if(!accountList) return [];

    const grouped = accountList.reduce((acc, current) => {
        const existingGroup = acc.find(item => item.type === current.type);

        if(existingGroup) {
            existingGroup.balance += current.balance;
            existingGroup.accountListId.push(current.id);
        } else {
            acc.push({
                type: current.type,
                balance: current.balance,       
                accountListId: [current.id],
            });
        }
        return acc;
    }, []); 
    return grouped;
}
