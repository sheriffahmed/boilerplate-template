const router = require('express').Router();

// matches GET requests to /api/init/
router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /api/init/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/init/:initId
router.put('/:initId', function (req, res, next) { /* etc */});
// matches DELETE requests to /api/init/:initId
router.delete('/:initId', function (req, res, next) { /* etc */});

module.exports = router;
