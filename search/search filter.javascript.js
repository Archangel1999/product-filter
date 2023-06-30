let products={
    data:[{
productName:"Regular white T-shirt",
category:"Topwear",
price:"30",
image:"whiteT shirt.jpg",},
{
    productName:"Regular white T-shirt",
    category:"Topwear",
    price:"30",
    image:"white girl Tshirt.jpg",},
    {
        productName:"Biege Short Skirt",
        category:"Bottomwear",
        price:"49",
        image: "skirt.jpg",},
        {
            productName:"Sporty SmartWatch",
            category:"watch",
            price:"76",
            image:"smartwatch.jpg",},
            {
                productName:"Basic Kniffed Top",
                category:"Topwear",
                price:"88",
                image:"kniffed.jpg",},
                
                {
                    productName:"Black Leather",
                    category:"Jacket",
                    price:"124",
                    image:"jacket.jpg",},
                    {
                        productName:"Stylish Pink Trouser",
                        category:"Bottomwear",
                        price:"30",
                        image:"pink trouser.jpg",},

                        {
                            productName:"Brown Men's Jacket",
                            category:"Jacket",
                            price:"30",
                            image:"brown jacket.jpg",},
                            {
                                productName:"Comfy Gray Pants",
                                category:"Bottomwear",
                                price:"39",
                                image:"comfy pant.jpg",},
                                
                                                        
],
};
for(let i of products.data){
    //create card
    let card=document.createElement("div");
    //card should have category and should stay hidden initailly
    card.classList.add("card",i.category,"hide");
    //image div
    let imgContainer=document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image=document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
//container
let container=document.createElement("div");
container.classList.add("container");
//product name
let name=document.createElement("h5");
name.classList.add("product-name");
name.innerText=i.productName.toUpperCase();
container.appendChild(name);
//price
let price=document.createElement("h6");
price.innerText="$"+i.price;
container.appendChild(price);


card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
// parameter passed from button (parameter as same as category)
function filterProduct(value){
    //button class
    let buttons=document.querySelectorAll(".button-value");
    buttons.forEach(button=>{
        //check if value equals innerText
        if(value.toUpperCase()==button.innerText.toUpperCase()){
            button.classList.add("active");
        } else{
            button.classList.remove("active");
        }
    })
//select all cards
let elements=document.querySelectorAll(".card");
//loop through all cards
elements.forEach((element)=>{
    //display all cards on "all" button click
    if (value=="all"){
        element.classList.remove("hide");
    }else{
        //check if element contains category class
        if (element.classList.contains(value)){
//display element based on category 
element.classList.remove("hide");
        }
        else{
            //hide other element 
            element.classList.add("hide");
        }
    }
});
// search button click
document.getElementById("search").addEventListener
("click",()=>{
//initializations
let searchInput=document.getElementById
("search-input").value;
let elements=document.querySelectorAll(".product-name");
let cards=document.querySelectorAll(".card");
//looo through all element
elements.forEach((element,index)=>{
    //c check if text include the search value
    if(element.innerText.includes(searchInput.toUpperCase()))
    {
        //display matching card
        cards[index].classList.remove("hide");
    }else{
        //hide others 
        cards[index].classList.add("hide")
    }
})
});
}
//Initially display all products
window.onload=()=>{
    filterProduct("all");
}