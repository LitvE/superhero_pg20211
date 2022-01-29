const { Superhero }  = require('./../models')


module.exports.createSuperhero = async (req, res, next) =>{
    try{
        const newSuperhero = await Superhero.create(req.body);
        if(newSuperhero){
            return res.status(201).send(newSuperhero);
        }
        return next(new Error());

    }catch(e){
        next(e);
    }
}

module.exports.getSuperheroById = async (req, res, next) =>{
    try{
        const shToFind = await Superhero.findByPk(req.params.shId, {
            // attributes: {
            //   exclude: ['id'],
            // },
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
      const foundSh = await Superhero.findAll({
        raw: true,
        attributes: {
          exclude: ['id'],
        },
        limit: 5,
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

module.exports.updateSuperheroById = async (req, res, next) => {
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