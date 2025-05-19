Desafio de Cafeteria Nanacao
Trabajo realizado por: Ximena Pinaya da Silva

En este desafío se crearon tests para probar las diferentes rutas existentes en la API REST de apoyo.

Requerimientos:
1. Testear si la ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido es un arreglo con por lo menos 1 objeto. 
2. Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que no existe. 
3. Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201. 
4. Prueba que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload.