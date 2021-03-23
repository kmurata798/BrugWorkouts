const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// User Mongoose schema
const userSchema = new mongoose.Schema({
  email: {type: String, required: [true, 'A User must have an email']},
  password: {type: String, required: true},
  imagePath: { type: String },
  isAdmin: {type: Boolean, default: false}
});

userSchema.pre('save', async function(next) {
  const user = this
  if (!user.isModified || !user.isNew) {
    next()
  } else {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10)
      user.password = hashedPassword
      next()
    } catch (err) {
      next(err)
    }
  }
})

// Create User model using the schema created
const User = mongoose.model('User', userSchema)

// const testUser = new User({
//   email: 'tester@gmail.com',
//   password: 'tester'
// })

// testUser.save().then(doc => {
//   console.log(doc);
//   }).catch(err => {
//       console.log('ERROR 😂', err);
//   });

module.exports = User