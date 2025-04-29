const offerHide = document.getElementById("offerHide")
const offer = document.querySelector(".offer")
offerHide.addEventListener("click", function(){
    offer.style.display = "none"
})
var sidenav=document.querySelector(".sidenav")
var close=document.getElementById("close")

menu.addEventListener("click",function(){
    sidenav.style.left="0"

})
close.addEventListener("click",function(){
    sidenav.style.left = "-50%"
})


// products
document.addEventListener("DOMContentLoaded",function()
{
    const productContainer = document.getElementById("productcontainer")
    const search = document.getElementById("Search")
    const productList = productContainer.querySelectorAll("div")

    search.addEventListener("keyup",function(event){
        const enteredValue = event.target.value.toUpperCase();
        for(let i=0;i<productList.length;i++){
            const productName = productList[i].textContent.toUpperCase()
            if(productName.indexOf(enteredValue)<0)
            {
                productList[i].style.display="none"
            }
        else{
            productList[i].style.display="block"


        }
    

        }
    })
    // Function to filter based on all checkboxes
    function applyFilters() {
        // const products = document.querySelectorAll(".image-container > div");
        const product=document.getElementById("productcontainer")
        const products=product.querySelectorAll("div")

        // Get checked checkbox values
        const checkedTags = Array.from(document.querySelectorAll('input[name="tag"]:checked')).map(cb => cb.value.toLowerCase());
        const checkedColors = Array.from(document.querySelectorAll('input[name="colors"]:checked')).map(cb => cb.id.toLowerCase());
        const checkedArrivals = Array.from(document.querySelectorAll('input[name="arrivals"]:checked')).map(cb => cb.id.toLowerCase());

        products.forEach(product => {
            const title = product.querySelector("h1").textContent.toLowerCase();
            
            // Check if the product matches all selected filters
            let tagMatch = checkedTags.length === 0 || checkedTags.some(tag => title.includes(tag));
            let colorMatch = checkedColors.length === 0 || checkedColors.some(color => title.includes(color));
            let arrivalMatch = checkedArrivals.length === 0 || checkedArrivals.some(tag => title.includes(tag));

            // Show product if all filters match, otherwise hide it
            if (tagMatch && colorMatch && arrivalMatch) {
                product.style.display = "Inline-block";
            } else {
                product.style.display = "none";
            }
        });
    }

    // Add event listener for all checkboxes
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", applyFilters);
    });

})