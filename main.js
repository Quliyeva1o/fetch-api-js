const cards = document.querySelector(".cards")
let cardItems = []
import url from "./constans.js"

fetch(url).then((response) => response.json())
    .then((data) => {
        cardItems = data
        renderdata(data);
    }).catch((err) => console.log(err))



function renderdata(arr) {
    cards.innerHTML = ''
    arr.map((cardItem) => {
        const backgroundColor = cardItem.completed ? 'rgb(234, 211, 255)' : 'pink';

        cards.innerHTML += `
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card" style="background-color: ${backgroundColor}">
                    <div class="card-body">
                        <h5 class="card-title">
                            ${cardItem.title}
                        </h5>
                        <p class="card-text">${cardItem.id}</p>
                        <p class="card-text completed">${cardItem.completed}</p>
                        <a href="details.html?id=${cardItem.id}" class="btn btn-purple">get info</a>
                    </div>
                </div>
            </div>`






    })
}


function search() {
    const searchInput = document.getElementById("search-input")
    const searchBtn = document.getElementById("search-btn")
    const showAllBtn = document.getElementById("show-all-btn")

    searchBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const searcheditems = cardItems.filter((x) => x.title.trim().toLowerCase().includes(searchInput.value.trim().toLowerCase()))
        renderdata(searcheditems);
    })

    showAllBtn.addEventListener('click', (e) => {
        e.preventDefault()
        renderdata(cardItems);
    })
}


const sortByNamee = document.getElementById('sortbynamee')
sortByNamee.addEventListener('change', function (e) {
    e.preventDefault()
    sortByName(this.value)
}
)

const isCompletedd = document.getElementById('isCompletedd')
isCompletedd.addEventListener('change', function (e) {
    e.preventDefault()
    isCompleted(this.value)
}
)


function sortByName(value) {
    let newSortArr = [...cardItems]
    if (value == 'a-z') {
        newSortArr = newSortArr.sort((x, y) => x.title.localeCompare(y.title));
        renderdata(newSortArr);
    }
    else if (value == 'z-a') {
        newSortArr = newSortArr.sort((x, y) => y.title.localeCompare(x.title));
        renderdata(newSortArr);
    }

}


function isCompleted(value) {
    if (value == 'all') {
        renderdata(cardItems)
    }
    if (value == 'completed') {
        const iscompletedArr = cardItems.filter((x) => x.completed == true);
        renderdata(iscompletedArr);
    }
    else if (value == 'pending') {
        const iscompletedArr = cardItems.filter((x) => x.completed == false);
        renderdata(iscompletedArr);
    }
}

search();
