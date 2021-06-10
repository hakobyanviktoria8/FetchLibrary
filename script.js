searchBtn.onclick = async () => {
    let bookName = search.value;
    let url = 'https://www.googleapis.com/books/v1/volumes?q='+bookName;
    let response = await fetch(url);
    let commits = await response.json();
    for (let book of commits.items){
        let avatar = book.volumeInfo.imageLinks.thumbnail;
        let page = book.volumeInfo.previewLink;
        let title = book.volumeInfo.title;
        let authors = book.volumeInfo.authors.join(",");
        let publishedDate = book.volumeInfo.publishedDate;
        let pageCount = book.volumeInfo.pageCount;

        let card =
            `<div class="col-lg-2 overflow-auto my-4 border">
                    <a href="${page}"><img src = ${avatar} class="w-100" title="See book"></a>
                    <h4 class="text-center">${title}</h4>
                    <h6>Authors ${authors}</h6>
                    <h6>Published date ${publishedDate}</h6>
                    <small>Page count ${pageCount}</small>
                </div>`;

        rowCard.innerHTML += card
    }
};