const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('This is not a drill, it is a 404 Error!');
});

module.exports = router;