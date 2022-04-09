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
            comentario: "muy interesante",
        },
        {
            nombre: "Orgullo y prejuicio",
            autor: "Jane Austen",
            anioDePublicacion: 1813,
            editorial: "Alianza Editorial",
            descripcion: "En esta daptación de la célebre novela de Jane Austen, la joven Lizzie conoce al apuesto y elegante señor Darcy",
            imagen: "/images/products/orgullocanva.jpeg",
            comentario: "muy buen libro",
        },
        {
            nombre: "Los miserables",
            autor: "Victor Hugo",
            anioDePublicacion: 1862,
            editorial: "Elejandria",
            descripcion: "Los miserables es una novela del poeta y escritor francés Victor Hugo publicada en 1862",
            imagen:"/images/products/miserablescanva.jpeg",
        },
        {
            nombre: "Todo se desmorona",
            autor: "Chinua Achebe",
            anioDePublicacion: 1958,
            editorial: "A. Lacroix, Verbockhoven & ce.",
        },
        {
            nombre: "Ficciones",
            autor: "Jorge Luis Borges",
            anioDePublicacion: 1944,
            editorial: "Editorial Sur",
        },
        {
            nombre: "El extranjero",
            autor: "Abert Camus",
            anioDePublicacion: 1942,
            editorial: "Editions Gallimard",
        },
        {
            nombre: "Don Quijote",
            autor: "Miguel de Cervantes",
            anioDePublicacion: 1605,
            editorial: "Francisco de Robles",
        },
        {
            nombre: "Relatos cortos",
            autor: "Anton Chejov",
            anioDePublicacion: 1886,
            editorial: "Fontana",
        },
        {
            nombre: "Nostromo",
            autor: "Joseph Conrad",
            anioDePublicacion: 1904,
            editorial: "T.P's Weekly",
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
