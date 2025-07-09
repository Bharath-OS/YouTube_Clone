const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    const searchElement = document.getElementById('search-bar').value.trim();
    if (searchElement === "")
        alert("Search bar is empty!");
    else
        alert(`You typed ${searchElement} on the search bar`);
        console.log();
});

// Toggle sidebar
const image = document.getElementById('channel-button');

image.addEventListener('click', () => {

    if (document.getElementById('ytSidebar').classList.contains('d-none')) {
        document.getElementById('ytSidebar').classList.replace('d-none', 'd-block');
    }
    else {
        document.getElementById('ytSidebar').classList.replace('d-block', 'd-none');
    }
});