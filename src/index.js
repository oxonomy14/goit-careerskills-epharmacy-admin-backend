import express from 'express';



const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.json ({
    message: "Backend Server Admin E-pharmacy is running",
});
});

app.listen (PORT, () => {
console.log(`Backend Server Admin E-pharmacy is running on port ${PORT}`);


});
