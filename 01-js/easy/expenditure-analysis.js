/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
 
  const map=new Map();
  for(let i=0;i<transactions.length;i++){
      if(map.has(transactions[i].category)){
           let currPrice=map.get(transactions[i].category)+transactions[i].price;
           map.set(transactions[i].category,currPrice);
      }else{
           map.set(transactions[i].category,transactions[i].price);
      }
  }
  const ansArray=[];
  for(const [key,value] of map){
      let newObj={[key]:value};
      ansArray.push(newObj);
  }
  return ansArray;
}

module.exports = calculateTotalSpentByCategory;
