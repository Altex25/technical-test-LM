INSERT INTO product(id, name, price) VALUES (1, 'Planche', 5);
INSERT INTO product(id, name, price) VALUES (2, 'Lavabo', 50);
ALTER TABLE product ALTER COLUMN id RESTART WITH 3;