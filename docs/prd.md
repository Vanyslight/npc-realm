# 📄 Product Requirements Document (PRD) - NPCRealm

## 1. Visão Geral e Objetivo

O **NPCRealm** é uma plataforma web que atua como uma biblioteca digital estática focada em catalogar e consultar narrativas e elencos de personagens de diferentes jogos.

**O grande diferencial (Regra de Negócio Principal):** Ao contrário das wikis tradicionais que possuem layouts poluídos e textos excessivamente densos, o NPCRealm organiza os dados em uma estrutura visual de aprofundamento contínuo (Catálogo > Obra > Personagem). O sistema entrega a informação essencial de forma direta, envelopado em uma interface imersiva com temática rústica e medieval construída sobre o framework Bootstrap.

## 2. Atores do Sistema

- **Visitante:** Usuário não autenticado que chega aos portões do reino e precisa se identificar para visualizar os registros.
- **Cronista:** Usuário autenticado que possui acesso completo ao sistema, podendo tanto explorar o acervo e ler as fichas, quanto utilizar a "Forja" para cadastrar novas obras e personagens na biblioteca.

## 3. Histórias de Usuário e Escopo

Abaixo estão as funcionalidades principais do MVP (Minimum Viable Product), escritas sob a perspectiva do usuário final.

### 👤 Épico 1: Autenticação e Acesso

- **US01 - Acesso ao Reino (Login):** Como um Visitante, quero preencher um formulário com meu Nome de Guardião e Senha do Códice para acessar a biblioteca.
  - _Critérios de Aceitação:_ Os campos devem ser estilizados com a identidade escurecida do reino; todos os campos são obrigatórios; a autenticação deve redirecionar o usuário diretamente para o catálogo principal.

### 📚 Épico 2: Exploração do Acervo

- **US02 - Visualização do Catálogo (Salão Principal):** Como um Cronista, quero visualizar uma grade com as capas e os títulos de todos os jogos cadastrados no sistema, para escolher qual história explorar.
  - _Critérios de Aceitação:_ A listagem deve usar o sistema de Grid e Cards do Bootstrap, garantindo responsividade em dispositivos móveis e desktop.
- **US03 - Visualização do Pergaminho da Obra:** Como um Cronista, ao selecionar um jogo, quero ver a capa, a descrição da obra e a galeria de avatares circulares de todos os personagens (o elenco).

### ⚔️ Épico 3: A Forja (Cadastro de Conteúdo)

- **US05 - Forjar Nova Obra:** Como um Cronista, quero acessar um formulário para cadastrar um novo jogo, inserindo o título, plataforma, ano de lançamento, imagem da capa e descrição.
  - _Critérios de Aceitação:_ Os campos de input e text area devem utilizar as classes do Bootstrap customizadas para o tema medieval; o sistema deve possuir um botão para limpar o formulário e um botão de ação temático para "Confirmar Registro".
