db.produtos.find({ 
  valoresNutricionais: { $elemMatch: { 
    $and: [
      { tipo: "proteínas" },
      { $and: [
        { percentual: { $gte: 30 } },
        { percentual: { $lte: 40 } },
      ], 
      },
    ], 
  }, 
} }, { nome: 1, _id: 0 });