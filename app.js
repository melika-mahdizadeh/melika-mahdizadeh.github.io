// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    document.getElementById("moon").classList.add("hidden");

  } else {
    document.documentElement.classList.remove('dark');
    document.getElementById("sun").classList.add("hidden");
  };
  function setLight(){
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    document.getElementById("sun").classList.add("hidden");
    document.getElementById("moon").classList.remove("hidden");

  };

  function setDark(){
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    document.getElementById("moon").classList.add("hidden");
    document.getElementById("sun").classList.remove("hidden");
  }

const menuItems = document.getElementById("menuItems");
function openMenu(){
    
    if(menuItems.classList.contains("hidden")){
      menuItems.classList.remove("hidden");
    }else{
      menuItems.classList.add("hidden");
    }
    
}


  