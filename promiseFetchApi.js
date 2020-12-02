import fetch from 'node-fetch';
const getRandomUsers = n => {
    const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
    fetchRandomUsers.then(data => {
        data.json().then(randomUsers => {
            // console.log(randomUsers.results);
            // console.log(randomUsers.results.length);
            randomUsers.results.forEach(user => {
                const { gender, email } = user;
                console.log(`${gender} -> ${email}`);
            })
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    });
}

getRandomUsers(100);

