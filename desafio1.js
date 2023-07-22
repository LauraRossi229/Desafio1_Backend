class ProductManager {
    constructor() {
      this.products = new Map();
      this.nextId = 1;
    }
  
    addProduct(product) {
      if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        throw new Error('Todos los campos son obligatorios');
      }
  
      if (this.products.has(product.code)) {
        throw new Error('Ya existe un producto con el mismo código');
      }
  
      const newProduct = {
        id: this.nextId,
        ...product,
      };
  
      this.products.set(newProduct.id, newProduct);
      this.nextId++;
      return newProduct;
    }
  
    getProducts() {
      return Array.from(this.products.values());
    }
  
    getProductById(id) {
      const product = this.products.get(id);
      if (!product) {
        throw new Error('Producto no encontrado');
      }
      return product;
    }
  }
  
  module.exports = ProductManager;
  