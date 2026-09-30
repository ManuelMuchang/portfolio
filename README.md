# Portfólio — Manuel Muchanga

Site pessoal com os meus projetos web e mobile, feito com **Next.js 15**, **React 19** e **TypeScript**.

## Correr localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Editar o conteúdo

Todo o texto está em **`data/portfolio.ts`**: perfil, projetos, tecnologias e formação.

- Para mostrar o link de um site publicado, preenche o campo `site` desse projeto.
- Para trocar a imagem de um projeto, coloca o ficheiro em `public/projects/` e indica o caminho em `panel.image`, com `imageKind: "screenshot"`.
- O CV descarregável está em `public/cv/Manuel_Muchanga_CV.pdf`. Substitui o ficheiro para o actualizar.

## Estrutura

```
app/
  layout.tsx      tipos de letra e metadados (título, descrição)
  page.tsx        página inicial
  globals.css     estilos e cores
components/
  Portfolio.tsx   todas as secções da página
data/
  portfolio.ts    conteúdo
public/
  cv/             CV em PDF
  projects/       capturas de ecrã e logótipos
```

## Publicar na Vercel

1. Cria um repositório no GitHub (por exemplo `portfolio`) e faz push deste projeto.
2. Em [vercel.com](https://vercel.com), escolhe **Add New → Project** e importa o repositório.
3. Mantém as definições por omissão e clica em **Deploy**.

Cada push para a branch `main` volta a publicar o site automaticamente.
