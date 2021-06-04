DROP TABLE IF EXISTS categorias;

CREATE TABLE categorias(
  id serial primary key,
  nome varchar(50)
);

DROP TABLE IF EXISTS produtos;

CREATE TABLE produtos(
  id serial primary key,
  nome varchar(100),
  descricao text,
  preco int,
  quantidade_em_estoque int,
  categoria_id int,
  foreign key (categoria_id) references categorias(id)
);

DROP TABLE IF EXISTS clientes;
CREATE TABLE clientes(
  cpf char(11) primary key,
  nome varchar(150)
);

DROP TABLE IF EXISTS vendedores;
CREATE TABLE vendedores(
  cpf char(11) primary key,
  nome varchar(150)
);

DROP TABLE IF EXISTS pedidos;
CREATE TABLE pedidos(
  id serial primary key,
  valor int,
  cliente_cpf char(11),
  vendedor_cpf char(11),
  foreign key (cliente_cpf) references clientes(cpf),
  foreign key (vendedor_cpf) references vendedores(cpf)
);

DROP TABLE IF EXISTS itens_do_pedido;
CREATE TABLE itens_do_pedido(
  id serial primary key,
  pedido_id serial,
  quantidade int,
  produto_id serial,
  foreign key (pedido_id) references pedidos(id),
  foreign key (produto_id) references produtos(id)
);


ALTER TABLE clientes
ADD CONSTRAINT cpf_deve_ser_unico UNIQUE(cpf);

ALTER TABLE vendedores
ADD CONSTRAINT UNIQUE(cpf);

INSERT INTO categorias
(nome)
VALUES 
('frutas'),
('verduras'),
('massas'),
('bebidas'),
('utilidades');

INSERT INTO produtos
(nome, descricao, preco, quantidade_em_estoque, categoria_id)
VALUES 
('Mamão', 'Rico em vitamina A, potássio e vitamina C', 300, 123, 1),
('Maça', 'Fonte de potássio e fibras.',	90,	34, 1),
('Cebola', 'Rico em quercetina, antocianinas, vitaminas do complexo B, C.', 50, 76, 2),
('Abacate', 'NÃO CONTÉM GLÚTEN.', 150, 64, 1),
('Tomate', 'Rico em vitaminas A, B e C.', 125, 88, 2),
('Acelga', 'NÃO CONTÉM GLÚTEN.', 235, 13, 2),
('Macarrão parafuso', 'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais',	690, 5, 3),
('Massa para lasanha', 'Uma reunião de família precisa ter comida boa e muita alegria.', 875, 19, 3),
('Refrigerante coca cola lata',	'Sabor original', 350, 189, 4),
('Refrigerante Pepsi 2l', 'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.', 700, 12, 4),
('Cerveja Heineken 600ml', 'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado', 1200, 500, 4),
('Agua mineral sem gás', 'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.', 130, 478, 4),
('Vassoura', 'Pigmento, matéria sintética e metal.', 2350, 30, 5),
('Saco para lixo', 'Reforçado para garantir mais segurança', 1340, 90, 5),
('Escova dental', 'Faça uma limpeza profunda com a tecnologia inovadora', 1000, 44, 5),
('Balde para lixo 50l', 'Possui tampa e fabricado com material reciclado', 2290, 55, 5),
('Manga', 'Rico em Vitamina A, potássio e vitamina C', 198, 176, 1),
('Uva', 'NÃO CONTÉM GLÚTEN.', 420, 90, 1);

INSERT INTO clientes
(cpf, nome)
VALUES
(80371350042, 'José Augusto Silva'),
(67642869061, 'Antonio Oliveira'),
(63193310034, 'Ana Rodrigues'),
(75670505018, 'Maria da Conceição');

INSERT INTO vendedores
(cpf, nome)
VALUES
(82539841031, 'Rodrigo Sampaio'),
(23262546003, 'Beatriz Souza Santos'),
(28007155023, 'Carlos Eduardo');


----------------Pedido a

INSERT INTO pedidos
(valor, cliente_cpf, vendedor_cpf)
VALUES
(9650, 80371350042, 28007155023);

INSERT INTO itens_do_pedido
(pedido_id , quantidade, produto_id)
VALUES
(1, 1, 1),
(1, 1, 10),
(1, 6, 11),
(1, 1, 15),
(1, 5, 2);

SELECT * FROM produtos WHERE id = 1;
UPDATE produtos SET quantidade_em_estoque = 123-1 WHERE id = 1;

SELECT * FROM produtos WHERE id = 10;
UPDATE produtos SET quantidade_em_estoque = 12-1 WHERE id = 10;

SELECT * FROM produtos WHERE id = 11;
UPDATE produtos SET quantidade_em_estoque = 500-6 WHERE id = 11;

SELECT * FROM produtos WHERE id = 15;
UPDATE produtos SET quantidade_em_estoque = 44-1 WHERE id = 15;

SELECT * FROM produtos WHERE id = 2;
UPDATE produtos SET quantidade_em_estoque = 34-5 WHERE id = 2;


----------------Pedido b

INSERT INTO pedidos
(valor, cliente_cpf, vendedor_cpf)
VALUES
(6460, 63193310034, 23262546003);

