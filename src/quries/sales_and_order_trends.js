export const totalOrdersPerMonth = `SELECT
DATE_FORMAT(orderCreateDate, '%Y-%m') AS month,
COUNT(orderId) AS total_orders
FROM CampusHaat.orders
GROUP BY month
ORDER BY month;`;

export const totalRevenuePerMonth = `SELECT
DATE_FORMAT(opm.createDate, '%Y-%m') AS month,
SUM(opm.price) AS total_revenue
FROM CampusHaat.orderProductsMapping opm
GROUP BY month
ORDER BY month;`;

export const averageOrderValuePerBuyer = `SELECT o.buyerId, AVG(order_total.total_price) AS avg_order_value
FROM CampusHaat.orders o
JOIN (
SELECT orderId, SUM(price) AS total_price
FROM CampusHaat.orderProductsMapping
GROUP BY orderId
) AS order_total ON o.orderId = order_total.orderId
GROUP BY o.buyerId
ORDER BY avg_order_value DESC;`;

export const top10SellingProductsByQuantity = `SELECT
opm.productId,
p.productCategory,
SUM(opm.quantity) AS total_quantity_sold
FROM CampusHaat.orderProductsMapping opm
JOIN CampusHaat.products p ON opm.productId = p.productId
GROUP BY opm.productId, p.productCategory
ORDER BY total_quantity_sold DESC
LIMIT 10;`;

export const highValueBuyers = `SELECT o.buyerId, SUM(opm.price) AS lifetime_value
FROM CampusHaat.orders o
JOIN CampusHaat.orderProductsMapping opm ON o.orderId = opm.orderId
GROUP BY o.buyerId
ORDER BY lifetime_value DESC;`;