const awesomeFunction = (req, res, next) => {
    res.json('Awesome Person')
};
const returnAnotherPerson = (req, res, next) => {
    res.json('Super Awesome Person')
};

module.exports = {awesomeFunction, returnAnotherPerson}