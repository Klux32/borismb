// window.onscroll = function() {scrollFunction()};

export function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "5px 10px";
    document.getElementById("navbar").classList.add("bg-white","text-dark","shadow-sm");
    document.getElementById("togglerIcon").classList.add("togglerColorChange")
    const links = document.getElementsByClassName("nav-link")

    for(let i=0 ;i<links.length; i++){
        links[i].classList.add("text-dark")
    }
    document.getElementById("logo").style.width = "70px";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("navbar").classList.remove( "bg-white","text-dark","shadow-sm");
    document.getElementById("togglerIcon").classList.remove("togglerColorChange")
    const links = document.getElementsByClassName("nav-link")

    for(let i=0 ;i<links.length; i++){
        links[i].classList.remove("text-dark")
    }
    document.getElementById("logo").style.width = "100px";
  }

  const viewWidth = window.innerWidth;

  // console.log(viewWidth)

  const logoPosition = `${(viewWidth > 768 ? 50 : 84) + (document.documentElement.scrollTop/10)}%`
  
  // console.log(parseInt(logoPosition) >=113.636)
  document.getElementById("landing_logo").style.top = parseInt(logoPosition) >= 113.636 ? "113.636%" : logoPosition;
  // document.getElementById("togglerIcon").classList.add("togglerColorChange")
//   document.getElementById("landing_logo").style.position = `absolute`;
}