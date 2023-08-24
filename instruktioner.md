# Instruktioner

## Installation

WSL och nvm. Se guide på [jensa.dev](https://jensa.dev/posts/webbserver-programmering/).
Kör node LTS, 18+.

Se till att du installerar wsl för vscode.

Skapa nytt projekt med Vite.

```bash
npm create vite@latest
```

Välj vanilla JS, inget framework.

```bash
cd <project-name>
npm install
npm run dev
```

## Om vite

Du kan alltid läsa mer på [vitejs.dev](https://vitejs.dev/).

Vite är ett byggsystem som använder moderna webbtekniker för att skapa en snabb utvecklingsmiljö. Det är enkelt att komma igång med och det finns många plugins som gör det enkelt att lägga till funktionalitet.

Vite ger dig en utvecklingsserver att jobba mot och en byggprocess som skapar en optimerad version av din webbplats. Den optimerade versionen kan du sedan publicera på en webbserver.

### Filer

När du skapar ett nytt projekt med Vite så skapas en mappstruktur som ser ut så här:

```bash
.
├── index.html
├── package.json
├── main.js
├── /public
```

I den strukturen så kan du lägga till fler filer och mappar. Vite kommer att känna av dem och inkludera dem i byggprocessen.
För statiska filer som du vill komma åt direkt från webbläsaren så kan du lägga dem i mappen `public`.
Andra resurser som du vill använda i din kod kan du lägga i en mapp som heter `assets`, eller i root-mappen. Du laddar sedan in dem i din kod med hjälp av `import`.

** Studera filerna i exempelprojektet för att se hur det fungerar. **
Kolla hur de hör samman och hur de laddas.


