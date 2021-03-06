//alert msg handler
app.alert = function(type, message){
  var className='.'+type;
  var alertBox = document.querySelector(className);
  var alertMsg = alertBox.querySelector('.alert-msg');
  alertMsg.innerHTML = message;
  alertBox.style.display = 'block';
  window.addEventListener('click', app.cleanUI);
}

app.cleanUI = function(evt){
  //toggle menu when a menu item is clicked
  if (evt.target.parentNode.className!=='icon'){
    document.getElementById("menu").className = "topnav";
    window.removeEventListener('click', app.cleanUI);
  }
  //make sure every alert box is hidden
  document.querySelector('.alert').style.display = 'none';
}

start = function(){

  //menu handler
  var $menu = document.getElementById("menu");
  var $menu_icon = $menu.querySelector('.icon > a');
  //menu for mobile click handler
  function toggleMenu() {
      if ($menu.className === "topnav") {
          $menu.className += " responsive";
          //handle click outside menu to toggle it
          window.addEventListener('click', app.cleanUI);
      } else {
          $menu.className = "topnav";
      }
  }


  $menu_icon.onclick = toggleMenu;

  //navigation handling
  var $navTitle = document.querySelector('#navigation h1');
  var $navLink = document.querySelector('#navigation a');

  var updateNavigation = function(e){
    var title = e.detail.title || 'Home';
    var icon = (e.detail.currentPage==='home') ? '&#8962;': '&#8592;';

    $navTitle.innerHTML = title;
    $navLink.innerHTML = icon;
  }
  //subscribe to page.shown event
  document.addEventListener('page.shown', updateNavigation);

  //tooggle visibility
  document.addEventListener('page.shown', function(evt){
    document.querySelector('#'+ evt.detail.currentPage).style.display = 'block';

  });
  document.addEventListener('page.hidden', function(evt){
    document.querySelector('#'+ evt.detail.currentPage).style.display = 'none';
  });


  //simulate a hash change at startup
  window.dispatchEvent(new CustomEvent('hashchange'));

}
document.addEventListener("DOMContentLoaded",start);
