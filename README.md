# 📱 Elden Ring Guide

Aplicativo mobile desenvolvido com React Native e TypeScript que consome uma API pública de Elden Ring para exibir informações sobre os chefes do jogo.

O projeto foi desenvolvido como atividade da disciplina de **Tópicos Especiais de Informática**, aplicando conceitos de desenvolvimento mobile, consumo de APIs, navegação entre telas e gerenciamento de estado global.

---

## 📚 Sobre o Projeto

O Elden Ring Guide permite que o usuário consulte informações sobre diversos chefes do universo de Elden Ring, visualize detalhes de cada inimigo e gerencie uma lista de favoritos.

O aplicativo utiliza dados obtidos em tempo real através da API pública de Elden Ring.

---

## 🚀 Funcionalidades

- 📋 Listagem de chefes
- 🔍 Busca de chefes por nome
- 📖 Tela de detalhes
- 🖼️ Exibição de imagem dos chefes
- 📍 Exibição da região onde o chefe é encontrado
- ⭐ Sistema de favoritos
- 🌐 Consumo de API externa
- 🔄 Gerenciamento de estado global com Context API
- ⚙️ Gerenciamento de estado complexo com useReducer
- 📱 Interface responsiva para dispositivos móveis

---

## 🛠️ Tecnologias Utilizadas

- React Native
- TypeScript
- Expo
- React Navigation
- Context API
- useReducer
- Fetch API

---

## 🌐 API Utilizada

Elden Ring API

https://eldenring.fanapis.com/

---

## 📂 Estrutura do Projeto

```text
src/
├── components/
│   └── BossCard.tsx
│
├── context/
│   └── FavoritesContext.tsx
│
├── navigation/
│   └── AppNavigator.tsx
│
├── screens/
│   ├── HomeScreen.tsx
│   ├── BossDetailsScreen.tsx
│   └── FavoritesScreen.tsx
│
└── services/
    └── api.ts
```


## ▶️ Como Executar

### 1. Clonar o repositório

```bash
git clone https://github.com/pamelacandiani/elden-ring-guide.git
```

### 2. Acessar a pasta

```bash
cd elden-ring-guide
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Executar o projeto

```bash
npx expo start
```

### 5. Abrir no dispositivo

- Expo Go (Android/iOS)
- Emulador Android
- Simulador iOS

---

## 📋 Requisitos Aplicados

Este projeto contempla os seguintes conceitos:

- Consumo de API externa
- Navegação entre telas
- Passagem de parâmetros
- Hooks React
  - useState
  - useEffect
  - useReducer
- Context API
- Componentização
- Tratamento de carregamento e erros

---

## 👥 Participantes

- Pamela Candiani
- Douglas Rodrigues

---

## ⚠️ Observações

Projeto desenvolvido exclusivamente para fins acadêmicos.