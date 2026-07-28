# Node.js MVC User and Order API

## Install and run

```bash
npm install
npm run dev
```

Server: `http://localhost:5000`

## User APIs

- `GET /api/users`
- `GET /api/users/:id`
- `POST /api/users`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`

Example user request:

```json
{
  "name": "Rahul",
  "email": "rahul@example.com"
}
```

## Order APIs

- `GET /api/orders`
- `GET /api/orders/:id`
- `GET /api/orders/user/:userId`
- `POST /api/orders`
- `PUT /api/orders/:id`
- `DELETE /api/orders/:id`

Example order request:

```json
{
  "userId": 1,
  "product": "Mouse",
  "quantity": 2
}
```
