import React from 'react';
import './index.css';
import Card from './Card';
import Sdata from './Sdata';

// using Array map method
 //here val means value of an index no. in Sdata


 const App = () =>{
    return(
  <>
<h1 className="heading_style">Top 5 Netflix Series in 2020</h1>

{/* by using Array Map method  and fat arrow function*/}

     {Sdata.map((val, index) => {
  return(
    <Card key = {val.id}
          imgsrc = {val.imgsrc} 
          title =  {val.title}      
          sname =  {val.sname}      
          links =  {val.links}
     />   
  );   
    })}






 {/* if we have to use array of object then we have to write component as

<Card imgsrc = {Sdata[0].imgsrc} 
     title =  {Sdata[0].title}      
     sname =  {Sdata[0].sname}      
     links =  {Sdata[0].links}
     />   

<Card imgsrc = {Sdata[1].imgsrc} 
     title =  {Sdata[1].title}      
     sname =  {Sdata[1].sname}      
     links =  {Sdata[1].links}
     />  

<Card imgsrc = {Sdata[2].imgsrc} 
     title =  {Sdata[2].title}      
     sname =  {Sdata[2].sname}      
     links =  {Sdata[2].links}
     />   
<Card imgsrc = {Sdata[3].imgsrc} 
     title =  {Sdata[3].title}      
     sname =  {Sdata[3].sname}      
     links =  {Sdata[3].links}
     />   
<Card imgsrc = {Sdata[4].imgsrc} 
     title =  {Sdata[4].title}      
     sname =  {Sdata[4].sname}      
     links =  {Sdata[4].links}
     />   
 */}





  {/* by using props method to access this data in App.js */}
 
  {/* <Card sname = "DARK"
       imgsrc = "https://wallpapercave.com/wp/wp4056410.jpg"
       title = "Netflix Original Series"
       links = "https://www.netflix.com/in/browse/genre/839338" />
       
  <Card         sname = "Extra Curricular"
        imgsrc = "https://www.hitc.com/static/uploads/hitcn/1816/extracurricular_netflix_780_1544944.jpg"
        title = "Netflix Original Series"
        links = "https://www.netflix.com/in/browse/genre/839338" />

  <Card   sname = "Stranger Things"
        imgsrc = "https://wallpapercave.com/wp/wp1917154.jpg"
        title = "Netflix Original Series"
        links = "https://www.netflix.com/in/title/80057281" /> */}
       
       </>
);
    }
export default App;