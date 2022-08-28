# `JavascriptDojo`

## `Basic`

### `Variables`

=> เราใช้ variable เพื่อเก็บข้อมูล ซึ่งเราสามารถเก็บเป็น string,number,boolean หรือ undefine

![startUp](/images/variable.JPG)

### `Constants`

1. var เป็น global variable ประกาศแล้วใช้ได้หมดทุก scope

   ![startUp](/images/var.JPG)

   ![startUp](/images/var2.JPG)

2. let เป็น scope variable ประกาศแล้วใช้ได้แค่ใน statement นั้นๆที่ถูกประกาศ

   ![startUp](/images/let.JPG)

   ![startUp](/images/let2.JPG)

3. const เป็น variable ที่ไม่สามารถ assign ค่าให้ใหม่ได้ แต่สามารถเปลี่ยนแปลงค่าภายในได้

   ![startUp](/images/const.JPG)

### `Primitive types`

=> Javascript จะมี type ของ variable 2 แบบ คือ Primitive/value type และ Reference type แต่บทนี้เราจะพูดถึง Primitive type ก่อน ส่วน Reference type เราจะพูดกันในภายหลัง โดย primitive type จะมีดังนี้

- `string`
- `number`
- `boolean`
- `undefine`
- `null`

![startUp](/images/primitiveType.JPG)

### `Dynamic Types`

=> javascript เป็น dynamic language ไม่เหมือนภาษาอื่นที่เป็น static คือ ถ้าเราประกาศตัวแปรเป็น type อะไรแล้วภาษาอื่นไม่สามารถนำตัวแปร type อื่นมา assign ใหม่ได้ แต่ javascript ทำได้

![startUp](/images/dynamic.JPG)

![startUp](/images/dynamic2.JPG)

### `Objects`

=> Reference type ใน javascript จะมี 3 ตัวคือ object,array และ function เราจะมาดู object กัน

=> object คือการเก็บข้อมูลแบบเป็นกลุ่มข้อมูลที่หลากหลาย type โดยเราจะมัดรวมเก็บเป็นก้อน Object นึง โดยที่เราจะเก็บข้อมูลเป็น property เช่นตัวอย่างเราจะเก็บ name,age,isHeartBreak และ address เป็นต้น

![startUp](/images/object.JPG)

=> โดยที่เราสามารถ access property แต่ละตัวได้

![startUp](/images/object2.JPG)

![startUp](/images/object3.JPG)
