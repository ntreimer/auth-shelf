const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  pool.query(`SELECT * FROM "item"`)
  .then((results)=> {
    res.send(results.rows)
  })
  .catch((error)=>{
    res.sendStatus(500)
  })
 // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    const query = `
    INSERT INTO "item"
    ("description", "image_url") VALUES ($1, $2);
    `
    pool.query(query, [req.body.item, req.body.url]).then((response) => {
      res.send(201);
    }).catch((err) => {
      console.log(err);
      res.send(500)
    })
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
  const queryText = `DELETE FROM "item" WHERE id=$1`
  console.log(req.params.id)
  pool.query(queryText, [req.params.id])
  .then((results)=> {
    res.sendStatus(201)
  })
  .catch((error)=>{
    res.sendStatus(500)
  })
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
