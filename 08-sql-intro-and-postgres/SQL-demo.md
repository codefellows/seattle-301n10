<!-- After you create a database: -->
CREATE TABLE addresses(
id SERIAL PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
city VARCHAR(50),
distance NUMERIC(3, 1)
);

<!-- Enter addresses one at a time...  -->
INSERT INTO addresses (first_name, last_name, city, distance)
VALUES ( 'Allie', 'Grampa', 'Seattle', 6);

INSERT INTO addresses (first_name, last_name, city, distance)
VALUES ( 'Sam', 'Hamm', 'West Seattle', 1);

INSERT INTO addresses (first_name, last_name, city, distance)
VALUES ( 'JB', 'Tellez', 'Fremont', 12);

<!-- ... Or enter several at once  -->
INSERT INTO addresses (first_name, last_name, city, distance)
VALUES ('John', 'Smith', 'Queen Anne', 2.4),
('Jennifer', 'Jones', 'Green Lake', 3.4),
('Allie', 'Grampa', 'South Lake Union', 6.8),
('Sam', 'Hamm', 'West Seattle', 1),
('JB', 'Tellez', 'Fremont', 12),
('Joe', 'Schmoe', 'Capitol Hill', 7),
('Gary', 'Grampa', 'South Lake Union', 0.5),
('Charlotte', 'Grampa', 'South Lake Union', 0.5),
('Sarah', 'Johnson', 'Capitol Hill', 3);

UPDATE addresses SET city='Wallingford' WHERE city='Fremont';

<!-- Could also update by last_name of Grampa or by city of South Lake Union -->
UPDATE addresses SET distance=0.9 WHERE id=1;

SELECT * FROM addresses ORDER BY distance ASC;

SELECT * FROM addresses ORDER BY distance DESC;

SELECT * FROM addresses WHERE distance > 5;

<!-- % is a wildcard for matching -->
SELECT * FROM addresses WHERE first_name LIKE 'J%';

DELETE from addresses where first_name='Allie';

<!-- This ordering will prevent accidentally wiping the entire table -->
DELETE WHERE first_name='Sam' FROM addresses;
