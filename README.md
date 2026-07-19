# 🕹️ Mini-Jogos

Arcade web com uma coleção de jogos casuais, feito em **HTML, CSS e JavaScript puro** — sem dependências e sem build. Basta abrir no navegador.

## Jogos

| Jogo | Descrição | Controles |
|------|-----------|-----------|
| 🏃 **Corredor Infinito** 🏆 | Runner com cenários realistas e **fases infinitas** (procedurais). **Instalável como app** (PWA) | Espaço/↑ pular, ↓ deslizar, toque |
| 🎮 **Aventura Neon** ✨ | Platformer com 5 fases + chefão final: inimigos, moedas e plataformas móveis | Setas/WASD, Espaço, toque |
| 🧠 **Jogo da Memória** | Encontre todos os pares no menor número de jogadas | Clique/toque |
| 🐍 **Snake** | Coma, cresça e não bata em si mesmo | Setas / WASD / D-pad / swipe |
| 🔢 **2048** | Combine os números até chegar a 2048 | Setas / swipe |
| ❓ **Quiz Relâmpago** | Responda perguntas contra o tempo | Clique / teclas 1–4 / A–D |

Cada jogo salva o **recorde** (e o progresso das fases) localmente no navegador (`localStorage`).

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
