const produtosCount = db.produtos.countDocuments({});

db.resumoProdutos.insert({
  franquia: "McDonalds",
  totalProdutos: produtosCount,
});

db.resumoProdutos.find({}, { franquia: 1, totalProdutos: 1, _id: 0 });