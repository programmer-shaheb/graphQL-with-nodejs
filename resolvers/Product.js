exports.Product = {
  category: (parent, args, { db }) => {
    const { categoryId } = parent;
    return db.categories.find((cat) => cat.id === categoryId);
  },
};
