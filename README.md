# Config init

---

### Required

---

- MySQL
- install dependencies

---

## local configuration

> **.env**: DATABASE_URL="mysql://root:YourPassword@localhost:3306/saasbd?schema=public"

```bash
npx prisma migrate dev
```

### Comandos en SQL/MySQL

    Comandos necesarios de para que la base de datos funcione.

```sql
INSERT INTO saasbd.estado
(idestado,
nombre)
VALUES
(2, 'inactivo')

```
