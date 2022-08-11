// everything checks out below exact same

const test = document.querySelector('.test');
const title = document.querySelector('.test1');
const Headline1= document.querySelector('.Headline1');
const Headline2= document.querySelector('.headline hl5')
const text2 = document.querySelector('.text2')

const blogSection = document.querySelector('.blogs-section');


db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            titleInsert(blog);
        }
    })
}) 

// const titleInsert = (blog) => {
//     let data = blog.data();
//     // test.innerHTML += ` fucker
//     // <div class="blog-card">
//     //     <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
//     //     <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>

//     // </div>
//     // `;
//     text2.innerHTML += `
//     <p class="text2"><span class= "head">${data.article.substring() + '...'} </span class></p>
//     `;

//     text2.innerHTML=`
//     <p class="text2">${data.article.publishedAt}</p>`
// }

// const textInsert = (blog) => {
//     let data = blog.data();
//     Headline1.innerHTML += ` fucker
//     <div class="blog-card">
//         <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>

//     </div>
//     `;
//     text2.innerHTML += `
//     <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
//     `;

//     if (this.data.position = 1){
//         Headline1.innerHTML += `
//         <p>i have done it shitere aefadf adwfka;dfaefkwefniccasdf</p>
//         <div class="blog-card">
//              <h1 class="blog-title">${this.data.title.substring(0, 100) + '...'}</h1>
//              <p class="blog-overview">${this.data.article.substring(0, 200) + '...'}</p>
//         </div>
//         `;
//         }

// }

// const Headline2 = (blog) => {
//     let data = blog.data();    
//     if (data.position = 1){
//     Headline1.innerHTML += `
//     <p>i have done it shitere aefadf adwfka;dfaefkwefniccasdf</p>
//     <div class="blog-card">
//          <h1 class="blog-title">${this.data.title.substring(0, 100) + '...'}</h1>
//          <p class="blog-overview">${this.data.article.substring(0, 200) + '...'}</p>
//     </div>
//     `;
//     }
// }
//

// below is a hypothetical function that will allow me to position the articles in the right spot. Beyond this, it supposedly replaces the previous the article with most recently update article 



const titleInsert = (blog) => {
    let data= blog.data();
    let clonedData = {...data};

//     let correctArticle = blog.sort((a, b) => a.blogDate - b.blogDate)
    // const sortedActivities = data.sort((a, b) => b.date - a.date)
    // this would switch data on the line below to correct aritlce

    let {article, bannerImage, position, date, title} = data;

  

    if(position=== "0"){
    
        text2.innerHTML += `
        <p class="text2"><span class= "head">${title} </span class></p>
        `    
        text2.innerHTML += `
        <p class="text1"><span class= "head"> fdddfasd${article} </span class></p>
        `
        // ${correctArticle.image}

        console.log(position);
        console.log(article)
    }




      else if  (position==="1"){
        // text2.innerHTML += `
        // <p class="text2"><span class= "head">${article} </span class></p>
        // `
        // text2.innerHTML += `
        // <p class="text2"><span class= "head">${title} </span class></p>
        // `
        // // ${correctArticle.image}

        // console.log(title)
    }


     else if (position==="10"){
      
console.log(position, title);
        smallArticleTitle6.innerHTML += `
        <p class="text2"><span class= "head">title: ${title} </span class></p>
        `
        smallArticleText6.innerHTML += `
        <p class="text2"><span class= "head"> article: ${article} </span class></p>
        `

        
        // ${correctArticle.image}

        console.log(position)
    }


    else {return null}
//     if(position=1){
//         headlinehl3.innerHTML += `
//         ${correctArticle.title}
//         `
//         text2.innerHTML += `
//         ${correctArticle.article}
//         `
//         // ${correctArticle.image}
//     };

//     if(position=3){
//         headlinehl1.innerHTML += `
//         ${correctArticle.title}
//         `
//         text3.innerHTML += `
//         ${correctArticle.article}
//         `
//         // ${correctArticle.image}
//     };

// }


};

//


// function processNewTransaction(orderObject, newTransAmount) {
//   let clonedCharges = [...orderObject.charges];
//   // 1. Apply existing refunds to charges.
//   orderObject.refunds.forEach(({charge_id, amount}) => {
//     clonedCharges.find(({id}) => id === charge_id).amount += amount;
//   })
//   // 2. Sort remaining values in charges by amount ascending.
//   clonedCharges = clonedCharges.sort((a, b) => a.amount - b.amount)
//   // 3. Apply remaining credit iteratively to sorted charges, creating refunds with corresponding charge IDs.
//   let remainingTransAmount = 0 - newTransAmount;
//   for (let i = 0; i < clonedCharges.length && remainingTransAmount > 0; i++) {
//     const charge = clonedCharges[i];
//     const amountAppliedToCharge = Math.min(charge.amount, remainingTransAmount)
//     if (amountAppliedToCharge > 0) {
//       remainingTransAmount -= amountAppliedToCharge;
//       orderObject.refunds.push({
//         charge_id: charge.id,
//         amount: 0 - amountAppliedToCharge
//       })
//     }
//   }
//   return orderObject;
// }

// console.log(processNewTransaction(order2, newTransAmount2))