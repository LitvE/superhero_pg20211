const {Router} = require('express');
const {superheroController} = require('./../controllers/index');
//const {validate} = require('./../middleware');
const {upload} = require('./../middleware');

const superheroRouter = Router();

superheroRouter.post('/', superheroController.createSuperhero);
superheroRouter.get('/:shId', superheroController.getSuperheroById);
superheroRouter.get('/', superheroController.getSuperheroes);
superheroRouter.delete('/:shId', superheroController.deleteSuperheroById);
superheroRouter.patch('/:shId', superheroController.updateSuperheroInfoById);
superheroRouter.patch('/:shId/images', upload.single('add_image'), superheroController.updateImageById);

module.exports = superheroRouter;