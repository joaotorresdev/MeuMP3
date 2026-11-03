# Meu Player MP3

Player de música local para desktop, feito para quem tem os MP3 organizados em pastas. Cada pasta vira uma playlist automaticamente, com capa, título e artista lidos direto das tags dos arquivos.

Os arquivos nunca saem do seu computador: nada é enviado para a internet.

## Funcionalidades

- **Playlists por pasta:** arraste uma pasta de reggae, outra de rock, e cada uma vira uma playlist na barra lateral.
- **Tags ID3:** mostra capa do álbum, título, artista e álbum. Sem tag, usa o nome do arquivo.
- **Controles completos:** play/pausa, anterior, próxima, barra de progresso, volume e mudo (o volume fica salvo).
- **Modos de reprodução:** aleatório, repetir tudo e repetir uma faixa.
- **Busca** dentro da playlist.
- **Arrastar e soltar** pastas ou arquivos de qualquer lugar da janela.
- **Teclas de mídia** do teclado e integração com os controles do sistema.
- **Tema claro e escuro**, de acordo com o sistema.

### Atalhos

| Tecla | Ação |
|---|---|
| `Espaço` | Tocar / pausar |
| `←` `→` | Voltar / avançar 5 segundos |
| `Shift` + `←` `→` | Faixa anterior / próxima |
| `↑` `↓` | Aumentar / diminuir volume |

## Baixar o programa (Windows)

Baixe o `Meu Player MP3 1.0.0.exe` na página de [Releases](../../releases) e dê dois cliques. É portátil: não precisa instalar nada, nem o Node.js.

> O Windows pode mostrar o aviso "O Windows protegeu seu computador", porque o programa não tem assinatura digital. Clique em **Mais informações** e depois em **Executar assim mesmo**.

## Como usar

1. Abra o programa.
2. Arraste suas pastas de MP3 para a janela, ou use **Adicionar pasta** / **Adicionar arquivos MP3**.
3. Escolha uma playlist na barra lateral e clique em uma música.

## Gerar o executável você mesmo

Requisito: [Node.js](https://nodejs.org) (versão LTS).

**Windows:** dê dois cliques em `gerar-executavel.bat`. O `.exe` aparece na pasta `dist`.

**Pelo terminal:**

```bash
npm install
npm start       # abre o app para testar
npm run dist    # gera o .exe portátil na pasta dist
```

Para testar sem gerar o `.exe`, use também o `testar-sem-gerar.bat`.

## Estrutura do projeto

```
index.html   → interface e lógica do player (arquivo único)
main.js      → janela do Electron
package.json → dependências e configuração de build
```

## Limitações

- A biblioteca não é salva ao fechar: é preciso arrastar as pastas de novo a cada uso.
- A versão `.exe` gerada é apenas para Windows.
- Formatos testados: MP3. Outros formatos de áudio (M4A, OGG, WAV, FLAC) são aceitos, mas a leitura de capa e tags é feita apenas para ID3.

## Tecnologias

HTML, CSS e JavaScript puros, empacotados com [Electron](https://www.electronjs.org) e [electron-builder](https://www.electron.build).
