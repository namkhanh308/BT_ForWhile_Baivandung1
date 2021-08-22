// b1
// for(let i = 1; i <= 100;i++){
//     if(i == 99){
//         console.log("Đã hoàn thành")
//         break;
//     }
//     console.log(i);
// }

// b2
// let count = 0;
// while (count < 3){
//     let a = parseInt(prompt("Nhập vào nhiệt đọ"))
//     if(a>100){
//         alert("Bạn nên giảm nhiệt độ")
//         count++;
//     }
//     else if(a < 20){
//         alert("Bạn nên tăng nhiệt độ")
//         count++;
//     }
//     else {
//         alert("Nhiệt độ vừa")
//         count++;
//     }
// }

// b3
// let input = parseInt(prompt("Nhận vào số lượng số Fibolaci"))
// let count = 0 ;
// let a = 0;
// console.log(a)
// let b = 1;
// console.log(b)
// while(count < input-2){
//     let d = a + b;
//     a = b;
//     b = d;
//     console.log(d);
//
//     count++;
// }
// b4
// let input = parseInt(prompt("Nhận vào số lượng số Fibolaci"))
// let count = 0 ;
// let a = 0;
// let b = 1;
// while(count < input-2){
//     let d = a + b;
//     a = b;
//     b = d;
//     if(d%5 ==0){
//         console.log(d);
//         break;
//     }
//     count++;
// }
//

// b5
// let input = parseInt(prompt("Nhận vào số lượng số Fibolaci"))
// let count = 0 ;
// let a = 0;
// let b = 1;
// let tong = 1;
// while(count < input-2){
//     let d = a + b;
//     a = b;
//     b = d;
//     tong += d;
//     count++;
// }
// console.log(tong)

// b6
// let d = 30;
// let count = 0;
// let sum = 0;
//     for (let i = 1; i<= 500;i++){
//         if(i%7 ==0){
//             console.log(i)
//             sum+= i;
//             count++;
//         }
//         if(count == d){
//             break;
//         }
//     }
// console.log(sum)

// b7
// for (let i = 1; i<= 100; i++){
//     if(i%3 ==0 && i%5 ==0){
//         console.log("FizzBuzz")
//     }
//     else if(i%5 ==0){
//         console.log("Buzz")
//     }
//     else if(i%3 ==0){
//         console.log("Fizz")
//     }
//     else {
//         console.log(i)
//     }
// }

//b8
// function Play(){
//     let a = 3;
//     let count = 1;
//     let dau = parseInt(prompt("Mời bạn chọn điểm đầu"))
//     let cuoi = parseInt(prompt("Mời bạn chọn điểm cuối"))
//     let random = Math.floor(Math.random() * (cuoi - dau)) + dau;
//     while (count <=3) {
//         console.log(random)
//         let doan = parseInt(prompt("Mời bạn đoán: "))
//         if (doan == random) {
//             alert("Chúc mừng bạn đã đoán đúng")
//             break;
//         }
//         else{
//             if(doan>random){
//                 alert("Số bí mật nhỏ hơn số bạn đoán")
//                 count++;
//             }
//             else if(doan < random){
//                 alert("Số bí mật lớn hơn số bạn đoán")
//                 count++;
//             }
//         }
//
//     }
// }