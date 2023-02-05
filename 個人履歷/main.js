
let countdown = function(du) {
        let now = new Date();
        let reset = du.getTime() - now.getTime();
        let sec = Math.floor(reset / 1000 % 60);
        let min = Math.floor(reset / 1000 / 60 % 60) ;
        let hours = Math.floor(reset / 1000 / 60 / 60 % 24);
        let days = Math.floor(reset /1000 / 60 / 60 / 24);
        let count = [days, hours, min, sec];
        return count;
}
let goal = new Date(2023, 0, 1);
let counter = countdown(goal);

let recalc = function() {
        let counter = countdown(goal);
        document.getElementById('day').textContent = counter[0];
        document.getElementById('hour').textContent = counter[1];
        document.getElementById('min').textContent = counter[2];
        document.getElementById('sec').textContent = counter[3];
        refresh();
}
let refresh = function() {
        setTimeout(recalc, 1000);
}
recalc();

// $(document).ready(function(){
//   $('#hamburger').on('click',function(e){
//   e.preventDefault();
//         $('#navbar').slideToggle(1000);
//   });
// });

let images = ['picture/1.jpg','picture/11.jpg', 'picture/12.jpg', 'picture/13.jpg', 'picture/14.jpg'];
let nowPage = 0;
let count = function() {
        document.getElementById('btn').textContent = nowPage + 1 + '/' + images.length;
}
let changeImg = function(page) {
        if(nowPage + page >= 0 && nowPage + page < images.length) {
                nowPage += page;
                document.getElementById('fuckimg').src = images[nowPage];
        }
        count();
};
count();
document.getElementById('next').onclick = function() {
        changeImg(1);
}
document.getElementById('last').onclick = function() {
        changeImg(-1);
}


// 滑動式回到最上面
$(document).ready(function(){
        $('#gotop').click(function(e){
                e.preventDefault();
                let target = $(this).attr('href');
                let offset = $(target).offset();
                $('html, body').animate({scrollTop: offset.top}); 
        });
});

$(document).ready(function(){
        $('.navbar a').click(function(){
                let x = $(this).attr('href')
                $('html, body').animate({
                        scrollTop: $(x).offset().top
                },1000);
        });
});








$('#changebar a').on('click', function(e) {
  e.preventDefault();
  let $changeBar = $('#changebar');
  let $introBar = $('#introbar');
  let $cover = $('#cover');
  let $magic = $('#magic');
  let url = this.href;
  $magic.animate({
        paddingLeft: '+=100'
  }, 500, function() {
        $magic.fadeOut();
  })
  $introBar.remove();
  $cover.load(url + '#cover').hide().delay(500).fadeIn('fast');
})



$('#hamburger').on('click', function() {
        $('#navbar').show();
        let $navbar = $('#navbar');
})

