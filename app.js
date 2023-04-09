const butt = document.querySelector('.butt')
const name = document.querySelector('.name')
///////////////////////////////////////////
butt.addEventListener('click',()=>{
    const name = document.querySelector('.name').value;
    const api =`https://restcountries.com/v2/name/${name}`
  

    fetch(api).then((response)=>response.json())
    .then((data)=>{
        const country = document.querySelector('.main')
        const lan0= data[0].languages[0].name;
         const region= data[0].region
        const population=data[0].population;
        const name= data[0].name;
        const capital= data[0].capital;
        const flags =data[0].flags.png
        const currencies=data[0].currencies[0].name

   
        country.innerHTML=`    <div class="country">
    
     <div class="info">
        <img src="${flags}" class="flag" alt="" srcset="">
      </div>
      <div class="nam">
          <h1>${name}</h1>
      </div>
      <div class="cap">
          <h1>capital : <span>${capital}</span></h1>
      </div>
      <div class="pop">
          <h1>population : <span>${population}</span></h1>
      </div>
      <div class="lan">
          <h1>Language : <span>${lan0}</span></h1>
      </div>
      <div class="reg">
      <h1>Region : <span>${region}</span></h1>
  </div>
  <div class="money">
  <h1>Currencies : <span>${currencies}</span></h1>
</div>
  </div>`;
    })
})