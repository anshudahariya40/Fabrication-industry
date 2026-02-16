// responsive navabr
function showSidebar(){
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display='flex';
}
function hideSidebar(){
 const sidebar=document.querySelector('.sidebar');
  sidebar.style.display='none';
}

const btn = document.querySelector("button");
btn.addEventListener("click", function() {
    alert("Welcome  to Mamtaengineering!");
} );

