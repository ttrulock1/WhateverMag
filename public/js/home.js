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
            insert2(blog);
        }
    })
}) 


const insert2 = (blog) => {
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