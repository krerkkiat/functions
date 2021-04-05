var differenceInWeeks = require('date-fns/differenceInWeeks');

exports.whenToGetCovidTest = (req, res) => {
    const genesisDate = new Date('January 18, 2021');
    const today = new Date();
    const type = req.query.type || 'ak';

    const numberOfWeeks = differenceInWeeks(today, genesisDate);

    if (type === 'ak') {
        if (numberOfWeeks % 2 === 0) {
            res.send('You need to get tested this week.')
        } else {
            res.send('You need to get tested next week.')
        }
    } else if (type === 'lz') {
        if (numberOfWeeks % 2 === 1) {
            res.send('You need to get tested this week.')
        } else {
            res.send('You need to get tested next week.')
        }
    }
};
