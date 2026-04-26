import { ArchiveBoxIcon, BanknotesIcon, CreditCardIcon } from '@heroicons/react/24/outline';

export const ACCOUNT_TYPES = {
    TRANSACTION: 'transaction',
    SAVINGS: 'savings',
    CREDIT: 'credit'
};

export const FEATURES = [
    {
        name: 'Transactions',
        description: 'Manage your everyday banking transactions and account movements.',
        href: ACCOUNT_TYPES.TRANSACTION,
        icon: BanknotesIcon,
    },
    {
        name: 'Savings',
        description: 'View and manage your savings accounts and long-term deposits.',
        href: ACCOUNT_TYPES.SAVINGS,
        icon: ArchiveBoxIcon,
    },
    {
        name: 'Credit',
        description: 'Monitor your credit accounts and available credit limits.',
        href: ACCOUNT_TYPES.CREDIT,
        icon: CreditCardIcon,
    },
];

export const ROUTES = {
    HOME: '/',
    DASHBOARD: '/dashboard',
    CATEGORY: '/category/:typeName',
    ACCOUNT: '/account/:id'
};