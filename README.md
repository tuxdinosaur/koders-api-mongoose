# Estructura carpetas

**node_modules/** (Se crea con el npm init)

**src/**

- lib/ (Código reusable; el código de aquí no debe tener dependencias, son helpers o configuraciones de herramientas, promificaciones, etc)
- models/ (Modelos DB)
- routes/ (Rutas a recursos del sistema)
- use_cases/ (Acciones del usuario)
- server.js (Definición del server: configuración del servidor, rutas del servidor, etc)

**index.js** (El app.listen, es donde todo se inicia, corre la aplicación completa)

**package.json** (Se crea con el npm init)

**package-lock.json** (Se crea con el npm init)

Un modelo crea objetos en una colección
