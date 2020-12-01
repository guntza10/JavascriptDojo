const namePromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(['Anna', 'John', 'Ali', 'Jake']);
    }, 3000);

    setTimeout(() => {
        reject('no data back form the server, there was an error');
    }, 5000);
});

const surnamePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Williams', 'Bravo', 'Mohammado', 'Smith']);
    }, 3000);

    setTimeout(() => {
        reject('no data back from the server, there was an error');
    }, 5000);
});

/* Promise.all() ถ้ามีตัวใดตัวหนึ่ง error มันจะ reject catch error ทันที ไม่สนว่า promise อื่นจะ success หรือเปล่า 
(err ต้องเกิดเกิดก่อน ถ้าเกิดหลัง success ไม่เป็นผล)
 */
Promise.all([namePromise, surnamePromise]).then(data => {
    // console.log(data);
    const [names, surnames] = data;
    console.log(...names);
    console.log(...surnames);
    console.log("============================");
    for (let i = 0; i < names.length; i++) {
        console.log(`${names[i]} ${surnames[i]}`);
    }
}).catch(err => {
    console.log(err);
})