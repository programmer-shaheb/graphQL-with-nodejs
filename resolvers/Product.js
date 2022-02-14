exports.Product = {
  category: (parent, args, { db }) => {
    const { categoryId } = parent;
    return db.categories.find((cat) => cat.id === categoryId);
  },
  review: (parent, args, { db }) => {
    const { id } = parent;
    return db.reviews.filter((rev) => rev.productId === id);
  },
};
