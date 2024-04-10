/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const parts = url.split('/');
        const breed = parts[parts.length - 2]
        // const breed = url.breed;

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const figure = document.createElement("figure");
        const newImage = document.createElement("img");
        newImage.src = url;
        // newImage.alt = breed;
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = breed;

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        figure.appendChild(newImage);
        figure.appendChild(figcaption);
        const listElement = document.createElement('li');
        listElement.appendChild(figure);
        const gallery = document.querySelector('.gallery ul');
        gallery.appendChild(listElement);

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const firstImage = document.querySelector('.gallery li:first-child');

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    if (firstImage) {
        firstImage.remove();
    } else {
        console.log("No se encontró ninguna imagen para eliminar.");
    }
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const firstImage = document.querySelector('.gallery li:last-child');

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    if (firstImage) {
        firstImage.remove();
    } else {
        console.log("No se encontró ninguna imagen para eliminar.");
    }
});
