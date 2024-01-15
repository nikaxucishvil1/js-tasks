//1) დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
//მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
//მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
//ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.

// function Pension(pensionAge , Age) {
//     let leftAge = pensionAge - Age
//     return leftAge
// }
// console.log(Pension(65 , 16))



//2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.
// function calculator(num1 , move , num2) {
//  if(num1 === `` || num2 === `` || move === ``){
//     console.log(`error type correct things`)
//     }else if(move === `+`){
//     console.log(parseInt(num1) + parseInt(num2))
//     }else if(move === `-`){
//     console.log(num1 - num2)
//     }else if(move === `*`){
//     console.log(num1 * num2)
//     }else if(move === `/`){
//     console.log(num1 / num2)
//     }else{
//     console.log(`error`)
//     }
// }
// console.log(calculator(prompt(`შეიყვანეთ პირველი რიცხვი`),prompt(`შეიყვანეთ არითმეტიკული მოქმედება`),prompt(`შეიყვანეთ მეორე რიცხვი`)))


//3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
//გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.

// function checkPasswordStrength(password) {
//     if(password === ``){
//         console.log(`შეიყვანეთ პაროლი`)
//     }else if(password.length < 8 ){
//         console.log(`პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს`)
//     }else if(password.length > 16){
//         console.log(`პაროლი უნდა შეიცავდეს 16 ზე ნაკლებ სიმბოლოს`)
//     }else{
//         console.log(`welcome`)
//     }
//     return checkPasswordStrength
// }
 

// console.log(checkPasswordStrength(``))



//4) დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
//და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში 
//ეს ყვავილი ნაპოვნია!!

// function flowers(flowerType) {

//     let flowersInput = flowerType
     
//     switch (flowersInput) {
//         case `zambaxi`:

//             console.log(`napovnia`)

//             break;
//             case `vardi`:

//             console.log(`napovnia`)
            
//             break;
    
//             case `gvirila`:
//                 console.log(`napovnia`)
            
//             break;
//             case ``:
//                 console.log(`sheiyvanet yvavilis tipi`)
//                 break;
//         default:
//             console.log(`ar moidzebna`)
//             break;
//     }
    
// }
// console.log(flowers(prompt(`Sheiyvanet yvavilis tipi`)))

//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!


    // function biggestNum(a,b,c) {
    //     if(a === `` || b ===`` || c === ``){
    //         console.log(`შეიყვანეთ რიცხვები`)

    //     }else if(a > b && a > c){
    //         console.log(`უდიდესი რიცხვი არის ${a}`)
    //     }else if(b > a && b > c){
    //         console.log(`უდიდესი რიცხვი არის ${b}`)
    //     }else if(c > a && c > b){
    //         console.log(`უდიდესი რიცხვი არის ${c}`)
    //     }else if(a === b && a > c){
    //         console.log(`უდიდესი რიცხვი არის ${a}`)
    //     }else if(c === a && c > b){
    //         console.log(`უდიდესი რიცხვი არის ${c}`)
    //     }else if( b === c && b > a){
    //         console.log(`უდიდესი რიცხვი არის ${b}`)
    //     }else if (a === b && a < c){
    //         console.log(`უდიდესი რიცხვი არის ${c}`)
    //     }
    //     else if( a === b && b === c && a === c){
    //         console.log(`შეიყვანეთ განსხვავებული რიცვები`)
    //     }
        
    //     else{
    //         console.log(`error შეიყვანეთ რიცხვები`)
    //     }
    //     return biggestNum   
    // }
    //  console.log(biggestNum(prompt(`შეიყვანეთ პირველი რიცხვი`) , prompt(`შეიყვანეთ მეორე რიცხვი`) , prompt(`შეიყვანეთ მესამე რიცხვი`)))