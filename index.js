const url =  `https://api.thecatapi.com/v1/images/search?limit=${2}`
const main =  window.document.querySelector(".conteudototal")
const btn_add = window.document.querySelector("#btnadd")
const btn_remove = window.document.getElementById("btnremove")

 async function getCats(){

    const response =  await fetch(url)
    const cats = await response.json() //Está retornando 10 images ou 10 gifs  de gatinhos 

    console.log(cats)

    cats.map((cats)=>{
        
       const article = document.createElement("article")

       article.setAttribute("class", "articlecats")

        article.innerHTML = `<img src=${cats.url} alt="cats">`


        main.append(article)
        
        btn_remove.addEventListener("click", ()=>{

            main.removeChild(article)
        })
        
    })

}


    btn_add.addEventListener("click", (evt)=>{

        getCats()

    })

