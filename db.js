const mongoose = require('mongoose');

// MongoDB savienojuma URL (local MongoDB server)
const dbURI = 'mongodb://localhost:27017/google-drive-clone';

// MongoDB savienojums
mongoose.connect(dbURI, {
    useNewUrlParser: true,  // Nodrošina labāku URI parsēšanu
    useUnifiedTopology: true,  // Novērš dažas brīdinājumu problēmas
    useCreateIndex: true,  // Nodrošina indeksa izveidi, ja nepieciešams
    useFindAndModify: false // Novērš deprecated metodi
}).then(() => {
    console.log('Savienojums ar MongoDB ir veiksmīgs');
}).catch((err) => {
    console.log('Kļūda savienojot ar MongoDB:', err);
});

// Eksportē mongoose, lai to varētu izmantot citos failos
module.exports = mongoose;
