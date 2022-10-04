function Calc(){
    var val1 = document.getElementById("val1").value;
    var val2 = document.getElementById("val2").value;
    var val3 = document.getElementById("val3").value;

    var opt = document.getElementById("opt").value;
    var opt2 = document.getElementById("opt2").value;

    
    var ans = eval(val1 + opt + val2 + opt2 + val3);
    document.getElementById("ans").value = ans;
}
// (function () {

//     let screen = document.querySelector('.screen');
//     let buttons = document.querySelectorAll('.btn');
//     let count = document.getElementById('.counter');

//     screen.value = "value"

//     buttons.forEach(function (button) {
//         button.addEventListner('click', function (e) {
//             let value = e.target.dataset.num;
//             screen.value += value;

//             if (screen.value === '') {
//                 screen.value = answer;
//             }
//             else {
//                 let answer = eval(count);
//                 screen.value = answer;
//             }
//         });
//     })
// })