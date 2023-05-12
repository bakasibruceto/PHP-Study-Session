// //Search Icon
// function openSearch() {
//   document.getElementById("myOverlay").style.display = "block";
// }

// function closeSearch() {
//   document.getElementById("myOverlay").style.display = "none";
// }

//Dropdown
function menuToggle(){
  const toggleMenu = document.querySelector('#menu');
  toggleMenu.classList.toggle('active')
}

window.onscroll = function () { scrollFunction() };

//Navbar on scroll
function scrollFunction() {

  if ((document.body.scrollTop > 80)|| (document.documentElement.scrollTop > 80)) {

    //ProfileIcon
    document.getElementById("avatar").style.height = "45px";
    document.getElementById("avatar").style.width = "45px";
    document.getElementById("avatar").style.marginTop = "-2px";

    //LogoIcon
    document.getElementById("logo").style.height = "40px";
    document.getElementById("logo").style.width = "40px";
    document.getElementById("logo").style.marginTop = "0.5px";
    document.getElementById("tit").style.marginTop = "5px";
 

    // //Search Icon
    // document.getElementById("search").style.marginTop = "1%";

    //Text
    document.getElementById("navbar").style.marginTop = ".9%";
    document.getElementById("navbar").style.marginLeft = "16%";

    //PurpleWrapp
    document.getElementById("wrapper").style.opacity = "1";
    document.getElementById("wrapper").style.padding = "10px 10px 50px 10px";

    //dropdown
    document.getElementById("menu").style.top = "60px";
    document.getElementById("action").style.top = "60px";
    document.getElementById("menu").style.right = "85px";
    document.getElementById("action").style.right = "85px";
    document.getElementById("menu").style.top = "65px";
    document.getElementById("action").style.top = "65px";
 
  } else {

    //ProfileIcon
    document.getElementById("avatar").style.height = "70px";
    document.getElementById("avatar").style.width = "70px";
    document.getElementById("avatar").style.marginTop = "5px";

    // //Search Icon
    // document.getElementById("search").style.marginTop = "2%";

    //Text
    document.getElementById("navbar").style.marginTop = "2%";
    document.getElementById("navbar").style.marginLeft = "17%";

    //LogoIcon
    document.getElementById("logo").style.height = "80px";
    document.getElementById("logo").style.width = "80px";
    document.getElementById("logo").style.marginTop = "-2px";
    document.getElementById("tit").style.marginTop = "25px";
    // document.getElementById("logo").style.marginRight = "-100px";

    //NavBar
    document.getElementById("wrapper").style.opacity = "0";
    document.getElementById("wrapper").style.padding = "10px 10px 80px 10px";

    //dropdown
    document.getElementById("menu").style.top = "95px";
    document.getElementById("action").style.top = "95px";
    document.getElementById("menu").style.right = "95px";
    document.getElementById("action").style.right = "95px";
  }


}
