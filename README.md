# 🕹️ Mini-Jogos

Arcade web com uma coleção de jogos casuais, feito em **HTML, CSS e JavaScript puro** — sem dependências e sem build. Basta abrir no navegador.

## Jogos

| Jogo | Descrição | Controles |
|------|-----------|-----------|
| 🧠 **Jogo da Memória** | Encontre todos os pares no menor número de jogadas | Clique/toque |
| 🐍 **Snake** | Coma, cresça e não bata em si mesmo | Setas / WASD / D-pad / swipe |
| 🔢 **2048** | Combine os números até chegar a 2048 | Setas / swipe |
| ❓ **Quiz Relâmpago** | Responda perguntas contra o tempo | Clique / teclas 1–4 / A–D |

Cada jogo salva o **recorde** localmente no navegador (`localStorage`).

## Como usar

Abra `index.html` no navegador. Por ser um site 100% estático, também pode ser publicado gratuitamente no **GitHub Pages** (Settings → Pages → Deploy from branch → `main` / root).

## Estrutura

```
.
├── index.html     # hub / seleção de jogos
├── memoria.html   # Jogo da Memória
├── snake.html     # Snake
├── 2048.html      # 2048
├── quiz.html      # Quiz Relâmpago
└── style.css      # estilo compartilhado do arcade
```
