// document.getElementById("AllButton").addEventListener("click", () => {
//     const buttonId=document.getElementById("AllButton");
    
//     console.log(buttonId.className);
// } );   


const LoadALLData= () => {

    // let AllButton= document.getElementById("AllButton");
    // let MusicButton= document.getElementById("MusicButton");
    // let ComedyButton= document.getElementById("ComedyButton");
    // let DrawingButton= document.getElementById("DrawingButton");

 

    console.log("hi");

    let apiURl="https://openapi.programming-hero.com/api/videos/category/1000"
    fetch(apiURl)

    .then(res => res.json())
    .then (data => DisplayData(data.data) );

    


};

const LoadMusicData= () => {

    let AllButton= document.getElementById("AllButton");
    // let MusicButton= document.getElementById("MusicButton");
    // let ComedyButton= document.getElementById("ComedyButton");
    // let DrawingButton= document.getElementById("DrawingButton");

 

    console.log("music data is here");
    let apiURl="https://openapi.programming-hero.com/api/videos/category/1001"
    fetch(apiURl)
    .then(res => res.json())
    .then (data => DisplayData(data.data) );


};

const LoadComedyData= () => {

    let AllButton= document.getElementById("AllButton");
    // let MusicButton= document.getElementById("MusicButton");
    // let ComedyButton= document.getElementById("ComedyButton");
    // let DrawingButton= document.getElementById("DrawingButton");

 

    console.log("comedy data is here");
    let apiURl="https://openapi.programming-hero.com/api/videos/category/1003"
    fetch(apiURl)
    .then(res => res.json())
    .then (data => DisplayData(data.data) );


};


const LoadDrawingData= () => {

    let AllButton= document.getElementById("AllButton");
    // let MusicButton= document.getElementById("MusicButton");
    // let ComedyButton= document.getElementById("ComedyButton");
    // let DrawingButton= document.getElementById("DrawingButton");

 

    console.log("drawing data is here");
    let apiURl="https://openapi.programming-hero.com/api/videos/category/1005"
    fetch(apiURl)
    .then(res => res.json())
    .then (data => DisplayData(data.data) );


};


LoadALLData();















const DisplayData= (Data) =>{

    

    const ContentContainer=document.getElementById("ContentContainer");

    ContentContainer.innerHTML = '';  //cleaning previous load history 

    console.log("Successsfully in Display data area");

    console.log("The Data legnth is :",Data.length);

    if(Data.length!=0)

    {


    Data.forEach( (Data) => {
    
    console.log(Data);


   const contents= document.createElement("div");

   contents.classList.add("SingleContent");



   const formattedDate = Data.others.posted_date ? formatTime(Data.others.posted_date) : '';

//    <p class="posted_date"> ${Data.others.posted_date } </p>


 

    contents.innerHTML=
    `
    <img class="Mainimage" src=${Data.thumbnail} alt=""> </div>

   
    ${formattedDate ? `<p class="posted_date">posted ${formattedDate} ago</p>` : ''}
    
    

    
    
    <h5 class="Title" > ${Data.title}  </h5>

    <img class="AuthorPic" src= ${Data.authors[0].profile_picture} alt=""> </img>

    
    
   

      <p class="author-info">
        ${Data.authors[0].profile_name}
        ${Data.authors[0].verified ? '<img class="verified" src="./resources/verifited.png" alt="Verified">' : ''}
    </p>

    

    <p> ${Data.others.views} </p>

    
    ` ;

    
    

    ContentContainer.appendChild(contents);

 });


}

else{

    const ContentContainer=document.getElementById("ContentContainer");

    ContentContainer.innerHTML=

      
    `
    <img class="drawinglogo" src="./resources/no video icon.png"  alt=""> </img>
    <h1 class="Title" >Oops!! Sorry, There is no content here   </h1>
    ` ;
    








}



    

    
    




};

// Function to format time in minutes and seconds
function formatTime(seconds) {
   
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} hours ${minutes} minutes`;
    
    
}

















