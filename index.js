// const promise1 = new Promise((resolve,reject)=>{
//     let a =12;
//     if(a>10)
//     {
//         resolve({material:"tmc"});
//     }
//     else{
//         reject("ishank");
//     }
// })
// promise1.then(msg=>{console.log(msg.material)}).catch(msg=>{console.log(msg)})

const btn = async () => {
    try {
        const response = await fetch("https://dummyjson.com/recipes");
       
        const data = await response.json();
        const recipes = data.recipes;

      
        let table = `<table border="1" style="width: 100%; text-align: left;">
                        <tr>
                            <th>Image</th>
                            <th>Recipe Name</th>
                            <th>Description</th>
                        </tr>`;

       
        recipes.forEach(recipe => {
            table += `<tr>
                        <td><img src="${recipe.image}" alt="${recipe.name}" style="width: 100px; height: auto;"></td>
                        <td>${recipe.name}</td>
                        <td>${recipe.description}</td>
                      </tr>`;
        });

        table += `</table>`;
        
      
        document.getElementById("output").innerHTML = table;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("output").innerHTML = "Error fetching data";
    }
};