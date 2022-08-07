// everything checks out below exact same

const test = document.querySelector('.test');
const title = document.querySelector('.test1')
// const blogSection = document.querySelector('.blogs-section');


// db.collection("blogs").get().then((blogs) => {
//     blogs.forEach(blog => {
//         if(blog.id != decodeURI(location.pathname.split("/").pop())){
//             createBlog(blog);
//         }
//     })
// }) 


// const createBlog = (blog) => {
//     let data = blog.data();
//     blogSection.innerHTML += `
//     <div class="blog-card">
//         <img src="${data.bannerImage}" class="blog-image" alt="">
//         <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
//         <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
//         <a href="/${blog.id}" class="btn dark">read</a>
//     </div>
//     `;
// }

db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            titleInsert(blog);
        }
    })
}) 


const titleInsert = (blog) => {
    let data = blog.data();
    test.innerHTML += `
    <div class="blog-card">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
    </div>
    `;
}

const insertBlogtoNewspaper = (blog)  =>{
    let data = blog.data();
    title.innerHTML += ` "hello"
    <div class= "texttopaper>
         <h1 class = "blog-title1"> "${data.title.substring(0, 100) + '...'}<h1>
`;
}



// const insertBlogtoNewspaper2 = (blog) => {
//     if(`${Headline}` === ){
//         title.innerHTML += `
//         div class
        
//         `
//     }
// }

const titleInsert1 = (blog) => {
    
    
    
    
    let data = blog.data();
    if(x[0]= custom-Select.value()){  
    test.innerHTML += ` sheit kjadlfasdf;lsdfjl ds
    <div class="blog-card">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
    </div>
    `;
    }
    titleInsert1(blog)
};


const Headline = (blog) => {
    let data = blog.data();    
    if (position = 0){
    Headline1.innerHTML += `i have done it shitere aefadf adwfka;dfaefkwefniccasdf
    <div class="blog-card">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
    </div>
    `;
    }
}