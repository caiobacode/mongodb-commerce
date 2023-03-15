db.produtos.find({ 
  $and: [
     { nome: { $ne: "McChicken" } },
     { nome: { $ne: "Big Mac" } },
  ], 
}, { nome: 1, curtidas: 1, vendidos: 1, _id: 0 });