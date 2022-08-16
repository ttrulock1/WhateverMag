// everything checks out below exact same

// This is HEADLINE 1
const title1 = document.querySelector('.headlinehl3')
const text1 = document.querySelector('.text1')
// this is the second heromine
const title2= document.querySelector('.headlinehl5')
const text2 = document.querySelector('.text2')
// This is the Third Headline Luke
const title3= document.querySelector('.headlinehl1');
const text3= document.querySelector('.text3');

// This is the Fourth Headline Luke
const title4= document.querySelector('.headlinehl4');
const text4= document.querySelector('.text4');
const link = document.querySelector('.headlinehl4','.text4');

// trying to add hyper links
const blogSection = document.querySelector('.headlinehl4','.text4');



// This is the Third Headline Luke
const title5= document.querySelector('.headlinehl6');
const text5= document.querySelector('.text5');



const smallArticleTitle1=document.querySelector('#smallArticleTitle1');
const smallArticleText1=document.querySelector('#smallArticleText1');


const smallArticleTitle4=document.querySelector('#smallArticleTitle4');
const smallArticleText4=document.querySelector('#smallArticleText4');

// const blogSection = document.querySelector('.blogs-section');

// make enter button aslo create a new paragraph. 

db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            titleInsert(blog);
        }
    })
}) 
// Altogether





const titleInsert = (blogs) => {
    let data= blogs.data();
    let clonedData = {...data};



 
    // this would switch data on the line below to correct aritlce
    // now below i used bottom article inside of bottom artilce thats doing the same line thing so I need to copy bottom article everything except the borders style rename that bottomarticle1 then update everything

    let {article, bannerImage, position, date, title} = data;
        
    console.log(clonedData.title)


 
    if(position=== "0"){
    
        title1.innerHTML += `
        <p class="headline hl1"><span class= "head">${title} </span class></p>
        `    
        text1.innerHTML += `
        <p class="text1"><span class= "head"> ${article} </span class></p>
        `
        // ${correctArticle.image}

        console.log(position);
        console.log(article);
        console.log(bannerImage)
    }

      else if  (position==="1"){
        title2.innerHTML += `
        <p class="headline hl5"><span class= "head">${title} </span class></p>
        `    
        text2.innerHTML += `
        <p>${article}</p>
        `
        // ${correctArticle.image}

        console.log(position);
        console.log(article)
    }

    else if  (position==="2"){
        text3.innerHTML += `
        <p class="">${article.substring(0, 750) } </p>
        `
        title3.innerHTML += `
        <p><span class= "headline hl2">${title} </span class></p>
        `
        // ${correctArticle.image}

        console.log(title)
    }

    else if  (position==="3"){
        title4.innerHTML += `
        <p class="headline hl5"><span class= "head">${title} </span class></p>
        `    
        console.log(article)

        // below is the beginging of the final code
        // if (secondaryHeadline = 0) return{
        //     pop up secondary heading box
        //     text of headline
        // }
        // enter lines about a citatation, and caption
         // if (quote = 0) return{
        //     pop up quote box
        //     text of quote
        // }

        // add image or not. Remember adding an image is not nessary but can be fucking great.
        // if (Img uploaded = true) return{
        //     pop up caption (enter caption)
        //     text of headline
        // }

        text4.innerHTML += `
        <p>${article.substring(0, 1000)}</p>

        <a href="/${data.linkURL}" class="btn dark">read</a>
        `
        const createBlog = (blog) => {
        blogSection.innerHTML += `
        `

        }
        createBlog();

        // ${correctArticle.image}

        console.log(position);
        console.log(article)
// 



    }

    


    else if  (position==="4"){
        title5.innerHTML += `
        <p class="headline hl5"><span class= "head">${title} </span class></p>
        `    
        text5.innerHTML += `
        <p>${article.substring(0, 500)}}</p>
        `
        // ${correctArticle.image}

        console.log(position);
        console.log(article)
    }
    else if (position==="5"){
      
        console.log(position, title);
                smallArticleTitle1.innerHTML += `
                <p> ${title} </p>
                `
                smallArticleText1.innerHTML += `
                <p>${article.substring(0, 240)}</p>
                `
        
                
                // ${correctArticle.image}
        
                console.log(position)
            }

    

    else if (position==="6"){
      
        console.log(position, title);
                smallArticleTitle2.innerHTML += `
                <p>${title}</p>
                `
                smallArticleText2.innerHTML += `
                <p> ${article.substring(0, 240)}} </p>
                `
        
                
                // ${correctArticle.image}
        
                console.log(position)
            }
        
   else if (position==="7"){
      
        console.log(position, title);
                smallArticleTitle3.innerHTML += `
                <p>${title} </p>
                `
                smallArticleText3.innerHTML += `
                <p> ${article.substring(0, 240)}}</p>
                `
        
                
                // ${correctArticle.image}
        
                console.log(position)
            }



    else if (position==="8"){
      
        console.log(position, title);
                smallArticleTitle4.innerHTML += `
                <p>${title} </p>
                `
                smallArticleText4.innerHTML += `
                <p> ${article.substring(0, 240)}} </p>
                `
        
                
                // ${correctArticle.image}
        
                console.log(position)
            }
        



    else if (position==="8"){
      
        console.log(position, title);
                smallArticleTitle4.innerHTML += `
                <p>${title}</p>
                `
                smallArticleText4.innerHTML += `
                <p> ${article.substring(0, 240)} (click to continue reading) </p>
                `
        
                
                // ${correctArticle.image}
        
                console.log(position)
            }
        


    else if (position==="9"){
      
        console.log(position, title);
                smallArticleTitle5.innerHTML += `
                <p>${title}</p>
                `
                smallArticleText5.innerHTML += `
                <p> ${article.substring(0,240)}</p>
                `
        
                
                // ${correctArticle.image}
        
                console.log(position)
            }

     else if (position==="10"){
      
console.log(position, title);
        smallArticleTitle6.innerHTML += `
        <p>${title} </p>
        `
        smallArticleText6.innerHTML += `
        <p> ${article} </p>
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




