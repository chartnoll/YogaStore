var count = 5, number = 0;

while (count <= 50){
  count++;
  if (count % 5 === 0) {
    number ++;
    console.log(`Number is ${number}\n`);

  }
  console.log(`Count is ${count}\n`);
}
