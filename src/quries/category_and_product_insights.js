export const orderByYear = `SELECT
c.categoryName,
SUM(opm.price) AS total_revenue
FROM CampusHaat.orderProductsMapping opm
JOIN CampusHaat.products p ON opm.productId = p.productId
JOIN CampusHaat.category c ON p.productCategory = c.categoryId
GROUP BY c.categoryName
ORDER BY total_revenue DESC`;

export const productsWithHighestPrepTime = `SELECT
productId,
productCategory,
productPrepTime
FROM CampusHaat.products
ORDER BY productPrepTime DESC
LIMIT 10;`;

export const campusWiseMonthlyRevenue = `SELECT
o.orderCampusId,
DATE_FORMAT(o.orderCreateDate, '%Y-%m') AS month,
SUM(opm.price) AS revenue
FROM CampusHaat.orders o
JOIN CampusHaat.orderProductsMapping opm ON o.orderId = opm.orderId
GROUP BY o.orderCampusId, month
ORDER BY o.orderCampusId, month;`;

export const mostOrderedProductsInEachCategory = `SELECT
c.categoryName,
p.productId,
SUM(opm.quantity) AS total_quantity
FROM CampusHaat.orderProductsMapping opm
JOIN CampusHaat.products p ON opm.productId = p.productId
JOIN CampusHaat.category c ON p.productCategory = c.categoryId
GROUP BY c.categoryName, p.productId
ORDER BY c.categoryName, total_quantity DESC;`;