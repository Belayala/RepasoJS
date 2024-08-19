
//PUNTO 1: RECUPERAR LA INFORMACION DE TODOS LOS PRODUCTOS.
const urlApi = 'https://fakestoreapi.com/products';
fetch(urlApi)
.then (response => {
    if (!response.ok){
        throw new error ('error', respose.status);
    }
    return response.json();
})
.then ((datos)=>{
    console.log("Lista de todos los productos: ", datos)
})
.catch ((error)=>{
    console.log("No se pudo mostrar todos los productos", error);
})

/* PUNTO 2:  RECUPERAR LA INFORMACION DE UN NUMERO LIMITADO DE PRODUCTOS 

const urlApi = 'https://fakestoreapi.com/products?limit=7'

fetch(urlApi)
.then (response => {
    if (!response.ok){
        throw new error ('error', respose.status);
    }
    return response.json();
})
.then ((datos)=>{
    console.log("Le mostramos un numero limitado de productos: ", datos)
})
.catch ((error)=>{
    console.log("Error al mostrar un numero limitado de productos", error);
}) */

/* PUNTO 3. AGREGAR UN NUEVO PRODUCTO 
const urlApi = 'https://fakestoreapi.com/products';
async function verProducto (objeto){
    try{
        const response = await fetch (urlApi, {
            method:"POST",
            body:JSON.stringify(objeto)
            
        });
        if (!response.ok){
            throw new Error ('error', response.status);
        }
        const datos = await response.json();
        console.log("Producto agregado con exito:", datos);
    } catch (error) {
        console.log("Error al retornar el producto con el id solicitado:", error);
    }
}

const nuevoProducto = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}

verProducto(nuevoProducto) */

/* PUNTO 4: RETORNAR UN PRODUCTO SEGUN id COMO PARAMETRO 
const urlApi = 'https://fakestoreapi.com/products';
async function buscarDatos (id){
    try {
        const response = await fetch (urlApi + '/' + id);
        if(!response.ok){
            throw new Error ('error', responde.status);
        }
        const datos =await response.json();
        console.log("Producto con el id solicitado: ", datos);
    } catch (error){
        console.log("Error al retornar el producto con el id solicitado:", error);
    }
}
buscarDatos(5);

/* PUNTO 5: ELIMINAR UN PRODUCTO 
const urlApi = 'https://fakestoreapi.com/products';

async function eliminarProducto(id) {
    try {
        const response = await fetch(`${urlApi}/${id}`, {
            method: "DELETE"
        });
        
        if (!response.ok) {
            throw new Error('Error', response.status);
        }

        const datos = await response.json();
        console.log("Producto eliminado:", datos);
    } catch (error) {
        console.log("Error al eliminar el producto:", error);
    }
}

eliminarProducto(5); */