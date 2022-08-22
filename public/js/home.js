// everything checks out below exact same

// This is HEADLINE 1
const title1 = document.querySelector('.headlinehl3');
const text1 = document.querySelector('.text1');
// const image0 = document.querySelector('.image0');
// const link = document.querySelector('.headlinehl4','.text4');
const citation0 = document.querySelector('.citation0');
const subtitle0 = document.querySelector('.subtitle0');
// caption1= document.querySelectory('caption1')

// this is the second sheadline (2)
const title2= document.querySelector('.title2');
const text2 = document.querySelector('.text2');
// const image0 = document.querySelector('.image0');
// const link = document.querySelector('.headlinehl4','.text4');
const citation2 = document.querySelector('.citation2');
const subtitle2 = document.querySelector('.subtitle2');
// caption1= document.querySelectory('caption1')



// This is the Third Headline (3)
const title3= document.querySelector('.headlinehl1');
const text3= document.querySelector('.text3');
// const image0 = document.querySelector('.image0')
// const link = document.querySelector('.headlinehl4','.text4');
const citation3 = document.querySelector('.citation3')
const subtitle3 = document.querySelector('.subtitle3')
// caption1= document.querySelectory('caption1')



// This is the Fourth Headline (4)
const title4= document.querySelector('.headlinehl4');
const text4= document.querySelector('.text4');
// const link = document.querySelector('.headlinehl4','.text4');
// const image0 = document.querySelector('.image0')
const citation4 = document.querySelector('.citation4')
const subtitle4 = document.querySelector('.subtitle4')
// caption1= document.querySelectory('caption1')


// This is the Fifth Headline (5)
const title5= document.querySelector('.title5');
const text5= document.querySelector('.text5');
// const link5 = document.querySelector('.headlinehl4','.text4');
// const image5 = document.querySelector('.image0')
const citation5 = document.querySelector('.citation5')
const subtitle5 = document.querySelector('.subtitle5')
// caption1= document.querySelectory('caption1')


// This is the sixth Headline (6)
const title6= document.querySelector('.title6');
const text6= document.querySelector('.text6');
// const link6= document.querySelector('.headlinehl4','.text4');
// const image6 = document.querySelector('.image0')
const citation6 = document.querySelector('.citation6')
const subtitle6 = document.querySelector('.subtitle6')
// caption1= document.querySelectory('caption1')

