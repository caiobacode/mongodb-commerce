db.produtos.find({ ingredientes: { $elemMatch: { $eq: "picles" } } }, 
 { valoresNutricionais: { $elemMatch: { tipo: "calorias" } },
nome: 1,
_id: 0 });