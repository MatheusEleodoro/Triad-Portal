
function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}
var enableShow = false;

function showPassword() {
    var fieldPassword = document.getElementById("password");
    var show = document.getElementById("show");
    var hide = document.getElementById("hide");

    if (fieldPassword.type === "password") {
        fieldPassword.type = "text";
        show.className =" show ion-eye-disabled";
    }
    else {
        fieldPassword.type = "password";
        show.className =" show ion-eye";
    }
  }

  function handleClick(cb) {
    setTimeout(function() {

        var label = document.getElementById("header-expand");
        if(cb.checked)
            label.style.display = "block";
        else
            label.style.display = "none";

    }, 0);
  }


  function fullScreen() {
	 
    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
}




  $(document).on('dblclick', 'input[list]', function(event){
    event.preventDefault();
        var str = $(this).val();
    $('div[list='+$(this).attr('list')+'] span').each(function(k, obj){
            if($(this).html().toLowerCase().indexOf(str.toLowerCase()) < 0){
                $(this).hide();
            }
        })
    $('div[list='+$(this).attr('list')+']').toggle(100);
    $(this).focus();
})


// - BARRRA DE PESQUISA
$(document).on('blur', 'input[list]', function(event){
        event.preventDefault();
        var list = $(this).attr('list');
        setTimeout(function(){
            $('div[list='+list+']').hide(100);
        }, 100);
    })

    $(document).on('click', 'div[list] span', function(event){
        event.preventDefault();
        var list = $(this).parent().attr('list');
        var item = $(this).html();
        $('input[list='+list+']').val(item);
        $('div[list='+list+']').hide(100);
    })

$(document).on('keyup', 'input[list]', function(event){
        event.preventDefault();
        var list = $(this).attr('list');
    var divList =  $('div[list='+$(this).attr('list')+']');
    if(event.which == 27){ // esc
        $(divList).hide(200);
        $(this).focus();
    }
    else if(event.which == 13){ // enter
        if($('div[list='+list+'] span:visible').length == 1){
            var str = $('div[list='+list+'] span:visible').html();
            $('input[list='+list+']').val(str);
            $('div[list='+list+']').hide(100);
        }
    }
    else if(event.which == 9){ // tab
        $('div[list]').hide();
    }
    else {
        $('div[list='+list+']').show(100);
        var str  = $(this).val();
        $('div[list='+$(this).attr('list')+'] span').each(function(){
          if($(this).html().toLowerCase().indexOf(str.toLowerCase()) < 0){
            $(this).hide(200);
          }
          else {
            $(this).show(200);
          }
        })
      }
    })