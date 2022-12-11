const express = require('express');
const router = express.Router();

/////////////////////////////////////
///             Models             //
/////////////////////////////////////
const Collection = require('../Models/myCollections.js')

/////////////////////////////////////
///             Routes             //
/////////////////////////////////////

// POST ROUTE
router.post('/', (req, res) => {
    Collection.create(req.body, (err, createdCollection) => {
        res.json(createdCollection)
    });
});

// GET ROUTES
router.get('/', (req, res) => {
    Collection.find({}, (err, foundCollections) => {
        res.json(foundCollections)
    })
})

// DELETE ROUTE
router.delete('/:id', (req, res) => {
    Collection.findByIdAndRemove(req.params.id, (err, deletedCollection) => {
        res.json(deletedCollection)
    })
})

// PUT ROUTE
router.put('/:id', (req, res) => {
    Collection.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCollection) => {
        res.json(updatedCollection)
    })
});

module.exports = router