const productlist = document.getElementById("product-list");
const searchinput = document.getElementById("search-input");
const searchbtn = document.getElementById("search-btn");
const categorybtns = document.querySelectorAll(".category-btn");

function filterproduct() {
    const searchValue = searchinput.value.toLowerCase();
    const activecategory = document.querySelector(".category-btn.active").dataset.category;
    const productitems = document.querySelectorAll(".product-item");

    productitems.forEach((item) => {
        const title = item.querySelector("h3").innerText.toLowerCase();
        const category = item.dataset.category;

        if ((title.includes(searchValue) || searchValue === "") && (activecategory === "all" || category === activecategory)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function setCategory(e) {
    categorybtns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    filterproduct();
}

searchbtn.addEventListener("click", filterproduct);
searchinput.addEventListener("keyup", filterproduct);

categorybtns.forEach((btn) => {
    btn.addEventListener("click", setCategory);
});