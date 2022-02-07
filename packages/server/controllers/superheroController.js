const { Superhero }  = require('./../models')


module.exports.createSuperhero = async (req, res, next) =>{
    //const { file } = req;
    //console.log(req.file);
    try{
        const newSuperhero = await Superhero.create(req.body);
        if(newSuperhero){
            return res.status(201).send({data: newSuperhero});
        }
        return next(new Error());

    }catch(e){
        next(e);
    }
}

module.exports.getSuperheroById = async (req, res, next) =>{
    try{
        const shToFind = await Superhero.findByPk(req.params.shId, {
        });

        if (shToFind) {
            return res.status(201).send(shToFind);
        }
        return next(new Error());
    }catch(e){
        next(e);
    }
}

module.exports.getSuperheroes = async (req, res, next) => {
    try {
      const page = req.query.page;
      const foundSh = await Superhero.findAll({
        raw: true,
        limit: 5,
        offset: (page-1)*5,
      });
      res.status(200).send({ data: foundSh });
    } catch (e) {
      next(e);
    }
  };

module.exports.deleteSuperheroById = async (req, res, next) => {
    try{
        const shToDelete = await Superhero.destroy({
            where: {
                id: req.params.shId,
            }
        });
        if (shToDelete) {
            return res.status(201).send('Superhero was deleted!');
        }
        return next(new Error());
    } catch(e){
        next(e);
    }
}

module.exports.updateSuperheroInfoById = async (req, res, next) => {
    try {
        const [updRowsCount, updRows] = await Superhero.update(req.body, {
          where: {
            id: req.params.shId,
          },
          returning: true,
        });
        if (updRowsCount) {
          const data = updRows.get();
          return res.status(201).send(data);
        }
        return next(new Error());
      } catch (e) {
        next(e);
      }
}

module.exports.updateImageById = async (req, res, next) => {
  const { file } = req;
  try {
    const shToUpdate = await Superhero.findByPk(req.params.shId);
    if (shToUpdate) {
      shToUpdate.images.push(file.filename);
      const [updRowCount, [updFoundSuperheroes]] = await Superhero.update(
        shToUpdate.get(),
        { where: { id: req.params.shId }, returning: true }
      );
      return res.status(200).send({ data: updFoundSuperheroes });
    }
    res.status(404).send('Superhero is not found');
  } catch (err) {
    next(err);
  }
};

module.exports.updatePowersById = async (req, res, next) => {
  try {
    const shToUpdate = await Superhero.findByPk(req.params.shId);
    if (shToUpdate) {
      shToUpdate.superpowers.push(req.body.superpowers);
      const [updRowCount, [updFoundSuperheroes]] = await Superhero.update(
        shToUpdate.get(),
        { where: { id: req.params.shId }, returning: true }
      );
      return res.status(200).send({ data: updFoundSuperheroes });
    }
    res.status(404).send('Superhero is not found');
  } catch (err) {
    next(err);
  }
};