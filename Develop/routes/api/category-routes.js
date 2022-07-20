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
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
    .then((cData) => res.json(cData))
    .catch((err) => {
      res.status(400).json(err);
    });
});


// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
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

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((cData) => {
      if (!cData) {
        res.json(404).json({ message: 'Category id not found' });
        return;
      }
      res.json(cData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


module.exports = router;