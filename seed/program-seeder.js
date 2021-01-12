var Program = require('../models/program');

var mongoose = require('mongoose');
// Run mongoose again since we are running seeder separately
mongoose.connect('mongodb://localhost:27017/BrugWorkoutsDB', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

var programs = [
    new Program({
        imagePath: 'https://webassets-prod.ultimateperformance.com/uploads/sites/4/2020/03/09143046/shutterstock_1464709727.jpg',
        title: 'Crafty Home Workouts',
        description: 'These home workouts are meant to help you with time and consistency. It is meant to work around your busy schedule.',
        price: 50
    }),
    new Program({
        imagePath: 'https://image.freepik.com/free-photo/mid-section-muscular-man-flexing-muscles_13339-297426.jpg',
        title: 'Sculpture',
        description: 'Strictly build muscle, change your frame and make an internal/external difference on your body and well-being.',
        price: 50
    }),
    new Program({
        imagePath: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/this-is-how-much-exercise-you-need-to-do-to-reap-health-benefits-main-1486061404.jpg?resize=980:*',
        title: 'Constant Cardio Muscle Rounds',
        description: 'C.C.M.R’s is a mixture of exercises emphasizing on 1 muscle group. The Individual will perform these exercises with extreme focus and constant movement with no breaks until the round is over.',
        price: 50
    })
];
// Save data into mongo and then disconnect.
var done=0;
for (var i = 0; i < programs.length; i++) {
    programs[i].save(function(err, result) {
        done++;
        if (done === programs.length) {
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}