# Configuración inicial

### Requisitos

- MySQL
- Instalación de dependencias

---

## Configuración local

    Antes de comenzar, asegúrate de configurar tu entorno local correctamente. Esto incluye definir las variables de entorno necesarias en un archivo `.env` para establecer la conexión a la base de datos.

En tu archivo `.env`, asegúrate de tener la siguiente línea:

> **.env**: `DATABASE_URL="mysql://root:YourPassword@localhost:3306/saasbd?schema=public"`

    Además, ejecuta el siguiente comando para aplicar las migraciones de la base de datos utilizando Prisma:

````bash
npx prisma migrate dev

## Comandos SQL/MySQL
    A continuación, se presentan los comandos SQL necesarios para que la base de datos funcione correctamente. Estos comandos agregan registros a la tabla saasbd.estado, que es esencial para el funcionamiento adecuado de la aplicación.
```sql
INSERT INTO saasbd.estado (idestado, nombre)
VALUES (1, 'activo');
INSERT INTO saasbd.estado (idestado, nombre)
VALUES (2, 'inactivo');
````
