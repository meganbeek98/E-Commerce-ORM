const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product], // be sure to include its associated Products
  })
    .then((cData) => res.json(cData))
    .catch((err) => res.status(500).json(err));

});

router.get('/:id', (req, res) => {
   // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],  // be sure to include its associated Products
  })
    .then((cData) => {
      if (!cData) {
        res.status(404).json({ message: 'Category id not found' });
        return;
      }
      res.json(cData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// create a new category


// update a category by its `id` value




// delete a category by its `id` value

