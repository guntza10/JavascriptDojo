import fetch from 'node-fetch';
import * as Promise from "bluebird";
/* promise vs generator
- promise ในบางกรณี มันจะทำให้เกิด call back hell (call back ซ้อน call back)
- เราเลยใช้ generator เพื่อแก้ปัญหานี้
 */

// promise
const getRandomUsersByPromise = n => {
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

getRandomUsersByPromise(5);

// generator
const getRandomUsersByGenerator = Promise.coroutine(function* (n) {
    const fetchRandomUsers2 = yield fetch(`https://randomuser.me/api/?results=${n}`);
    const data = yield fetchRandomUsers2.json();
    return data;
});

getRandomUsersByGenerator(5).then(randomUsers => {
    randomUsers.results.forEach(user => {
        const { gender, email } = user;
        console.log(`${gender} -> ${email}`);
    });
}).catch(err => {
    console.log(err);
});
