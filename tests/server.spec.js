const request = require('supertest');
const server = require('../index');

describe('Operaciones CRUD de cafes', () => {
  it('GET /cafes - Obteniendo un 200 y un arreglo con por lo menos 1 objeto', async () => {
    const { body: cafes, statusCode } = await request(server)
      .get('/cafes')
      .send();

    expect(statusCode).toBe(200);
    expect(cafes).toBeInstanceOf(Array);
    expect(cafes.length).toBeGreaterThan(0);
    expect(cafes[0]).toBeInstanceOf(Object);
  });

  it('DELETE /cafes:id - Obteniendo un 404 al intentar eliminar un café con un id que no existe', async () => {
    const jwt = 'token';
    const deleteCafeId = 5;
    const { statusCode } = await request(server)
      .delete(`/cafes/${deleteCafeId}`)
      .set('Authorization', jwt)
      .send();

    expect(statusCode).toBe(404);
  });

  it('POST /cafes - Agregando un nuevo cafe y obtener un 201', async () => {
    const id = Math.floor(Math.random() * 999);
    const newCafe = { id, nombre: 'Nuevo cafe' };
    const { body: cafes, statusCode } = await request(server)
      .post('/cafes')
      .send(newCafe);

    expect(cafes).toContainEqual(newCafe);
    expect(statusCode).toBe(201);
  });

  it('PUT /cafes:id - Obteniendo un 400 al modificar un café con el id params diferente al del payload', async () => {
    const idParams = 9;
    const updateCafe = { id: 10, nombre: 'Actualizar café' };
    const { statusCode } = await request(server)
      .put(`/cafes/${idParams}`)
      .send(updateCafe);
      
    expect(statusCode).toBe(400);
  });
});