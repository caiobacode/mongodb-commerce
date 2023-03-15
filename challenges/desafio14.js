db.produtos.find({
  ingredientes: { $elemMatch: { $eq: "picles" } }, 
}, { valoresNutricionais: { $slice: 3 }, ingredientes: 1, nome: 1, _id: 0 });