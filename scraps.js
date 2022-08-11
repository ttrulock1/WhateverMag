// all below is a throwabullshit from home.js

const titleInsert = (blog) => {
    let data = blog.data();
    // test.innerHTML += ` fucker
    // <div class="blog-card">
    //     <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
    //     <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>

    // </div>
    // `;
    text2.innerHTML += `
    <p class="text2"><span class= "head">${data.article.substring() + '...'} </span class></p>
    `;

    text2.innerHTML=`
    <p class="text2">${data.article.publishedAt}</p>`
}

const textInsert = (blog) => {
    let data = blog.data();
    Headline1.innerHTML += ` fucker
    <div class="blog-card">
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>

    </div>
    `;
    text2.innerHTML += `
    <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
    `;

    if (this.data.position = 1){
        Headline1.innerHTML += `
        <p>i have done it shitere aefadf adwfka;dfaefkwefniccasdf</p>
        <div class="blog-card">
             <h1 class="blog-title">${this.data.title.substring(0, 100) + '...'}</h1>
             <p class="blog-overview">${this.data.article.substring(0, 200) + '...'}</p>
        </div>
        `;
        }

}

const Headline2 = (blog) => {
    let data = blog.data();    
    if (data.position = 1){
    Headline1.innerHTML += `
    <p>i have done it shitere aefadf adwfka;dfaefkwefniccasdf</p>
    <div class="blog-card">
         <h1 class="blog-title">${this.data.title.substring(0, 100) + '...'}</h1>
         <p class="blog-overview">${this.data.article.substring(0, 200) + '...'}</p>
    </div>
    `;
    }
}
