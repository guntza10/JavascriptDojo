import fetch from 'node-fetch';
/* Async Await
-ใช้แก้ปัญหา call back hell ใช้แทน generator ได้ ใช้ได้ง่ายกว่า
-ให้มันรอการทำงานของ call back(promise) ให้เสร็จก่อนถึงจะไปต่อ
 */

async function logName(name) {
    console.log(name);
    // 1. we can yield promise using await
    const transformName = new Promise((resolve, reject) => {
        setTimeout(() => resolve(name.toUpperCase()), 5000);
    });
    const result = await transformName;
    // 2. return a promise (**core)
    return result;
}

logName('Gunt').then(res => {
    console.log(`result from async function = ${res}`);
}).catch(err => err);


//////////////////////////////////////////////////////////////////////////////////

// convert generator to async await
const getRandomUsers = async n => {
    const fetchRandomUsers = await fetch(`https://randomuser.me/api/?results=${n}`);
    const data = await fetchRandomUsers.json();
    // data.results.forEach(user => {
    //     const { gender, email } = user;
    //     console.log(`${gender} -> ${email}`);
    // });
    return data;
};

getRandomUsers(4).then(res => console.log(res.results)).catch(err => err);

// handle error async await (ใช้ try catch)
const getRandomUsersHandleErr = async n => {
    try {
        const fetchRandomUsers = await fetch(`httpsrandomuser.me/api/?results=${n}`);
        const data = await fetchRandomUsers.json();
        data.results.forEach(user => {
            const { gender, email } = user;
            console.log(`${gender} -> ${email}`);
        });
        return data;
    } catch (err) {
        console.log(err);
    }
};

getRandomUsersHandleErr(4).then(res => console.log(res.results)).catch(err => console.log("errorJa", err));