export const ordersDeliveredByYear = `SELECT
YEAR(deliveryDateTime) As year,
count(*) as order_delivered
from delivery
where deliveryDateTime is not null
group by year(deliveryDateTime)
order by year desc;`;

export const ordersDeliveredByMonth = `SELECT
MONTH(deliveryDateTime) As  month,
count(*) as order_delivered
from delivery
where deliveryDateTime is not null
group by month(deliveryDateTime)
order by month desc;`;

export const ordersCreatedByHour = `SELECT
HOUR(deliveryCreateDate) AS hour_24,
COUNT(*) AS order_created
FROM
delivery
WHERE
deliveryCreateDate IS NOT NULL
GROUP BY
HOUR(deliveryCreateDate)
ORDER BY
hour_24;`;

export const ordersDeliveredByHour = `SELECT
HOUR(deliveryDateTime) AS hour_24,
COUNT(*) AS order_delivered
FROM
delivery
WHERE
deliveryDateTime IS NOT NULL
GROUP BY
HOUR(deliveryDateTime)
ORDER BY
hour_24;`;

export const avgTimeCreateToPickup = `SELECT
AVG(TIMESTAMPDIFF(MINUTE, deliveryCreateDate, pickUpDateTime)) AS avg_mins_create_to_pickup
FROM
delivery
WHERE
deliveryCreateDate IS NOT NULL AND pickUpDateTime IS NOT NULL
and year(deliveryCreateDate)>=2024 and year(pickUpDateTime)>=2024;`;

export const avgTimePickupToDispatch = `SELECT
AVG(TIMESTAMPDIFF(MINUTE,pickupDateTime, dispatchDateTime)) AS diff_mins
FROM
delivery
WHERE
dispatchDateTime IS NOT NULL
AND pickupDateTime IS NOT NULL
AND YEAR(dispatchDateTime) >= 2024
AND YEAR(pickupDateTime) >= 2024;`;

export const avgTimeDispatchToDelivery = `SELECT
AVG(TIMESTAMPDIFF(MINUTE, dispatchDateTime, deliveryDateTime)) AS avg_mins_dispatch_to_delivery
FROM
delivery
WHERE
dispatchDateTime IS NOT NULL AND deliveryDateTime IS NOT NULL
and year(dispatchDateTime)>=2024
and year(deliveryDateTime)>=2024;`;

export const avgTimeCreateToDelivery = `SELECT
AVG(TIMESTAMPDIFF(MINUTE, deliveryCreateDate, deliveryDateTime)) AS avg_mins_create_to_delivery
FROM
delivery
WHERE
deliveryCreateDate IS NOT NULL AND deliveryDateTime IS NOT NULL
and year(deliveryCreateDate)>=2024
and year(deliveryDateTime)>=2024;`;

export const latePickups = `SELECT count(*)
FROM delivery
WHERE
TIMESTAMPDIFF(MINUTE, pickUpDateTime, dispatchDateTime) > 30
and year(pickUpDateTime)>=2024
and year(dispatchDateTime)>=2024;`;



