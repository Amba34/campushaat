


export const repeatVsOneTimeBuyers = `SELECT
buyerId,
COUNT(orderId) AS order_count
FROM CampusHaat.orders
GROUP BY buyerId
HAVING order_count > 1
ORDER BY order_count DESC;`;

export const repeatBuyersFavoriteCategories = `SELECT
o.buyerId,
c.categoryName,
COUNT(DISTINCT o.orderId) AS total_orders
FROM CampusHaat.orders o
JOIN CampusHaat.orderProductsMapping opm ON o.orderId = opm.orderId
JOIN CampusHaat.products p ON opm.productId = p.productId
JOIN CampusHaat.category c ON p.productCategory = c.categoryId
GROUP BY o.buyerId, c.categoryName
HAVING COUNT(DISTINCT o.orderId) > 1
ORDER BY total_orders DESC;`; 