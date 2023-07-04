const misProductos = [{
		id: "1",
		nombre: "Pro Plan Adultos",
		precio: 500,
		img: "../img/proplan-secoadulto-m.png",
		idCat: "1"
	},
	{
		id: "2",
		nombre: "Pro Plan Razas Medianas",
		precio: 500,
		img: "../img/proplan-secpadulto-m.png",
		idCat: "1"
	},
	{
		id: "3",
		nombre: "Pro Plan Cachorros",
		precio: 500,
		img: "../img/proplan-secopuppy.png",
		idCat: "1"
	},
	{
		id: "4",
		nombre: "Pedigree Adultos",
		precio: 500,
		img: "../img/pedigree-humedog.webp",
		idCat: "1"
	},
	{
		id: "5",
		nombre: "Pedigre Cachorros",
		precio: 500,
		img: "../img/pedigree-humedop.webp",
		idCat: "1"
	},
	//{id:"6", nombre: "Balanced Natural Recipe Cerdo", precio: 500, img: "../img/naturales-cerdo.webp", idCat: "1"},
	//{id:"7", nombre: "Balanced Natural Recipe Cordero", precio: 500, img: "../img/naturales-cordero.webp", idCat: "1"},
	{
		id: "8",
		nombre: "Hueso Pequeño",
		precio: 500,
		img: "../img/huesopequeño.webp",
		idCat: "2"
	},
	{
		id: "9",
		nombre: "Hueso Grande",
		precio: 500,
		img: "../img/husesogrande.webp",
		idCat: "2"
	},
	//{id:"10", nombre: "Dingo Mini Huesos", precio: 500, img: "../img/minibones.webp", idCat: "2"},
	//{id:"11", nombre: "Mon Ami", precio: 500, img: "../img/snack-secoa.png", idCat: "2"},
	//{id:"12", nombre: "Mon Ami", precio: 500, img: "../img/snacks-secoc.png", idCat: "2"},
	//{id:"13", nombre: "Mon Ami", precio: 500, img: "../img/snacks-secodc.png", idCat: "2"},
	//{id:"14", nombre: "Pro Plan Adultos", precio: 500, img: "../img/soganudo.webp", idCat: "3"},
	//{id:"15", nombre: "Pro Plan Adultos", precio: 500, img: "../img/juguetedental.webp", idCat: "3"},
	//{id:"16", nombre: "Pro Plan Adultos", precio: 500, img: "../img/jugueteanillo.webp", idCat: "3"},
	//{id:"17", nombre: "Pro Plan Adultos", precio: 500, img: "../img/comederodoble.webp", idCat: "3"},
	//{id:"18", nombre: "Pro Plan Adultos", precio: 500, img: "../img/comedero-ajustable.webp", idCat: "3"},
	//{id:"19", nombre: "Pro Plan Adultos", precio: 500, img: "../img/comedero-comelento.webp", idCat: "3"},
	//{id:"20", nombre: "Pro Plan Adultos", precio: 500, img: "../img/correa-regulable.webp", idCat: "3"},
	//{id:"21", nombre: "Pro Plan Adultos", precio: 500, img: "../img/correa-starwars.webp", idCat: "3"},
	//{id:"22", nombre: "Pro Plan Adultos", precio: 500, img: "../img/correa-extensible.webp", idCat: "3"},
	//{id:"23", nombre: "Pro Plan Adultos", precio: 500, img: "../img/camahuella.webp", idCat: "3"},
	//{id:"24", nombre: "Pro Plan Adultos", precio: 500, img: "../img/cama-acolchonada.webp", idCat: "3"},
	//{id:"25", nombre: "Pro Plan Adultos", precio: 500, img: "../img/colchoneta.png", idCat: "3"},
	{
		id: "26",
		nombre: "Abrigo Stitch. Talle XL",
		precio: 500,
		img: "../img/abrigo-stitch.webp",
		idCat: "3"
	},
	{
		id: "27",
		nombre: "Abrigo Parka. Talle M",
		precio: 500,
		img: "../img/abrigo-parka.webp",
		idCat: "3"
	},
	{
		id: "28",
		nombre: "Abrigo Oso. Talle S",
		precio: 500,
		img: "../img/abrigo-oso.webp",
		idCat: "3"
	},
]

export const getProductos = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(misProductos);
		}, 100)
	})
}

// actividad de clase 7; funcion similar pero devuelve 1 producto

export const getUnProducto = (id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const producto = misProductos.find(prod => prod.id === id);
			resolve(producto);
		}, 100)
	})

}

// funcion que retorna un array de una categoria determinada

export const getProductoPorCategoria = (idCategory) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const productosCategoria = misProductos.filter(prod => prod.idCat === idCategory);
			resolve(productosCategoria)
		}, 100)
	})

}