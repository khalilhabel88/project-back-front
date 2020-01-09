const express =require('express')
const Router =express.Router()
const { check, validationResult } = require('express-validator');

const auth =require('../middelware/auth')
const Profile =require('../models/ProfileUser')
const User =require('../models/User')

//our profile 

Router.get('/', auth, async(req,res)=>{
try {
const profile = await Profile.findOne({user:req.user.id})
.populate('user', ['firstname','lastname','email','password']);

!profile
      ? res.status(400).json({ msg: 'there is no profile for this user' })
      : res.json(profile);

} catch (error) {
    console.error(error.message);
    res.status(500).send('serveur erors')
}

})

//cree profile 
Router.post('/',[auth,[
    check('skils','is required').not().isEmpty(),
    check('status','is required').not().isEmpty(),
    check('gender','is required').not().isEmpty(),
    check('numTel','is required').not().isEmpty(),
]],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })
      const {skils,status,gender,numTel} = req.body;
      const profileFields = {};
    profileFields.user = req.user.id;
    if(skils) profileFields.skils=skils
    if(status) profileFields.status=status
    if(gender) profileFields.gender=gender
    if(numTel) profileFields.numTel=numTel
    console.log('TCL: profileFields', profileFields);
    try {
        //user id 
        let profile = await Profile.findOne({ user: req.user.id });
        if (profile) {
          //update
          profile = await Profile.findOneAndUpdate(
            { user: req.user.id },
            { $set: profileFields },
            { new: true, upsert: true }
          );
          return res.json(profile);
        }
        //Create new profile
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);
        
    } catch (error) {
        console.error(error.message)
        res.status(500).send('server err')
        
    }
      
})

// get all profile
Router.get('/:user_id', async(req,res)=>{
try {
    const profile = await Profile.findOne({user:req.params.user_id })
.populate('user', ['firstname', 'lastname', 'email','password']);
if(!profile)
return res.status(400).json({msg:'there is not a profile'})
} catch (error) {       
     console.error(error.message)
    res.status(500).send('server err')
}

})

Router.delete('/', auth, async(req,res)=>{
    try {
     await Profile.findOneAndRemove({user:req.user.id})
     await User.findOneAndRemove({_id:req.user.id})
    
           res.json({msg:'user delete'});
    
    } catch (error) {
        console.error(error.message);
        res.status(500).send('serveur erors')
    }
    
    })
    


module.exports=Router