const { MongoClient } = require('mongodb');

async function connectToDatabase() {
    const uri = 'mongodb+srv://cybermito:Atibot2019@atigramakers.nn9wt14.mongodb.net/'; // Cambia la URI a la URL de tu base de datos
    const client = new MongoClient(uri);
    console.log("Conectando a la base de datos");
    try {
        await client.connect();
        console.log('Conectado a la base de datos');
        const db = client.db('Atigra_Makers'); // Cambia 'tu_base_de_datos' por el nombre de tu base de datos
        return db;
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        client.close();
    }
}

async function crearDocumento(db) {
    const resultado = await db.collection('tu_coleccion').insertOne({ nombre: 'Juan', edad: 30 });
    console.log('Documento creado:', resultado);
}