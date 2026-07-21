# 🧗 Explorador 3D

Um **platformer 3D no navegador** com **fases infinitas geradas proceduralmente**, câmera em 3ª pessoa,
iluminação com sombras e um mundo cheio de vida. Feito em **HTML + JavaScript + Three.js (WebGL)** — sem
build e sem servidor. Basta abrir `index.html`.

## Como jogar
- **Mover:** `W A S D` ou setas
- **Pular:** `Espaço` (segure para pular mais alto; tem coyote-time e buffer)
- **Pausar:** `P` / `Esc`
- **Celular:** analógico virtual à esquerda, botão **PULAR** à direita

Salte entre as plataformas flutuantes, colete **cristais** e vá o mais longe que conseguir. A cada trecho
você avança de fase e o cenário muda de bioma; a dificuldade sobe e estabiliza num nível justo.

## Destaques
- **3D de verdade (Three.js/WebGL)** — biblioteca vendorizada em `vendor/three.min.js` (funciona offline)
- **Câmera em 3ª pessoa** seguindo um personagem 3D animado (corrida, pulo, agachar no ar) que projeta sombra
- **Iluminação** com sol direcional + sombras PCF e luz hemisférica, **céu em gradiente** (shader), névoa e
  tone mapping ACES Filmic
- **Fases infinitas procedurais** deterministas (a Fase N é sempre igual), sempre transponíveis: a distância
  combinada (lacuna + desvio lateral) nunca excede a envoltória do pulo — verificado geometricamente da
  Fase 1 à 100 (zero saltos fora do alcance)
- **6 personagens jogáveis** (Exploradora, Ninja, Robô, Astronauta, Mago e Cavaleiro) com tela de
  seleção 3D (prévia girando) e escolha salva no navegador
- **Desafio e recompensa:** inimigos que patrulham as plataformas (**pise na cabeça** para derrotá-los e
  ganhar pontos, ou desvie), **trampolins** que te lançam para colunas de **cristais bônus**, e um sistema
  de **combo + pontuação** com números que sobem na tela
- **"Suco" visual:** poeira ao aterrissar, explosão de partículas ao coletar/pisar, tremida de câmera e
  piscar de invencibilidade ao levar dano
- **Mundo vivo:** grama que balança ao vento (instanciada, no vertex shader), pássaros voando em revoada,
  borboletas, nuvens à deriva, árvores que balançam e **partículas de ambiente por bioma** — pólen (campos),
  poeira (deserto), neve, brasas (vulcão) e **vaga-lumes** (floresta noturna)
- **5 biomas:** Campos, Deserto, Montanhas Nevadas, Terras Vulcânicas e Floresta Noturna
- **PWA instalável:** `manifest.webmanifest` + `sw.js` (offline) + ícones — no celular use **“Adicionar à tela
  inicial”** para rodar em tela cheia como um app

## Estrutura
```
.
├── index.html              # o jogo
├── vendor/three.min.js     # Three.js (vendorizado, offline)
├── manifest.webmanifest    # PWA
├── sw.js                   # service worker (offline)
└── icon-*.png              # ícones do app
```

## Publicar (GitHub Pages)
Settings → Pages → Deploy from a branch → `main` / root. Em ~1 min o jogo fica em
`https://<usuario>.github.io/<repo>/` — e aí o botão **Instalar** funciona no celular (PWA exige HTTPS).

---

### Nota honesta sobre escopo
Este é um jogo **3D web (WebGL)**. Não é — e não dá para ser, neste ambiente — um título AAA em Unreal Engine
com MetaHuman/Nanite/Lumen, combate cinematográfico, co-op online e build de PS5/Xbox. Aquilo exige a Unreal
Engine, artistas 3D e pipeline de console. Este projeto é o **3D jogável e real** possível aqui.
