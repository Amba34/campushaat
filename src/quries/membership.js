export const totalMembershipsByValue = `SELECT 
    membershipValue,
    COUNT(*) AS total_memberships
FROM 
    campushaat.membership
WHERE 
    membershipValue IN (1000, 2000, 3000)
GROUP BY 
    membershipValue
ORDER BY 
    membershipValue;`;

export const totalMembershipsAndValuePerMonth = `SELECT 
    DATE_FORMAT(createDate, '%Y-%m') AS month,
    COUNT(*) AS total_memberships,
    SUM(membershipValue) AS total_value
FROM 
    campushaat.membership
WHERE 
    createDate >= '2021-01-01'
GROUP BY 
    DATE_FORMAT(createDate, '%Y-%m')
ORDER BY 
    month;`;

export const totalMembershipValue = `SELECT 
    SUM(membershipValue) AS total_membership_value
FROM 
    campushaat.membership;`;

export const totalNonMemberPayment = `SELECT 
    ( 
        (SELECT SUM(amount) FROM campushaat.payment) 
        -
        (SELECT SUM(membershipValue) FROM campushaat.membership)
    ) AS total_non_member_payment;`;

export const paymentStatsByMode = `SELECT mode, 
       COUNT(*) AS num_payments,
       SUM(amount) AS total_amount
FROM campushaat.payment
GROUP BY mode
ORDER BY total_amount DESC;`;