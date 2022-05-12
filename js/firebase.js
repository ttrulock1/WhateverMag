// I put a bunch of wrong code here. See below. Look at why this doesn't go here.
// I need to enter my firebase credentials here.

let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyDnxW-I9bCdZXM8MpKQO1mJeG952D8ZNfk",
    authDomain: "whatevermag-9968f.firebaseapp.com",
    projectId: "whatevermag-9968f",
    storageBucket: "whatevermag-9968f.appspot.com",
    messagingSenderId: "727367003947",
    appId: "1:727367003947:web:094c8cf3c9ccd23a8fdf6e"

};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

// let blogId = decodeURI(location.pathname.split("/").pop());

// let docRef = db.collection("blogs").doc(blogId);

// docRef.get().then((doc) => {
//     if(doc.exists){
//         setupBlog(doc.data());
//     } else{
//         location.replace("/");
//     }
// })

// const setupBlog = (data) => {
//     const banner = document.querySelector('.banner');
//     const blogTitle = document.querySelector('.title');
//     const titleTag = document.querySelector('title');
//     const publish = document.querySelector('.published');

//     banner.style.backgroundImage = `url(${data.bannerImage})`;

//     titleTag.innerHTML += blogTitle.innerHTML = data.title;
//     publish.innerHTML += data.publishedAt;

//     const article = document.querySelector('.article');
//     addArticle(article, data.article);
// }

// const addArticle = (ele, data) => {
//     data = data.split("\n").filter(item => item.length);
//     // console.log(data);

//     data.forEach(item => {
//         // check for heading
//         if(item[0] == '#'){
//             let hCount = 0;
//             let i = 0;
//             while(item[i] == '#'){
//                 hCount++;
//                 i++;
//             }
//             let tag = `h${hCount}`;
//             ele.innerHTML += `<${tag}>${item.slice(hCount, item.length)}</${tag}>`
//         } 
//         //checking for image format
//         else if(item[0] == "!" && item[1] == "["){
//             let seperator;

//             for(let i = 0; i <= item.length; i++){
//                 if(item[i] == "]" && item[i + 1] == "(" && item[item.length - 1] == ")"){
//                     seperator = i;
//                 }
//             }

//             let alt = item.slice(2, seperator);
//             let src = item.slice(seperator + 2, item.length - 1);
//             ele.innerHTML += `
//             <img src="${src}" alt="${alt}" class="article-image">
//             `;
//         }

//         else{
//             ele.innerHTML += `<p>${item}</p>`;
//         }
//     })
// }
