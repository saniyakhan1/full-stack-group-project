var express = require('express');
var router = express.Router();
var createError = require('http-errors');

const nabeel = [{ id: 1, name: 'do something', completed: false }];

router.get('/', function (req, res, next) {
  res.json(nabeel);
});

router.get('/:id', function (req, res, next) {
  const foundNabeels = nabeel.find((nabeels) => nabeels.id === Number(req.params.id));

  if (!foundNabeels) {
    return next(createError(404, 'Not Found'));
  }

  res.json(foundNabeels);
});

router.post('/', function (req, res, next) {
  const { body } = req;

  if (typeof body.name !== 'string') {
    return next(createError(422, 'Validation Error'));
  }

  const newNabeels = {
    id: nabeel.length + 1,
    name: body.name,
    completed: false,
  };

  nabeel.push(newNabeels);

  res.status(201).json(newNabeels);
});

module.exports = router;
