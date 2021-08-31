const router = require('express').Router();

const {
    getThoughts,
    getThoughtsById,
    updateThought,
    deleteThoughts,
    
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getThoughts)

    router
    .route('/:id')
    .get(getThoughtsById)
    .put(updateThought)
    .delete(deleteThoughts)

    module.exports = router;