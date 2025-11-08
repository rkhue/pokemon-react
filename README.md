# Pokémon React

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-9.36.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Uma aplicação web interativa desenvolvida com React e Vite para criar e gerenciar uma lista de Pokémon personalizada.

## 📋 Sobre o Projeto

Este projeto é uma aplicação React moderna que permite aos usuários criar e visualizar cards de Pokémon com informações customizadas. A aplicação utiliza Vite como ferramenta de build para desenvolvimento rápido e eficiente.

## ✨ Funcionalidades

- ✅ Adicionar novos Pokémon através de um formulário interativo
- 🎨 Cards de Pokémon com cores dinâmicas baseadas no tipo
- 📝 Campos personalizáveis:
  - Nome do Pokémon
  - Tipo (Grama, Fogo, Água, Inseto, Normal, Veneno, Elétrico, Psíquico, Pedra, Terra)
  - Descrição
  - Nível de poder
- 🔄 Visualização em tempo real da lista de Pokémon
- 🎯 Interface limpa e responsiva

## 🚀 Tecnologias Utilizadas

- **React 19.1.1** - Biblioteca JavaScript para construção de interfaces
- **Vite 7.1.7** - Ferramenta de build rápida e moderna
- **ESLint** - Linter para manter a qualidade do código
- **CSS3** - Estilização dos componentes

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. Clone o repositório:
```bash
git clone https://github.com/rkhue/pokemon-react.git
```

2. Entre na pasta do projeto:
```bash
cd pokemon-react
```

3. Instale as dependências:
```bash
npm install
```

## 🎮 Como Usar

### Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

### Lint

Para verificar a qualidade do código:

```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
pokemon-react/
├── src/
│   ├── components/
│   │   ├── FormComponent.jsx      # Formulário para adicionar Pokémon
│   │   ├── FormComponent.css
│   │   ├── PokemonCard.jsx        # Card individual de Pokémon
│   │   ├── PokemonCard.css
│   │   ├── PokemonList.jsx        # Lista de Pokémon
│   │   └── PokemonList.css
│   ├── data/
│   │   └── pokemonData.js         # Gerenciamento de dados
│   ├── App.jsx                    # Componente principal
│   ├── App.css
│   ├── main.jsx                   # Ponto de entrada
│   └── index.css
├── public/                        # Arquivos públicos
├── index.html                     # HTML principal
├── package.json
├── vite.config.js                 # Configuração do Vite
└── eslint.config.js               # Configuração do ESLint
```

## 🎨 Tipos de Pokémon e Cores

A aplicação suporta os seguintes tipos de Pokémon, cada um com sua cor característica:

| Tipo | Cor |
|------|-----|
| Grama (grass) | Verde (#78C850) |
| Fogo (fire) | Vermelho (#F08030) |
| Água (water) | Azul (#6890F0) |
| Inseto (bug) | Verde-Amarelo (#A8B820) |
| Normal (normal) | Bege (#A8A878) |
| Veneno (poison) | Roxo (#A040A0) |
| Elétrico (electric) | Amarelo (#F8D030) |
| Psíquico (psychic) | Rosa (#F85888) |
| Pedra (rock) | Marrom (#B8A038) |
| Terra (ground) | Marrom-Claro (#E0C068) |

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

Desenvolvido por [rkhue](https://github.com/rkhue)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
