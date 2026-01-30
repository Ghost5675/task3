const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
function isNatural(s) {
    return typeof s === "string" && /^[0-9]+$/.test(s) && Number(s) > 0;
}

function gcd(params) {
    while (a != 0 && b != 0) {
        if (a > b) {
            a = a % b
        } else {
            b = b % a
        }
    }
    return a + b
}

function lcm(a, b) {
    return a * b / gcd(a, b);
}

app.get('/rgaliev751_mail_ru/', (req, res) => {
    const { x, y } = req.query
    if (!isNatural(x) || !isNatural(y)) {
        res.type("text/plain").send("NaN");
        return;
    }

    a = BigInt(x);
    b = BigInt(y);

    res.type("text/plain").send(String(lcm(a, b)));
})


app.listen(port, () => {

})