# Clase 05 - Ecommerce

Después de clonar el repositorio instalar las dependencias:
```bash
npm install
```

Crear una base de datos `mysql` con el nombre `db_ecommerce`

Crear un archivo `.env.development` con las credenciales del archivo `.env.example`, en el cuál colocar las credenciales correspondientes
```
PORT=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_DIALECT=
```

Crear un archivo igual llamado `.env.production` (opcional)

Para utilizar la aplicación seguir los siguientes pasos:

1. Crear un usuario con el siguiente endpoint: `POST` `/user/`
```json
{
    "name": "{Nombre del usuario}",
    "email": "email@ejemplo.com",
    "password": "{Contraseña}",
    "role": "['client' , 'admin' , 'seller']"
}
```

2. Crear un producto: `POST` `/product/:idUsuario` (El id del usuario se utiliza para validar que sea un vendedor o un administrador, los clientes no pueden crear productos)

```json
{
    "name": "{Nombre del Producto}",
    "price": 10, // Entero o Flotante
    "stock": 100 // Entero
}
```

3. Agregar un producto al carrito: `POST` `/user/:idUsuario/:idProducto` (El usuario que agrega)
```json
{
    "quantity": 10 // Entero
}
```

4. Realizar compra: `POST` `/sale/:idVendedor/:idCliente`

```json
{
    "paymentMethod": "['Efectivo', 'Tarjeta', 'Transferencia']"
}
```