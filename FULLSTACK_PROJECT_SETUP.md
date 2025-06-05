# Guia Completo para Configuração de Projetos Full-Stack

Este guia serve como referência para configurar projetos full-stack usando React/TypeScript no frontend e Node.js/Express no backend.

## Índice

1. [Estruturas de Projeto](#estruturas-de-projeto)
2. [Configuração do Frontend](#configuração-do-frontend)
3. [Configuração do Backend](#configuração-do-backend)
4. [Comunicação Frontend-Backend](#comunicação-frontend-backend)
5. [Compartilhando Tipos entre Frontend e Backend](#compartilhando-tipos)
6. [Configuração de Ambientes](#configuração-de-ambientes)
7. [Estratégias de Autenticação](#estratégias-de-autenticação)
8. [Implantação](#implantação)
9. [Práticas Recomendadas](#práticas-recomendadas)
10. [Exemplos de Comandos](#exemplos-de-comandos)

## Estruturas de Projeto

### Opção 1: Pastas Separadas no Mesmo Repositório

```
/meu-projeto/
├── frontend/          # Código React/TypeScript/Vite
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── backend/           # Código do servidor
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── config/
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

### Opção 2: Monorepo com Workspaces

```
/meu-projeto/
├── packages/
│   ├── frontend/      # Código React/TypeScript/Vite
│   ├── backend/       # Código do servidor
│   └── shared/        # Código compartilhado (tipos, utilitários)
├── package.json
└── README.md
```

## Configuração do Frontend

### Iniciando um Projeto React com Vite e TypeScript

```bash
# Criando o projeto
npm create vite@latest frontend -- --template react-ts

# Instalando dependências comuns
cd frontend
npm install react-router-dom axios styled-components framer-motion i18next react-i18next react-helmet-async
npm install -D @types/styled-components
```

### Configurações Recomendadas do Vite (vite.config.ts)

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
```

## Configuração do Backend

### Iniciando um Projeto Express com TypeScript

```bash
# Criando a estrutura
mkdir -p backend/src/controllers backend/src/models backend/src/routes backend/src/middleware backend/src/config

# Inicializando package.json
cd backend
npm init -y

# Instalando dependências
npm install express cors dotenv mongoose jsonwebtoken bcrypt
npm install -D typescript ts-node nodemon @types/express @types/node @types/cors @types/jsonwebtoken @types/bcrypt
```

### Arquivo tsconfig.json para o Backend

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}
```

### Arquivo package.json para o Backend

```json
{
  "scripts": {
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts",
    "build": "tsc -p ."
  }
}
```

### Estrutura Básica do Backend (src/index.ts)

```typescript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Configuração
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
import authRoutes from './routes/auth';
import contactRoutes from './routes/contact';

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

// Conexão com banco de dados
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

## Comunicação Frontend-Backend

### Configuração do Axios no Frontend

```typescript
// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptador para incluir o token em cada requisição
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### Exemplo de Serviço de Contato

```typescript
// src/services/contactService.ts
import api from './api';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const response = await api.post('/contact', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
```

## Compartilhando Tipos

### Opção 1: Pacote Compartilhado (para monorepos)

```typescript
// packages/shared/types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}
```

### Opção 2: Duplicação Gerenciada

Criar uma pasta de tipos em ambos os projetos e manter sincronizada manualmente.

## Configuração de Ambientes

### Arquivo .env.example para Frontend

```
VITE_API_URL=http://localhost:3001
VITE_ENVIRONMENT=development
```

### Arquivo .env.example para Backend

```
PORT=3001
MONGODB_URI=mongodb://localhost:27017/meu-projeto
JWT_SECRET=sua_chave_secreta
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

## Estratégias de Autenticação

### JWT (JSON Web Token)

#### Backend: Middleware de Autenticação

```typescript
// src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  userId: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: DecodedToken;
    }
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido' });
  }
};
```

#### Frontend: Context de Autenticação

```typescript
// src/contexts/AuthContext.tsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextData {
  user: User | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStoredData = async () => {
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      
      if (storedToken && storedUser) {
        api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
        setUser(JSON.parse(storedUser));
      }
      
      setLoading(false);
    };

    loadStoredData();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token, user } = response.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(user);
    } catch (error) {
      throw error;
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    api.defaults.headers.common['Authorization'] = '';
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```

## Implantação

### Frontend: Vercel ou Netlify

1. **Netlify**:
   - Conecte seu repositório GitHub
   - Defina o comando de build: `cd frontend && npm run build`
   - Defina o diretório de publicação: `frontend/dist`
   - Configure variáveis de ambiente

2. **Vercel**:
   - Conecte seu repositório GitHub
   - Defina o diretório raiz: `frontend`
   - Configure variáveis de ambiente

### Backend: Render, Railway ou Heroku

1. **Render**:
   - Crie um novo Web Service
   - Conecte seu repositório GitHub
   - Defina o diretório raiz: `backend`
   - Comando de build: `npm install && npm run build`
   - Comando de início: `npm start`
   - Configure variáveis de ambiente

2. **Railway**:
   - Conecte seu repositório GitHub
   - Defina o diretório raiz: `backend`
   - Configure variáveis de ambiente

## Práticas Recomendadas

1. **Segurança**:
   - Nunca exponha chaves secretas no código
   - Use HTTPS em produção
   - Sanitize entradas de usuário
   - Implemente rate limiting

2. **Organização do Código**:
   - Siga o princípio de responsabilidade única
   - Use módulos para organizar código relacionado
   - Documente APIs com JSDoc ou Swagger

3. **Versionamento**:
   - Use Semantic Versioning para seu API
   - Documente mudanças no API

4. **Testes**:
   - Implemente testes unitários para lógica de negócios
   - Adicione testes de integração para APIs
   - Use testes end-to-end para fluxos críticos

5. **CI/CD**:
   - Configure GitHub Actions ou outro sistema CI/CD
   - Automatize testes e implantação

## Exemplos de Comandos

### Iniciar Desenvolvimento

```bash
# Terminal 1 (Frontend)
cd frontend
npm run dev

# Terminal 2 (Backend)
cd backend
npm run dev
```

### Build para Produção

```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
npm run build
```

---

Este guia é uma referência para iniciar projetos full-stack. Adapte as configurações e estruturas de acordo com as necessidades específicas do seu projeto.

Para dúvidas ou problemas, consulte a documentação oficial das ferramentas utilizadas ou procure ajuda nas comunidades respectivas.

Última atualização: 2024 