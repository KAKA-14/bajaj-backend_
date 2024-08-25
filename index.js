const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const separateData = (data) => {
    const numbers = [];
    const alphabets = [];
    let highestLowercase = null;

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            alphabets.push(item);
            if (item >= 'a' && item <= 'z') {
                if (!highestLowercase || item > highestLowercase) {
                    highestLowercase = item;
                }
            }
        }
    });

    return { numbers, alphabets, highestLowercase };
};

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, error: 'Invalid input format' });
    }

    const { numbers, alphabets, highestLowercase } = separateData(data);

    res.json({
        is_success: true,
        user_id: 'kanishak_khanna_14022003',  
        email: 'kanishak.khanna2021@vitstudent.ac.in',          
        roll_number: '21BCI0147',         
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
