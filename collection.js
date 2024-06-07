var productContainer=document.getElementById("product")
var productSearch=document.getElementById("search")
var productList=productContainer.querySelectorAll("div")

productSearch.addEventListener("keyup",function () {
    var enterValue=event.target.value.toUpperCase()

    for(count=0;count<productList.length;count++){
        var  productName=productList[count].querySelector("p").textContent

        if(productName.toUpperCase().indexOf(enterValue)<0){
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
        }
    }
})