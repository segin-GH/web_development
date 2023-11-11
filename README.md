
# Setup vite + tailwind + js

1. Create a vite project.
```sh
npm create vite@latest
```
2.Change dir to project name.
```sh
cd <project-name>
```
2. Install npm packages
```sh
npm install
```
3. Install tailwind css.
```sh
 npm install -D tailwindcss postcss autoprefixer
 npx tailwindcss init -p
```
4. Create style.css and link it with html
```html
<link rel="stylesheet" href="./style.css">
```
5. Copy css directives.
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
6. Run for dev.
```
npm run dev
```
7. Run for build.
```
npm run build
```
