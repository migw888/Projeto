# 📚 Sistema de Biblioteca - API REST

Uma API REST desenvolvida em **Node.js**, utilizando **Express** e **MySQL**, com autenticação de usuários e gerenciamento de uma biblioteca. O sistema permite o cadastro e gerenciamento de **usuários**, **autores**, **livros** e **empréstimos**, seguindo os princípios de uma API RESTful.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- MySQL
- JavaScript (ESModules)
- JWT (JSON Web Token)
- Dotenv
- Git
- GitHub

---

## 📌 Funcionalidades

### 🔐 Autenticação
- Login de usuários com autenticação JWT.

### 👤 Usuários
- Cadastrar usuário
- Atualizar usuário
- Excluir usuário
- Listar usuários
- Buscar usuário por ID

### ✍️ Autores
- Cadastrar autor
- Atualizar autor
- Excluir autor
- Listar autores
- Buscar autor por ID

### 📖 Livros
- Cadastrar livro
- Atualizar livro
- Excluir livro
- Listar livros
- Buscar livro por ID

### 📦 Empréstimos
- Registrar empréstimos
- Atualizar empréstimos
- Excluir empréstimos
- Listar empréstimos
- Buscar empréstimos por ID

---

## 🗄️ Banco de Dados

O projeto utiliza o **MySQL** para armazenamento das informações.

Entidades principais:

- Usuários
- Autores
- Livros
- Empréstimos

---

## 📡 Endpoints da API

### 🔐 Autenticação

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| POST | `/auth/login` | Realiza o login do usuário |

### 👤 Usuários

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| POST | `/users` | Cadastrar usuário |
| GET | `/users` | Listar usuários |
| GET | `/users/:id` | Buscar usuário por ID |
| PUT | `/users/:id` | Atualizar usuário |
| DELETE | `/users/:id` | Excluir usuário |

### ✍️ Autores

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| POST | `/autores` | Cadastrar autor |
| GET | `/autores` | Listar autores |
| GET | `/autores/:id` | Buscar autor por ID |
| PUT | `/autores/:id` | Atualizar autor |
| DELETE | `/autores/:id` | Excluir autor |

### 📖 Livros

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| POST | `/livros` | Cadastrar livro |
| GET | `/livros` | Listar livros |
| GET | `/livros/:id` | Buscar livro por ID |
| PUT | `/livros/:id` | Atualizar livro |
| DELETE | `/livros/:id` | Excluir livro |

### 📦 Empréstimos

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| POST | `/emprestimos` | Registrar empréstimo |
| GET | `/emprestimos` | Listar empréstimos |
| GET | `/emprestimos/:id` | Buscar empréstimo por ID |
| PUT | `/emprestimos/:id` | Atualizar empréstimo |
| DELETE | `/emprestimos/:id` | Excluir empréstimo |

---

## ⚙️ Como executar o projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2️⃣ Entre na pasta do projeto

```bash
cd seu-repositorio
```

### 3️⃣ Instale as dependências

```bash
npm install
```

### 4️⃣ Configure o arquivo `.env`

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=biblioteca

JWT_SECRET=sua_chave_secreta
```

### 5️⃣ Inicie o servidor

```bash
npm start
```

ou

```bash
npm run dev
```

---

## 📁 Estrutura do Projeto

```
📦 projeto
┣ 📂controllers
┣ 📂database
┣ 📂middleware
┣ 📂models
┣ 📂routes
┣ 📂services
┣ 📂config
┣ 📜app.js
┣ 📜server.js
┣ 📜package.json
┗ 📜README.md
```

---

## 💻 Objetivo

Este projeto foi desenvolvido com o objetivo de praticar conceitos de desenvolvimento Back-end, como:

- Desenvolvimento de APIs REST
- Organização em camadas (Controllers, Models e Routes)
- Integração com banco de dados MySQL
- Autenticação utilizando JWT
- Operações CRUD
- Boas práticas com Node.js e Express

---

## 👨‍💻 Equipe

| Nome | Função |
|------|--------|
| **Daniel Pires de Morais** | Desenvolvedor Back-end |
| **Miguel Farias** | Desenvolvedor Back-end |
| **Rafael Lucas Santana** | Desenvolvedor Back-end |

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e de aprendizado.

⭐ Se este projeto foi útil para você, deixe uma estrela no repositório!