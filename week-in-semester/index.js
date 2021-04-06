var differenceInWeeks = require('date-fns/differenceInWeeks');

exports.weekInSemester = (req, res) => {
    const genesisDate = new Date('January 18, 2021');
    const today = new Date();
    const type = req.query.type || 'ak';

    const numberOfWeeks = differenceInWeeks(today, genesisDate) + 1;

    res.send(`This is week ${numberOfWeeks}`);
};
