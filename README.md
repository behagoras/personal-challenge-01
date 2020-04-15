# [Personal challenge 01](https://github.com/behagoras/personal-challenge-01)

## Brief

El desafío es construir una página de destino y hacer que se vea lo más cerca posible del diseño.
Puedes usar cualquier herramienta que desees para completar el desafío. Entonces, si tienes algo que te gustaría practicar, no dudes en probarlo.

Sus usuarios deberían poder:

- Ver el diseño óptimo para el sitio dependiendo del tamaño de la pantalla de su dispositivo.
- Vea los estados de desplazamiento para todos los elementos interactivos en la página.
- Filtra los listados de trabajo según las categorías seleccionadas.

## Filtrado 

### Opción1

Filtra los listados de trabajos basados en las categorías, usando el atributo HTML `data-`. En esta opción, usaría el contenido codificado que ya existe en el archivo [index.html] (./ index.html).
Las categorias son:

- Rol: Frontend, Backend, Fullstack
- Nivel: junior, mediano, senior
- Idiomas: Python, Ruby, JavaScript, HTML, CSS
- Herramientas: React, Sass, Vue, Django, RoR (Ruby on Rails)

Entonces, si una lista de trabajos es para las siguientes categorías `Frontend, Junior, JavaScript, React`, sus atributos de datos HTML se verían así:` data-role = "frontend" data-level = "junior" data-languages = "javascript "data-tools =" react "`.

### Opcion 2

Utiliza el archivo `./data.json` para extraer los datos y luego agregar dinámicamente el contenido. Esto sería perfecto si estás buscando practicar una biblioteca / marco JS como React, Vue o Svelte.

Para agregar un filtro, el usuario debe hacer clic en las tabletas en el lado derecho de la lista en el escritorio o en la parte inferior en el móvil. 

Para cada filtro agregado, solo se deben devolver los listados que contienen todos los filtros seleccionados.

## Donde encontrar todo

Tu tarea es construir el proyecto a los diseños dentro de la carpeta `/ design`. Encontrarás una versión móvil y una de escritorio del diseño para trabajar.

Los diseños están en formato estático JPG. Esto significa que deberás usar tu mejor criterio para estilos como `font-size`,` padding` y `margin`. Esto debería ayudar a entrenar tu ojo para percibir diferencias en espacios y tamaños.

Encontrarás todos los activos necesarios en la carpeta `/ images`. Los activos ya están optimizados. También hay un archivo `style-guide.md`, que contiene la información que necesitarás, como paleta de colores y fuentes.

## Algunos consejos

Mira los diseños para comenzar a planificar cómo abordará el proyecto. Este paso es crucial para ayudarte a pensar con anticipación las clases de CSS que podría crear para crear estilos reutilizables.

Antes de agregar cualquier estilo, estructura tu contenido con HTML. Escribir su HTML primero puede ayudar a centrar tu atención en la creación de contenido bien estructurado.

Escribe los estilos base para tu proyecto, incluidos los estilos de contenido general, como `font-family` y` font-size`.
Comienza a agregar estilos en la parte superior de la página y trabaja hacia abajo. 



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
