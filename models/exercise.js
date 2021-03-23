const mongoose = require('mongoose');


// Exercise Mongoose schema
const exerciseSchema = new mongoose.Schema({
    title: {type: String, required: [true, 'An exercise must have a title']},
    Program: {type: String, required: [true, 'An exercise must belong to a program']},
    description: {type: String, required: true},
    content: {type: String, default: 'Test content' },
    releaseDate: {type: Date, default: Date.now }
});

// Create Exercise model using the schema created
const Exercise = mongoose.model('Exercise', exerciseSchema);

// const testExercise = new Exercise({
//     title: 'Introduction to the Constant/Cardio Muscle Rounds Workout Program',
//     Program: 'Constant/Cardio Muscle Rounds',
//     description: 'CONSTANT/CARDIO MUSCLE ROUNDS also known as C.C.M.R’s, is a mixture of exercises emphasizing one muscle group.',
//     content: `CONSTANT/CARDIO MUSCLE ROUNDS also known as C.C.M.R’s, is a mixture of exercises emphasizing one muscle group. The Individual will perform these exercises with extreme focus and constant movement with no breaks until the round is over. C.C.M.R’S are exercises that focus on what I like to call it “The Big Four.” Chest, Back, Legs, and Your Cardiovascular System. The prominent role is to create the foundation of your body to manifest itself into something more.                    
//     NO                  LIMITS	
// (Alpha) are Compound Heavy Duty exercises targeting the initial muscle groups while also engaging the whole body as well. This causes Hypertrophy and more Calories Burnt.
// (Beta)-(Beta-Cardio) are bodyweight exercises or exercises done with light to mild weight or even cardiovascular exercises. This helps break more fibers and give the muscle a more efficient burn, and level, give the cardiovascular system.

// INSTRUCTIONS

// Each ROUND will have 1(ALPHA) & 2-4(BETA’S) exercises.
// After every exercise done efficiently when heading to the next exercise, it is done with a slight jog; this causes your body to keep warm & increases your cardiovascular system, which is beneficial.
// Full intensity when each round begins, non-stop movement till the round ends
// 1-2 Minute Breaks after each round is finished.
// 1st (ALPHA & BETA) exercise will always have 6 Rounds; after that, all the other (ALPHA & BETA) exercises rounds will all be 3-4 Rounds.
// Every 2 rounds done add weight for (ALPHA) exercises.
// FOCUS

// Schedule:
// SUNDAY: Rest
// MONDAY: Back C.C.M.R’s                    
// TUESDAY: Stretches/Light Cardio
// WEDNESDAY: Chest C.C.M.R’s
// THURSDAY: Stretches/Light Cardio
// FRIDAY: Rest
// SATURDAY: Leg C.C.M.R’s

// New Exercises Updated Every 40 Days
// `
// });

// testExercise.save().then(doc => {
//     console.log(doc);
//     }).catch(err => {
//         console.log('ERROR 😂', err);
// });

module.exports = Exercise