// This is the seventh Headline (6)
const title7= document.querySelector('.title7');
const text7= document.querySelector('.text7');
// const link7 = document.querySelector('.headlinehl4','.text7');
// const image7 = document.querySelector('.image7')
const citation7 = document.querySelector('.citation7')
const subtitle7 = document.querySelector('.subtitle7')
// caption7= document.querySelectory('caption7')




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
        citation0.innerHTML += `
        <p class="citation"><span class= "head"> ${data.citation} </span class></p>
        `
        subtitle0.innerHTML += `
        <span class="headline hl2"> ${data.subtitle} </span> 
        `
        // image0.innerHTML += `
        // <p class="image0"> <span.class= "head">${data.bannerImage}</span class></p>
        // `

        console.log(position);
        console.log(article);
        console.log(bannerImage)
    }

      else if  (position==="1"){
        title2.innerHTML += `
        <p class="headline hl1"><span class= "head">${title} </span class></p>
        `    
        text2.innerHTML += `
        <p class="text1"><span class= "head"> ${article} </span class></p>
        `
        citation2.innerHTML += `
        <p class="citation"><span class= "head"> ${data.citation} </span class></p>
        `
        subtitle2.innerHTML += `
        <span class="headline hl2"> ${data.subtitle} </span> 
        `
        // image0.innerHTML += `
        // <p class="image0"> <span.class= "head">${data.bannerImage}</span class></p>
        // `

        

        console.log(position);
        console.log(article);
        console.log(bannerImage)
    }

    else if  (position==="2"){
        title3.innerHTML += `
        <span class= "headline hl2">${title} </span class>
        `
        text3.innerHTML += `
        <p class="">${article.substring(0, 750) } </p>
        `
        citation3.innerHTML += `
        <p class="citation"><span class= "head"> ${data.citation} </span class></p>
        `
        subtitle3.innerHTML += `
        <span class="headline hl2"> ${data.subtitle} </span> 
        `
        // image0.innerHTML += `
        // <p class="image0"> <span.class= "head">${data.bannerImage}</span class></p>
        // `
        console.log(title)
    }

    else if  (position==="3"){
        title4.innerHTML += `
        <span class= "headline hl2">${title} </span class>
        `
        text4.innerHTML += `
        <p class="">${article.substring(0, 750) } </p>
        `
        // citation4.innerHTML += `
        // <p class="citation"><span class= "head"> ${data.citation} </span class></p>
        // `
        // subtitle4.innerHTML += `
        // <span class="headline hl2"> ${data.subtitle} </span> 
        // `
        // image0.innerHTML += `
        // <p class="image0"> <span.class= "head">${data.bannerImage}</span class></p>
        // `

        console.log(title)
    }




    else if  (position==="4"){
        title5.innerHTML += `
        <p class="headline hl1"><span class= "head">${title} </span class></p>
        `    
        text5.innerHTML += `
        <p class="text1"><span class= "head"> ${article.substring(0, 750)} </span class></p>
        `
        citation5.innerHTML += `
        <p class="citation"><span class= "head"> ${data.citation} </span class></p>
        `
        subtitle5.innerHTML += `
        <span class="headline hl2"> ${data.subtitle} </span> 
        `
        // image5.innerHTML += `
        // <p class="image0"> <span.class= "head">${data.bannerImage}</span class></p>
        // `

    }

    else if  (position==="5"){
        title6.innerHTML += `
        <p class="headline hl1"><span class= "head">${title} </span class></p>
        `    
        text6.innerHTML += `
        <p class="text1"><span class= "head"> ${article} </span class></p>
        `
        citation6.innerHTML += `
        <p class="citation"><span class= "head"> ${data.citation} </span class></p>
        `
        subtitle6.innerHTML += `
        <span class="headline hl2"> ${data.subtitle} </span> 
        `
        // image5.innerHTML += `
        // <p class="image0"> <span.class= "head">${data.bannerImage}</span class></p>
        // `

    }


    
    else if (position==="6"){
      
        console.log(position, title);
                smallArticleTitle1.innerHTML += `   
                <a href="/${data.linkURL}">
                <p> ${title} </p>
                </a>
                `
                smallArticleText1.innerHTML += `
                <p>${article.substring(0, 240)}</p>
                `
                console.log(position);
      
            }
            

      else if (position==="7"){
        console.log(position, title);
                smallArticleTitle2.innerHTML += `
                <p>${title}</p>
                `
                smallArticleText2.innerHTML += `
                <p> ${article.substring(0, 240)}} </p>
                `
                console.log(position)
            }
        
        else if (position==="8"){
      
        console.log(position, title);
                smallArticleTitle3.innerHTML += `
                <p>${title} </p>
                `
                smallArticleText3.innerHTML += `
                <p> ${article.substring(0, 240)}}</p>
                `
                console.log(position)
            }



    else if (position==="9"){
      
        console.log(position, title);
                smallArticleTitle4.innerHTML += `
                <p>${title} </p>
                `
                smallArticleText4.innerHTML += `
                <p> ${article.substring(0, 240)}} </p>
                `
                console.log(position)
            }
        

    else if (position==="10"){
      
        console.log(position, title);
                smallArticleTitle4.innerHTML += `
                <p>${title}</p>
                `
                smallArticleText4.innerHTML += `
                <p> ${article.substring(0, 240)} (click to continue reading) </p>
                `

                console.log(position)
            }
        
    else if (position==="11"){
      
        console.log(position, title);
                smallArticleTitle5.innerHTML += `
                <p>${title}</p>
                `
                smallArticleText5.innerHTML += `
                <p> ${article.substring(0,240)}</p>
                `
                console.log(position)
            }

     else if (position==="12"){
      
        console.log(position, title);
             smallArticleTitle6.innerHTML += `
             <p>${title} </p>
             `
             smallArticleText6.innerHTML += `
             <p> ${article.substring(0,240)} </p>
             `
             console.log(position)
    }   

    else if(position=== "13"){
    
        title6.innerHTML += `
        <p class="headline hl1"><span class= "head">${title} </span class></p>
        `    
        text6.innerHTML += `
        <p class="text1"><span class= "head"> ${article} </span class></p>
        `
        citation6.innerHTML += `
        <p class="citation"><span class= "head"> ${data.citation} </span class></p>
        `
        subtitle6.innerHTML += `
        <span class="headline hl2"> ${data.subtitle} </span> 
        `
        // image7.innerHTML += `
        // <p class="image0"> <span.class= "head">${data.bannerImage}</span class></p>
        // `

        console.log(position);
        console.log(article);
        console.log(bannerImage)
    }


    
    else if(position=== "14"){
    
        title7.innerHTML += `
        <p class="headline8"><span class= "head">${title} </span class></p>
        `    
        text7.innerHTML += `
        <p class="text8"><span class= "head"> ${article} </span class></p>
        `
        citation7.innerHTML += `
        <p class="citation"><span class= "head"> ${data.citation} </span class></p>
        `
        subtitle7.innerHTML += `
        <span class="headline hl2"> ${data.subtitle} </span> 
        `
        // image8.innerHTML += `
        // <p class="image0"> <span.class= "head">${data.bannerImage}</span class></p>
        // `

        console.log(position);
        console.log(article);
        console.log(bannerImage)
    }   
     


    // else if(position=== "15"){
    
    //     title1.innerHTML += `
    //     <p class="headline hl1"><span class= "head">${title} </span class></p>
    //     `    
    //     text1.innerHTML += `
    //     <p class="text1"><span class= "head"> ${article} </span class></p>
    //     `
    //     citation0.innerHTML += `
    //     <p class="citation"><span class= "head"> ${data.citation} </span class></p>
    //     `
    //     subtitle0.innerHTML += `
    //     <span class="headline hl2"> ${data.subtitle} </span> 
    //     `
    //     // image0.innerHTML += `
    //     // <p class="image0"> <span.class= "head">${data.bannerImage}</span class></p>
    //     // `

    //     console.log(position);
    //     console.log(article);
    //     console.log(bannerImage)
    // }

    // else if(position=== "16"){
    
    //     title1.innerHTML += `
    //     <p class="headline hl1"><span class= "head">${title} </span class></p>
    //     `    
    //     text1.innerHTML += `
    //     <p class="text1"><span class= "head"> ${article} </span class></p>
    //     `
    //     citation0.innerHTML += `
    //     <p class="citation"><span class= "head"> ${data.citation} </span class></p>
    //     `
    //     subtitle0.innerHTML += `
    //     <span class="headline hl2"> ${data.subtitle} </span> 
    //     `
    //     // image0.innerHTML += `
    //     // <p class="image0"> <span.class= "head">${data.bannerImage}</span class></p>
    //     // `

    //     console.log(position);
    //     console.log(article);
    //     console.log(bannerImage)
    // }

        // else if(position=== "17"){
    
    //     title1.innerHTML += `
    //     <p class="headline hl1"><span class= "head">${title} </span class></p>
    //     `    
    //     text1.innerHTML += `
    //     <p class="text1"><span class= "head"> ${article} </span class></p>
    //     `
    //     // ${correctArticle.image}

    //     citation0.innerHTML += `
    //     <p class="citation"><span class= "head"> ${data.citation} </span class></p>
    //     `
    //     subtitle0.innerHTML += `
    //     <span class="headline hl2"> ${data.subtitle} </span> 
    //     `
    //     // image0.innerHTML += `
    //     // <p class="image0"> <span.class= "head">${data.bannerImage}</span class></p>
    //     // `

    //     console.log(position);
    //     console.log(article);
    //     console.log(bannerImage)
    // }
    
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




