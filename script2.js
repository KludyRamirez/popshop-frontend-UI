$(document).ready(function() {
    $("#cart").hide();
  });
var a;
function show_hide()
{
    if(a==1)
    {
        document.getElementById("cart").style.display="none";
        return a=0;
    }

    else
    {
        document.getElementById("cart").style.display="block";
        return a=1;
    }
}
