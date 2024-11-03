CREATE DATABASE projeto_db;

USE projeto_db;

-- Tabela para usuários
CREATE TABLE usuarios (
  nome VARCHAR(100),
  email VARCHAR(100),
  senha VARCHAR(100)
);

SELECT * FROM usuarios;

-- Tabela para produtos
CREATE TABLE produtos (
  nome VARCHAR(100),
  descricao TEXT,
  preco DECIMAL(10, 2)
);

SELECT * FROM produtos;

-- Tabela para categorias
CREATE TABLE categorias (
  nome VARCHAR(100)
);

SELECT * FROM categorias;




-- Tabela para pedidos
CREATE TABLE pedidos (
  nome_cliente VARCHAR(100),
  produto VARCHAR(100),
  quantidade INT
);
