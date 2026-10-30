# Ponto Criativo — exercício de Bootstrap

Projeto estático em português para praticar componentes e utilitários do **Bootstrap 4.6.2**. O nome e o conteúdo são demonstrativos: personalize a identidade, os textos e os canais de contato antes de publicar como um negócio real.

## Páginas

- `index.html` — navegação responsiva, chamada principal, cards, acordeão e chamadas para ação.
- `sobre.html` — conteúdo semântico, cards de valores e linha do tempo.
- `servicos.html` — cards, badges, listas, âncoras e acordeão de etapas.
- `contato.html` — formulário com validação no navegador e feedback de demonstração.

## Como abrir

Abra `index.html` no navegador ou execute um servidor local nesta pasta, por exemplo:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`. Bootstrap, jQuery e Popper são carregados por CDN, então os componentes interativos precisam de conexão com a internet.

## Formulário

O formulário de contato **não envia nem armazena dados**: valida os campos no navegador e exibe uma mensagem informativa. Para receber mensagens, conecte-o a um backend ou serviço apropriado e atualize a explicação na página.

## Personalização

- Altere a marca e os textos nos quatro arquivos HTML.
- Ajuste cores, tipografia e pontos de quebra em `css/estilos.css`.
- A validação e o preenchimento opcional do assunto ficam em `js/script.js`.
- As antigas imagens em `img/` estão vazias e não são utilizadas pelas páginas atuais.
