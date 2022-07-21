# GraphqlArquitectura
Proyecto ejemplo de implementación de métodos de GraphQL

- Creación proyecto node
    nom init -y
- Se instala express
    npm i express
- Se instala babel, para poder usar las ultimas versiones de Js, es un transpirador
    npm install --save-dev @babel/core @babel/cli @babel/preset-env
- Se crea archivo .babelrc, para poder usar las ultimas versiones de js
- Instalar @babel/node
    npm install --save-dev @babel/node
    ó
    npm i @babel/node -D
- En el package. json se crean los scripts que se ejecutarian
    "scripts": {
        "build": "babel src -d dist --source-maps",
        "start": "nodemon src/index.js --exec babel-node",
        "serve": "node dist/index.js",
        "clean": "rimraf dist"
    }
- Se instala nodemon, para no tener que reiniciar el servidor cada qeu se realizan cambios
    npm i nodemon -D
- Se instala rimraf, permite eliminar y limpiar directorios, esto en caso de los directorios compilados por babel, independiente del sistema operativo
    npm i rimraf
- Se instala graphql, express-graphql y graphql-tools, lo cua permite al primero instalar graphql, el segundo nos permite trabajar graphql con express y el tercero es una serie de herramientas de graphql, puede generar error por eso se usa --force
    npm i graphql express-graphql graphql-tools --legacy-peer-deps
- Instalar mongoose para manejar bases de datos mongo
    npm install mongoose
