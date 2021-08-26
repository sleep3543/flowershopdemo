const checkbox = document.getElementById('checkbox');
let changeColor = document.getElementById("changeColor");
let logo1 = document.getElementById("logo1");
let logo2 = document.getElementById("logo2");
let imgplane01 = document.getElementById("imgplane01");
let imgplane02 = document.getElementById("imgplane02");
let label = document.getElementById("label");

// 按鈕點擊後，主題色彩、LOGO、按鈕顏色產生變化
checkbox.addEventListener('change', () => {
   changeColor.classList.toggle("dark");
   changeColor.classList.toggle("navColor");
   changeColor.classList.toggle("changeFci");

   if (changeColor.classList.contains("dark")) {
      logo1.src = '../images/logo-w.png';
      logo2.src = '../images/logo-w.png';
      imgplane01.src = "images/plane-w.png";
      imgplane02.src = "images/plane-w.png";
   } else {
      logo1.src = '../images/logo-b.png';
      logo2.src = '../images/logo-b.png';
      imgplane01.src = "images/plane-b.png";
      imgplane02.src = "images/plane-b.png";
   }
})

// 滾軸離上方多少距離，觸發效果啟動
let textenter = document.querySelectorAll('#aboutcontent span');
document.addEventListener('scroll', () => {
   let top = document.documentElement.scrollTop;
   if (top >= 250) {
      for (i = 0, t = 0; i < textenter.length; i++, t += 200) {
         // 第一格要使用引號包起來，但會將原本須帶入的變數一起包住，造成無法讀取for迴圈的i值，所以有兩種寫法
         //第一種："textenter["+i+"].classList.add('textenter')"
         //第二種用ES6的模板字串符 template literal，如下：
         setTimeout(`textenter[${i}].classList.add('textenter')`, t);
      }
      imgplane01.classList.add('flyeff01');
      imgplane02.classList.add('flyeff02');
   }

})

//鼠標跟隨
let mousefollow = document.getElementById('mousefollow');
document.addEventListener('mousemove', function (e) {
   var clientX = e.clientX;
   var clientY = e.clientY;
   //   console.log('clientX座標是' + clientX, 'clientY座標是' + clientY);

   //這是為了讓畫面出現滾動軸時跟隨物件不要因為座標產生誤差而跟丟
   var st = document.documentElement.scrollTop || document.body.scrollTop;
   var sl = document.documentElement.scrollLeft || document.body.scrollLeft;

   mousefollow.style.left = clientX + sl - 17 + 'px';
   mousefollow.style.top = clientY + st - 13 + 'px';
})