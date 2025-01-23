document.body.innerHTML = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="author" content="@ruhlanrzayev" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Love Calculator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/responsive.css" />
    <link rel="stylesheet" href="css/font.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="shortcut icon" href="../assets/favicon.png" type="image/x-icon" />
    <script src="script.js"></script>
</head>
<body>
    <div class="super-container">
        <h1>The Love Calculator</h1>
        <p>The Love Calculator provides a score from 0% to 100% that is meant to be an indication of a match in terms of love, based on the names of two people. The higher the percentage, the better the match. Note: that like all other love calculators on the Internet, this calculator is intended for amusement only rather than as a real indication of love. Please follow your heart instead of the results of this calculator when considering love.</p>
    </div> 

    <div class="love-container" id="result-container">
        <h1>Find your love</h1> 

        <div class="inputs" id="inputs">
            <input type="text" id="yourName" placeholder="Your Name" />
            <input type="text" id="partnerName" placeholder="Partner Name" />
            <button onclick="calculate()">Calculate</button>
        </div>

        <p>
            To find out what the chances for you and your dream partner are, just fill in both full names (both first and last name) in the two text boxes below, and press Calculate.
        </p>
    </div>
</body>
</html>
`;

const name1 = document.getElementById('yourName');
const name2 = document.getElementById('partnerName');
const result = document.getElementById('result-container');
const inputs = document.getElementById('inputs');

function calculate() {
    const randomPercentage = Math.floor(Math.random() * 101);
    result.innerHTML = `
        <div style="text-align: center; margin-top: 20%;">
            <h2>${randomPercentage}%</h2>
            <button onclick="goBack()">Back</button>
        </div>
    `;
    inputs.innerHTML = '';
}

function goBack() {
    result.innerHTML = `
        <h1>Find your love</h1> 
        <div class="inputs" id="inputs">
            <input type="text" id="yourName" placeholder="Your Name" />
            <input type="text" id="partnerName" placeholder="Partner Name" />
            <button onclick="calculate()">Calculate</button>
        </div>
        <p>
            To find out what the chances for you and your dream partner are, just fill in both full names (both first and last name) in the two text boxes below, and press Calculate.
        </p>
    `;
}