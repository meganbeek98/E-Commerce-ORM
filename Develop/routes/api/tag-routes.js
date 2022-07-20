const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags  // be sure to include its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({
    include: [Product],
  })
    .then((tagData) => res.json(tagData))
    .catch((err) => res.status(500).json(err));
});

// find a single tag by its `id`   // be sure to include its associated Product data
router.get('/:id', (req, res) => {
});

// create a new tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((tagData) => res.json(tagData))
    .catch((err) => {
      res.status(400).json(err);
    });
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
});

module.exports = router;
