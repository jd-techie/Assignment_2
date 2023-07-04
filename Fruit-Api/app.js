const express = require('express');
const Fruit = require('./fruit')
const app = express();



const fruits = [
    new Fruit(1, "Banana", "Yellow"),
    new Fruit(2, "Gauva", "Green"),
    new Fruit(3, "Apple", "Red"),
    new Fruit(4, "Kiwi", "Lite Green"),

]


// api

app.get("/fruits", (req, res)=> {
    const sortedFruits = fruits.sort((a, b) => {
        if (a.color < b.color) return -1;
        if (a.color > b.color) return 1;
        return 0;
      });
    res.json(sortedFruits)
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
