let myform = document.querySelector("#frmDataCountry");
let myHeader = new Headers({"Content-Type": "application/json; charset=utf-8"});

document.addEventListener('DOMContentLoaded', (e) =>{
    
});

myform.addEventListener('submit', async (e) =>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    postData(data).then(r=>{
        document.querySelector("pre").innerHTML = r;
    });
})
const  postData =async (data)=>{
    let config ={
            method: "POST",
            headers: myHeader,
            body: JSON.stringify(data)
    };
    let res = await(await fetch("controllers/Country/insert_data.php", config)).json();  
    return res; 

}

export{
    postData
}