INSERT INTO itens_do_pedido
(pedido_id , quantidade, produto_id)
VALUES
(2, 10, 17),
(2, 3, 18),
(2, 5, 1),
(2, 10, 5),
(2, 2, 6);

SELECT * FROM produtos WHERE id = 17;
UPDATE produtos SET quantidade_em_estoque = 176-10 WHERE id = 17;

SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id =2 and produto_id = 18;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 18 and pedido_id = 2
  )
WHERE id = 18;


SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id =2 and produto_id = 1;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 1 and pedido_id = 2
  )
WHERE id = 1;


SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id =2 and produto_id = 5;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 5 and pedido_id = 2
  )
WHERE id = 5;

SELECT * FROM produtos WHERE id = 6;
UPDATE produtos SET quantidade_em_estoque = 176-10 WHERE id = 6;

SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id = 2 and produto_id = 6;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 6 and pedido_id = 2
  )
WHERE id = 6;


----------------Pedido c
INSERT INTO pedidos
(valor, cliente_cpf, vendedor_cpf)
VALUES
(4120, 75670505018, 23262546003);

INSERT INTO itens_do_pedido
(pedido_id , quantidade, produto_id)
VALUES
(3, 1, 13),
(3, 6, 12),
(3, 5, 17);

SELECT * FROM produtos WHERE id = 17;
---
SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id = 3 and produto_id = 13;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 13 and pedido_id = 3
  )
WHERE id = 13;

---
SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id = 3 and produto_id = 12;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 12 and pedido_id = 3
  )
WHERE id = 12;

---
SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id = 3 and produto_id = 17;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 17 and pedido_id = 3
  )
WHERE id = 17;


----------------Pedido d
INSERT INTO pedidos
(valor, cliente_cpf, vendedor_cpf)
VALUES
(9370, 75670505018, 82539841031);

INSERT INTO itens_do_pedido
(pedido_id , quantidade, produto_id)
VALUES
(4, 1, 16),
(4, 6, 18),
(4, 1, 7),
(4, 3, 1),
(4, 20, 5),
(4, 2, 6);

SELECT * FROM produtos WHERE id = 6;

---
SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id = 4 and produto_id = 16;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 16 and pedido_id = 4
  )
WHERE id = 16;

---
SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id = 4 and produto_id = 18;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 18 and pedido_id = 4
  )
WHERE id = 18;

---
SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id = 4 and produto_id = 7;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 7 and pedido_id = 4
  )
WHERE id = 7;

---
SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id = 4 and produto_id = 1;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 1 and pedido_id = 4
  )
WHERE id = 1;

---
SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id = 4 and produto_id = 5;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 5 and pedido_id = 4
  )
WHERE id = 5;

---
SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id = 4 and produto_id = 6;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 6 and pedido_id = 4
  )
WHERE id = 6;


----------------Pedido e
INSERT INTO pedidos
(valor, cliente_cpf, vendedor_cpf)
VALUES
(9705, 67642869061, 82539841031);

INSERT INTO itens_do_pedido
(pedido_id , quantidade, produto_id)
VALUES
(5, 8, 18),
(5, 1, 8),
(5, 3, 7),
(5, 8, 5),
(5, 2, 11);

SELECT * FROM produtos WHERE id = 11;

---
SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id = 5 and produto_id = 18;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 18 and pedido_id = 5
  )
WHERE id = 18;

---
SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id = 5 and produto_id = 8;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 8 and pedido_id = 5
  )
WHERE id = 8;

---
SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id = 5 and produto_id = 7;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 7 and pedido_id = 5
  )
WHERE id = 7;

---
SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id = 5 and produto_id = 5;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 5 and pedido_id = 5
  )
WHERE id = 5;

---
SELECT 
quantidade, produtos.id as id_from_produtos, quantidade_em_estoque 
FROM itens_do_pedido 
join produtos on produto_id = produtos.id  
WHERE pedido_id = 5 and produto_id = 11;

UPDATE produtos  
SET quantidade_em_estoque = quantidade_em_estoque - (
  SELECT quantidade FROM itens_do_pedido WHERE produto_id = 11 and pedido_id = 5
  )
WHERE id = 11;

----- Questão 6

--a 
SELECT a.id, a.nome, a.descricao, a.preco, a.quantidade_em_estoque, b.nome as categoria FROM produtos a
join categorias b on a.categoria_id = b.id;

--b 
SELECT 
a.id, a.valor, b.nome as vendedor, c.nome as cliente 
FROM 
pedidos a
join vendedores b on a.vendedor_cpf = b.cpf
join clientes c on a.cliente_cpf = c.cpf;


--c
SELECT
b.nome as categoria, sum(a.quantidade_em_estoque)
FROM 
produtos a
join categorias b on a.categoria_id = b.id
GROUP BY b.nome;

--d
SELECT a.id, a.nome, a.descricao, a.preco, a.quantidade_em_estoque, a.categoria_id, sum(b.quantidade) as qtd_vendida  
FROM produtos a
full join itens_do_pedido b on a.id = b.produto_id
GROUP BY a.id;
