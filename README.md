# 🕹️ Mini-Jogos

Arcade web com uma coleção de jogos casuais, feito em **HTML, CSS e JavaScript puro** — sem dependências e sem build. Basta abrir no navegador.

## Jogos

| Jogo | Descrição | Controles |
|------|-----------|-----------|
| 🧗 **Explorador 3D** 🎮 | Platformer **3D (WebGL/Three.js)** com câmera em 3ª pessoa, sombras e **fases infinitas** procedurais por biomas. **Instalável** (PWA) | WASD/setas, Espaço, analógico+toque |
| 🏃 **Corredor Infinito** 🏆 | Runner com cenários realistas e **fases infinitas** (procedurais). **Instalável como app** (PWA) | Espaço/↑ pular, ↓ deslizar, toque |
| 🎮 **Aventura Neon** ✨ | Platformer com 5 fases + chefão final: inimigos, moedas e plataformas móveis | Setas/WASD, Espaço, toque |
| 🧠 **Jogo da Memória** | Encontre todos os pares no menor número de jogadas | Clique/toque |
| 🐍 **Snake** | Coma, cresça e não bata em si mesmo | Setas / WASD / D-pad / swipe |
| 🔢 **2048** | Combine os números até chegar a 2048 | Setas / swipe |
| ❓ **Quiz Relâmpago** | Responda perguntas contra o tempo | Clique / teclas 1–4 / A–D |

Cada jogo salva o **recorde** (e o progresso das fases) localmente no navegador (`localStorage`).

### 🧗 Explorador 3D (jogo 3D real, PWA instalável)
Um platformer **3D de verdade no navegador**, feito com **Three.js (WebGL)** — biblioteca vendorizada
localmente em `vendor/three.min.js` (funciona offline). Câmera em **3ª pessoa** seguindo um personagem
3D animado (corrida, pulo, agachar no ar) que **projeta sombra**, com **iluminação** (sol direcional +
hemisférica), **céu em gradiente**, névoa e tone mapping cinematográfico. As **fases são infinitas e
geradas proceduralmente** a partir do número da fase, com plataformas flutuantes, cristais e decoração
(árvores, pinheiros, cactos, rochas) por **5 biomas**: Campos, Deserto, Montanhas Nevadas, Terras
Vulcânicas e Floresta Noturna.

A geração é **garantidamente transponível**: a distância combinada (lacuna + desvio lateral) nunca
excede a envoltória do pulo, e a dificuldade sobe e estabiliza num nível justo. Verificado por um bot
3D automatizado — **zero mortes** navegando as Fases 1, 5, 15 e 40. É **PWA instalável** (manifest +
service worker offline + ícones) com controles de teclado e **analógico virtual + botão de pulo** no celular.

Observação honesta: isto é um jogo 3D web (WebGL), não um título AAA em Unreal Engine com MetaHuman/Nanite/
Lumen — esse tipo de produção exige a Unreal, artistas 3D e build para console, fora do que se entrega aqui.

### 🏃 Corredor Infinito (PWA instalável)
Um runner lateral com **cenários realistas do mundo real** que se alternam a cada 4 fases: cidade ao
entardecer, floresta, cidade noturna com chuva, deserto e montanha nevada — cada um com parallax,
iluminação e clima. As **fases são geradas proceduralmente** a partir do número da fase (a Fase N é sempre
igual), então são praticamente infinitas e com dificuldade crescente. Pule sobre buracos e barreiras e
**deslize** sob os obstáculos suspensos. Personagem humano animado, moedas, vidas e sons via Web Audio.

É um **PWA instalável**: `manifest.webmanifest` + `sw.js` (service worker com cache offline) + ícones.
No celular, use **“Adicionar à tela inicial”** (ou o botão *Instalar*) para rodar em tela cheia como um app.
A solvabilidade das fases foi verificada por um bot automatizado da Fase 1 à 5000 (zero game overs).

### 🎮 Aventura Neon
Um platformer completo feito em Canvas: física com pulo variável, coyote-time e buffer de pulo;
inimigos que andam e voam (derrote pisando na cabeça); espinhos, buracos, plataformas móveis;
moedas, vidas e corações; **5 fases** com temas diferentes e dificuldade crescente; e um
**chefão final** que persegue, pula e atira. Sons gerados via Web Audio (sem arquivos externos)
e controles de toque para celular. Todas as fases foram verificadas como vencíveis por um bot automatizado.

## Como usar

Abra `index.html` no navegador. Por ser um site 100% estático, também pode ser publicado gratuitamente no **GitHub Pages** (Settings → Pages → Deploy from branch → `main` / root).

## Estrutura

```
.
├── index.html          # hub / seleção de jogos
├── aventura3d/         # 🧗 Explorador 3D (platformer 3D WebGL, PWA)
│   ├── index.html
│   ├── vendor/three.min.js
│   ├── manifest.webmanifest · sw.js · icon-*.png
├── corrida/            # 🏃 Corredor Infinito (runner procedural, PWA)
│   ├── index.html
│   ├── manifest.webmanifest
│   ├── sw.js           # service worker (offline)
│   └── icon-*.png      # ícones do app
├── plataforma/
│   └── index.html      # 🎮 Aventura Neon (platformer)
├── memoria.html        # Jogo da Memória
├── snake.html          # Snake
├── 2048.html           # 2048
├── quiz.html           # Quiz Relâmpago
└── style.css           # estilo compartilhado do arcade
```
