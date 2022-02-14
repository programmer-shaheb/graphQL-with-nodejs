exports.Query = {
  getProduct: (parent, args, { db }) => {
    const productID = args.id;
    return db.products.find((product) => product.id === productID);
  },
  getProducts: (parent, args, { db }) => {
    return db.products;
  },
  categories: (parent, args, { db }) => db.categories,
  category: (parent, args, { db }) => {
    const { id } = args;
    return db.categories.find((cat) => cat.id === id);
  },
  reviews: (parent, args, { db }) => {
    return db.reviews;
  },
  review: (parent, args, { db }) => {
    const { id } = args;
    return db.reviews.find((rev) => rev.id === id);
  },
};
