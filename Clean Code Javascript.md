> # Clean Code Javascript
>
> 1. จัดกลุ่ม class หรือ code ที่เป็นเรื่องเดียวกันให้อยู่ด้วยกัน
> 2. 1 function หรือ 1 class ควรทำงานแค่เรื่องๆเดียว ไม่ควรทำหลายเรื่องหรือจัดการหลายเรื่อง เพื่อให้ code จัดการง่าย อ่านง่าย และง่ายต่อการที่จะทำงานร่วมกับผู้อื่น เนื่องจาก 1 function มันจัดการแค่ 1 เรื่องทำให้เวลาไล่ code สะดวก ไม่ซับซ้อนวุ่นวาย
> 3. parameter ที่รับเข้ามาใน function ควรรับมาเป็น object ไม่ควรรับมาเป็นตัวๆ เพื่อที่ในอนาคตมีการเปลี่ยนแปลงตัว parameter เราจะได้จัดการได้ง่าย จัดการที่เดียวจบไม่ต้องไปจัดการไล่ code หลายที่ให้ยุ่งยาก
>
> # Callback Function
>
> คือ function เรียกกลับที่ถูกส่งเข้าไปเป็น parameter ของ function อื่นเพื่อเรียกใช้มันในภายหลัง
>
> ```
> function greeting(name) {
>  alert('Hello ' + name);
> }
>
> function processUserInput(callback) {
>  var name = prompt('Please enter your name.');
>  callback(name);
> }
>
> processUserInput(greeting);
> ```
>
> # Promise
>
> เป็น Callback Function แบบนึงที่เอามาแก้ปัญหา Callback Hell
>
> ```
> ตัวอย่าง Callback Hell
>
> const updateAvatar = (err, avatar) => {
> if (err) console.err(err)
> User.update(userId, avatar, doXXX)
> }
> const getCurrentGravatar = (err, profile) => {
> if (err) console.err(err)
> fetch(`http://www.gravatar.com/avatar/${profile.email}`, updateAvatar)
> }
> const getUser = (userId) => {
> User.findById(userId, getCurrentGravatar)
> }
> getUser(userId)
>
> ```
>
> ใช้ Promise แก้ปัญหา Callback Hell
>
> ```
> const updateAvatar = (avatar) => {
>  return new Promise((resolve, reject) => {
>    User.update(userId, avatar, (error, user) => {
>      if (error) reject(error)
>      else resolve(user)
>    })
>  })
> }
> const getCurrentGravatar = (profile) => {
>  return new Promise((resolve, reject) => {
>    fetch(
>      `http://www.gravatar.com/avatar/${profile.email}`,
>      (error, avatar) => {
>        if (error) reject(error)
>        else resolve(avatar)
>      }
>    )
>  })
> }
> const getUser = (userId) => {
>  return new Promise((resolve, reject) => {
>    User.findById(userId, (error, profile) => {
>      if (error) reject(error)
>      else resolve(profile)
>    })
>  })
> }
> getUser(userId)
>  .then((profile) => {
>    return getCurrentGravatar(profile)
>  })
>  .then((avatar) => {
>    return updateAvatar(avatar)
>  })
>  .then((user) => {
>    return doXXX(user)
>  })
>  .catch((error) => {
>    console.error(error.message)
>  })
> ```
>
> # Async & Await
>
> เป็นการทำให้เราเขียน code ง่ายขึ้นโดยไม่ต้องใช้ promise มา .then() .catch() อีกต่อไป
>
> ```
> async function updateLatestAvatar(userId) {
>   try {
>
>     const profile = await User.findById(userId)
>     const avatar = await fetch(
>       `http://www.gravatar.com/avatar/${profile.email}`
>     )
>     const user = await User.update(userId, avatar)
>     doXXX(user)
>
> } catch (error) {
> console.error(error.message)
> }
> }
> updateLatestAvatar(13)
>
> ```
