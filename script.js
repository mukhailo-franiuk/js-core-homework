$(document).ready(function () {
    $('#checkResult').prop('disabled', true);

    $('#checkResult').css('background-color', '#ac6363');

    $('.number-box').sortable({
        connectWith: "#start,#end"
    });
    let minutes = 1;
    let seconds = 59;
    document.querySelector('.display-clock').innerHTML = `${minutes}:00`;
    $('#start-game').on('click', function () {
        $('#start-game').prop('disabled', true);
        $('#start-game').css('background-color', '#ac6363');
        $('#checkResult').prop('disabled', false);
        $('#checkResult').css('background-color', '#bb1f1f');
        let intervalID = setInterval(function () {

            // Display clock
            document.querySelector('.top-message-01').innerHTML = `You still have time!you sure? 0:${seconds} `;
            document.querySelector('.top-message-02').innerHTML = `It's a pity!but you lost`;
            document.querySelector('.top-message-03').innerHTML = `Woohoo,well done,you did it!`;


            minutes = 0
            document.querySelector('.display-clock').innerHTML = `${minutes}:${seconds--}`;
            if (seconds == (-1)) {
                clearInterval(intervalID);
            }
            // ------------------------------

            //  Click for "check result"
            $('#checkResult').on('click', function () {
                $('.message-01').css({
                    width: '100%',
                    height: '100vh'
                })
            })
            $('.close-panel').on('click', function () {
                $('.message-01').css({
                    width: 0,
                    height: 0
                })
            })

        $('#checkResultat').on('click',function(){
            clearInterval(intervalID);
        })
        }, 1000);
    });
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let check = true;
    $('#checkResultat').on('click',function(){
        $('.message-01').css({
            width: 0,
            height: 0
        })
        for (let i = 0; i < $('.number').length; i++) {
            if ($('.number').eq(i).text() != numbers[i]) {
                check = false;
                break;
            }
        }
        if (check) {
            $('.message-03').css({
                width: '100%',
                height: '100vh'
            })
        }
        else {
            $('.message-02').css({
                width: '100%',
                height: '100vh'
            })
        }
        check = true;
    })
    $('.close-panel-02').on('click',function(){
        $('.message-02').css({
            width: 0,
            height: 0
        })
    })
    $('.close-panel-03').on('click',function(){
        $('.message-03').css({
            width: 0,
            height: 0
        })
    })
    // -----------------------

    // Click new game
    $('#new-game').on('click', function () {
        let selectors = document.querySelectorAll('.number');
        for (let i = selectors.length - 1; i > 0; i--) {
            let q = selectors[i];
            let r = Math.floor(Math.random() * (i + 1));
            selectors[i] = selectors[r];
            selectors[r] = q;
            document.querySelector('#start').appendChild(selectors[r]);
        }
        if (document.querySelector('#start').children.length != 9) {
            window.location.reload();
        }
    });
    // ------------------------------------
});
function list(a,b,...arg){
    console.log(arg)
    }
    list(1,2,3,4,5)

    let a = 'a,b'.split(',')
  console.log(a);