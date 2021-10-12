var enableShow = false;
var menuCollapsed = true;
new WOW().init(); //Inicializando a WON

 // Preloader
 $(window).on('load', function () {
  if ($('#preloader').length) {
    $('#preloader').delay(100).fadeOut('slow', function () {
      $(this).remove();
    });
  }
});


function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

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
            label.style.height = "43px";
        else
            label.style.height = "0";

    }, 0);
  }
  function menuShow() {
    if(menuCollapsed){
      document.getElementById("sidebar").style.width = "250px";
      document.getElementById("body").style.marginLeft = "250px";
      menuCollapsed = false;
    }else{
      document.getElementById("sidebar").style.width = "0";
      document.getElementById("body").style.marginLeft= "0";
      menuCollapsed = true;
    }
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