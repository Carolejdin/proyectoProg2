const libros = {
    productos: [

        {
            nombre: "Fahrenheit 451",
            autor: "Ray Bradbury",
            anioDePublicacion: 1953,
            editorial: "Debolsillo",
            descripcion:"Fahrenheit 451 es una novela distópica del escritor estadounidense Ray Bradbury, publicada en 1953.",
            imagen: "/images/products/fahrenheitcanva.jpeg",
            comentario: "Muy buen libro",
        },
        {
            nombre: "Robinson Crusoe",
            autor: "Daniel Defoe",
            anioDePublicacion: 1719,
            editorial: "Gradifco",
            descripcion: "Robinson Crusoe es una de las obras más famosas del célebre escritor inglés Daniel Defoe, publicada en 1719.",
            imagen: "/images/products/robinsoncanva.jpeg",
            comentario: "Muy interesante",
        },
        {
            nombre: "Orgullo y prejuicio",
            autor: "Jane Austen",
            anioDePublicacion: 1813,
            editorial: "Alianza Editorial",
            descripcion: "En esta daptación de la célebre novela de Jane Austen, la joven Lizzie conoce al apuesto y elegante señor Darcy",
            imagen: "/images/products/orgullocanva.jpeg",
            comentario: "Muy buen libro",
        },
        {
            nombre: "Los miserables",
            autor: "Victor Hugo",
            anioDePublicacion: 1862,
            editorial: "Elejandria",
            descripcion: "Los miserables es una novela del poeta y escritor francés Victor Hugo publicada en 1862",
            imagen:"/images/products/miserablescanva.jpeg",
            comentario:"Un libro atrapante",
        },
        {
            nombre: "Todo se desmorona",
            autor: "Chinua Achebe",
            anioDePublicacion: 1958,
            editorial: "A. Lacroix, Verbockhoven & ce.",
            descripcion:"Es una novela en inglés escrita por el autor nigeriano Chinua Achebe y publicada en 1958",
            imagen:"/images/products/desmoronacanva.jpeg",
            comentario:"Un libro atrapante",
        },
        {
            nombre: "Ficciones",
            autor: "Jorge Luis Borges",
            anioDePublicacion: 1944,
            editorial: "Editorial Sur",
            descripcion: "Ficciones es un libro de cuentos escrito por Jorge Luis Borges, publicado en 1944 y compuesto de dos partes",
            imagen:"/images/products/ficcionescanva.jpeg",
            comentario:"Muy buen libro",
        },
        {
            nombre: "El extranjero",
            autor: "Abert Camus",
            anioDePublicacion: 1942,
            editorial: "Editions Gallimard",
            descripcion: "El extranjero es una novela publicada en 1942, la primera del escritor francés Albert Camus.",
            imagen:"/images/products/extranjerocanva.jpeg",
            comentario: "Muy interesante",
        },
        {
            nombre: "Don Quijote",
            autor: "Miguel de Cervantes",
            anioDePublicacion: 1605,
            editorial: "Francisco de Robles",
            descripcion:"Don Quijote de la Mancha​ es una novela escrita por el español Miguel de Cervantes Saavedra.",
            imagen:"/images/products/doncanva.jpeg",
            comentario:"Un libro atrapante"
        },
        {
            nombre: "Relatos cortos",
            autor: "Anton Chejov",
            anioDePublicacion: 1886,
            editorial: "Fontana",
            descripcion:"El ruso Antón Chéjov (1860-194) es uno de los más grandes autores de relatos de todos los tiempos y todas las literaturas nacionales.",
            imagen:"/images/products/relatoscortoscanva.jpeg",
            comentario: "Muy buen libro",
        },
        {
            nombre: "Nostromo",
            autor: "Joseph Conrad",
            anioDePublicacion: 1904,
            editorial: "T.P's Weekly",
            descripcion:"Nostromo es una novela política del escritor polaco-británico Joseph Conrad, publicada en 1904.",
            imagen:"/images/products/canvanostromo.jpg",
            comentario:"Es un libro muy atrapante",
        },
      
        
    ],

    usuarios: [
        {
            username: `Jacinta Díaz`,
            email: `Jdíaz@udesa.edu.ar`,
            birthDay: `02/04/2002`,
            password: `123456`,
            profilePic: `rutadeimagen`,
            DNI: `44899202`,
            image: "/images/products/profilepicture.jpeg"
        },
    ],

    comentarios: [
        {
            nombre: `Librofan104`,
            texto: `Recomiendo este libro al 100%, muy llevadero y entretenido!`

        },
        {
            nombre: `Amantedeloslibros`,
            texto: `Si bien al principio no me convencía, me terminó encantando. Nunca juzgen un libro por su portada`
        },
        {
            nombre: `Booklover101`,
            texto: `El autor es mágico, hace que tengas empatía por los personaes. Hasta lloré en el final!`
        }, 
        {
            nombre: `Soylola13`,
            texto: `Recomendadísimo! Amo esta trama, ya lo quiero volver a leer!`
        },
    ]

}
module.exports = libros;
