exports.Category = {
  products: (parent, args, { db }) => {
    const { id } = parent;
    return db.products.filter((prod) => prod.categoryId === id);
  },
};
