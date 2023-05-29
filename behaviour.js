const referenceLinks = [
    {
        "title": "Shop All Amazon Products",
        "description": "Click Open in browser to open in app",
        "image": "https://uploads-ssl.webflow.com/6438e33d3d4e697cb6cf555d/643ed90241d741a9a0f22e19_amazon-logo.jpeg",
        "link": "https://www.amazon.com/shop/justicethetutor"
    },
    {
        "title": "Shop All Amazon Products",
        "description": "Click Open in browser to open in app",
        "image": "https://uploads-ssl.webflow.com/6438e33d3d4e697cb6cf555d/643ed90241d741a9a0f22e19_amazon-logo.jpeg",
        "link": "https://www.amazon.com/shop/justicethetutor"
    },
    {
        "title": "Shop All Amazon Products",
        "description": "Click Open in browser to open in app",
        "image": "https://uploads-ssl.webflow.com/6438e33d3d4e697cb6cf555d/643ed90241d741a9a0f22e19_amazon-logo.jpeg",
        "link": "https://www.amazon.com/shop/justicethetutor"
    },
    {
        "title": "Shop All Amazon Products",
        "description": "Click Open in browser to open in app",
        "image": "https://uploads-ssl.webflow.com/6438e33d3d4e697cb6cf555d/643ed90241d741a9a0f22e19_amazon-logo.jpeg",
        "link": "https://www.amazon.com/shop/justicethetutor"
    },
    {
        "title": "Shop All Amazon Products",
        "description": "Click Open in browser to open in app",
        "image": "https://uploads-ssl.webflow.com/6438e33d3d4e697cb6cf555d/643ed90241d741a9a0f22e19_amazon-logo.jpeg",
        "link": "https://www.amazon.com/shop/justicethetutor"
    },
]

const products = [
    {
        "title": "product1",
        "description": "asdsada",
        "image": "https://www.shutterstock.com/image-illustration/cube-pedestal-template-studio-scene-260nw-1560932045.jpg",
        "link": "https://www.amazon.com/shop/justicethetutor"
    },
    {
        "title": "product2",
        "description": "asdsada",
        "image": "https://www.shutterstock.com/image-illustration/cube-pedestal-template-studio-scene-260nw-1560932045.jpg",
        "link": "https://www.amazon.com/shop/justicethetutor"
    },
    {
        "title": "product3",
        "description": "asdsada",
        "image": "https://www.shutterstock.com/image-illustration/cube-pedestal-template-studio-scene-260nw-1560932045.jpg",
        "link": "https://www.amazon.com/shop/justicethetutor"
    },
    {
        "title": "product",
        "description": "asdsada",
        "image": "https://www.shutterstock.com/image-illustration/cube-pedestal-template-studio-scene-260nw-1560932045.jpg",
        "link": "https://www.amazon.com/shop/justicethetutor"
    },
    {
        "title": "product",
        "description": "asdsada",
        "image": "https://www.shutterstock.com/image-illustration/cube-pedestal-template-studio-scene-260nw-1560932045.jpg",
        "link": "https://www.amazon.com/shop/justicethetutor"
    },
    {
        "title": "product",
        "description": "asdsada",
        "image": "https://www.shutterstock.com/image-illustration/cube-pedestal-template-studio-scene-260nw-1560932045.jpg",
        "link": "https://www.amazon.com/shop/justicethetutor"
    },
    {
        "title": "product",
        "description": "asdsada",
        "image": "https://www.shutterstock.com/image-illustration/cube-pedestal-template-studio-scene-260nw-1560932045.jpg",
        "link": "https://www.amazon.com/shop/justicethetutor"
    },
    {
        "title": "product",
        "description": "asdsada",
        "image": "https://www.shutterstock.com/image-illustration/cube-pedestal-template-studio-scene-260nw-1560932045.jpg",
        "link": "https://www.amazon.com/shop/justicethetutor"
    },

]

function loadReferenceLink(inputReferenceLinks) {
    const holder = document.getElementById("referenceLinkHolder");
    inputReferenceLinks.forEach((e) => {
        let anchorTag = document.createElement("a");
        let img = document.createElement("img");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");

        div1.className = "row gx-1";
        div2.className = "col-xl-9 col-md-11 col-lg-11 col-sm-10 col-xs-10 col-10 pl-3 pr-1 pb-2";
        div3.className = "text-justify";
        div4.className = "text-justify";
        img.className = "d-xl-inline d-lg-none d-sm-inline col-xl-3 col-lg-1 col-md-1 col-sm-2 col-xs-2 col-2 shadow-sm mt-1";

        div3.innerText = e.title;
        div4.innerText = e.description;
        anchorTag.href = e.link;
        img.src = e.image;

        div2.appendChild(div3);
        div2.appendChild(div4);
        div1.appendChild(img);
        div1.appendChild(div2);
        anchorTag.appendChild(div1);
        holder.appendChild(anchorTag);
    })
}

function loadProducts(inputProducts) {
    const holder = document.getElementById("productsHolder");
    inputProducts.forEach((e) => {
        let anchorTag = document.createElement("a");
        let img = document.createElement("img");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");
        let h6 = document.createElement("h6");
        let p = document.createElement("p");

        div1.className = "col-md-4 col-sm-6 mb-4 pb-2 product-card";
        div2.className = "list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm";
        div3.className = "p-3 position-relative";
        div4.className = "list-card-body";
        anchorTag.className = "text-decoration-none";
        img.className = "img-fluid item-img";
        h6.className = "mb-1 text-black text-decoration-underline";
        p.className = "text-gray mb-3 text-black";

        h6.innerText = e.title;
        p.innerText = e.description;
        img.src = e.image;
        anchorTag.href = e.link;

        div4.appendChild(h6);
        div4.appendChild(p);
        div3.appendChild(div4);
        anchorTag.appendChild(img);
        anchorTag.appendChild(div3);
        div2.appendChild(anchorTag);
        div1.appendChild(div2);
        holder.appendChild(div1);

    });
}

function searchProduct(inputTitleProduct) {
    const arrayOfHTMLProducts = document.getElementsByClassName("product-card");

    Array.from(arrayOfHTMLProducts).reverse().forEach((e) => {
        if (e.children[0].children[0].children[1].children[0].children[0].innerText.search(inputTitleProduct) === -1) {
            e.classList.remove('show');
            e.classList.add('hide');
        } else {
            e.classList.remove('hide');
            e.classList.add('show');
        }
    })
}

window.onload = () => {
    loadReferenceLink(referenceLinks);
    loadProducts(products);

    const searchBar = document.getElementById("searchBar");
    searchBar.addEventListener("keyup", (e) => {
        searchProduct(searchBar.value);
    });
};