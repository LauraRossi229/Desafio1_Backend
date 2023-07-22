const ProductManager = require('./desafio1');

try {
  // Crear una instancia de ProductManager
  const productManager = new ProductManager();

  // Obtener los productos (debe ser un arreglo vacío)
  const productsBeforeAdd = productManager.getProducts();
  console.log('Productos antes de agregar:', productsBeforeAdd);

  // Agregar un nuevo producto
  const newProduct = {
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
  };
  const addedProduct = productManager.addProduct(newProduct);
  console.log('Producto agregado:', addedProduct);

  // Obtener los productos después de agregar el producto
  const productsAfterAdd = productManager.getProducts();
  console.log('Productos después de agregar:', productsAfterAdd);

  // Intentar agregar un producto con el mismo código (debe lanzar un error)
  try {
    productManager.addProduct(newProduct);
  } catch (error) {
    console.error('Error al agregar producto repetido:', error.message);
  }

  // Obtener un producto por su ID
  const productIdToFind = addedProduct.id;
  const foundProduct = productManager.getProductById(productIdToFind);
  console.log('Producto encontrado por ID:', foundProduct);

  // Intentar obtener un producto con un ID no existente (debe lanzar un error)
  try {
    const nonExistentId = 1000;
    productManager.getProductById(nonExistentId);
  } catch (error) {
    console.error('Error al obtener producto por ID no existente:', error.message);
  }
} catch (error) {
  console.error('Error general:', error.message);
}
