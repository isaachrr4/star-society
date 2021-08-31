const { Users, Thoughts} = require('../models');

const thoughtsController = {
  getThoughts(req, res) {
    Thoughts.find({})
      .populate({ path: "reactions" })
      .then((dbThoughts) => res.json(dbThoughts))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
},
getThoughtsById(req, res) {
  Thoughts.findOne({_id: params.id })
  .populate({ path: "reactions"})
  .then((dbThoughts) => res.json(dbThoughts))
  .catch ((err) => {
    console.log(err);
    res.status(500).json(err);
  });
  
},
updateThought({ params, body }, res) {
  Thoughts.findOneAndUpdate(
      { _id: params.id },
      body,
      { new: true }
  )
  .then(dbThoughts => {
      if (!dbThoughts) {
          res.status(404).json(
              { message: 'Please try again!' }
              );
          return;
      }
      res.json(dbThoughts);
  })
  .catch(err => res.status(400).json(err));
},
deleteThoughts({params, res}) {
  Thoughts.findOneAndDelete({ _id: params.id})
  .then(dbThoughts => {
    if(dbThoughts) {
      res.status(404).json({
        message:"no thoughts here!.... please try again"
      });
      return;
    }
    Users.findOneAndUpdate(
      { username: dbThoughts.username },
      { $pull: { thoughts: params.id } })
      .then(() => {
        res.json(
            {message: 'succesfully removed!'}
            );
    })
    .catch(err => res.status(500).json(err));
})
.catch(err => res.status(500).json(err));
  
}
              
}

module.exports =thoughtsController;