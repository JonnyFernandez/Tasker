
# **Notas Backend**
 
# Modulos 
- **route**: aca va toda las rutas

- **controllers**: Donde desarrolaremos las conexiones con la db 

- **models**:  Modelos de datos en la base de datos

- **meddlewares**: autenticaciones para acceder a rutas protegidas

- **schemas**: validaciones, datos

- **libs**: codigo que podemos reutilizar varias veces, ejemplo tokes

- **db.js**: sera donde va el codigo de la base de datos

- **config.js**: configuraciones o funciones que los demas archivos puede requerir

# Comandos Mongosh
1) CREO BASE DE DATOS:  
- **use mystore**

2) CREO UNA COLECCION:**   
- **db.createColection("prod")**

3) GUARDAR DATO DOCUMENTOS DE ESA COLECCION   
- **db.prod.insertOne({"name": "keyboard"})**

4) LISTAR LOS DOCUMENTOS QUE TIENE ESA COLECCION  
- **db.prod.find().pretty()**

5) INSERTAMOS OTRO DOCUMENTOS  
- **db.prod.insertOne({"name": "laptop", "proce":999.99})**

6) VER LOS DOCUMENTOS QUE TIENE LA COLECCION  
- **db.prod.find().pretty()**

7) AGREGAR VARIOS DOCUMENTOS A UNA COLECCION DE UN SAQUE   
- **db.name-collection.insert([{"name":"mouse","descrip":"gaminig","tags":["computado", "gadsdsmi"], "create_at":new Date()},{"name":"monitor","descrio":"LG", "tags":["compu", "gami"], "create_at":new Date() }])**

8) ENTONTAR UN DOCUMENTO EN ESPECIFICO por su atributo   
- **db.prod.find({name:"mouse"})**

9) BUSCAR POR MULTIPLES ATRIBUTOS   
- **db.prod.find({"tags":"compu", "name":"monitor"})**

10) BUSCAR Y TOMAR EL PRIMER DOCUMENTOS QUE SALGA QUE CUMPLA CON LO BUSCADO       
- **db.prod.findOne({"tags":"computado"})**

11) CONDOCIONAR LO QUE ME SALE EN LA CONSOLA     
- **db.prod.findOne({"tags":"computado"}, {"name":1, "descrip":1})**

12) TAMBIEN PUEDO NO TRAER EL ID, AGREGANDOLE    
- **db.prod.findOne({"tags":"computado"}, {"name":1, "descrip":1, "_id":0})**

13) METODO PARA TRAR LA INFORMACION ORDENADA ALFABETICAMENTE        
- **db.prod.find({"tags":"compu"}).sort({name:1})**

14) LIMITAR LA BUSQUETA DE DOCUMENTOS A LA CANTIDAD QUE YO QUIERA       
- **db.prod.find({"tags":"compu"}).limit(5)**

15) CONTAR LA CANTIDAD DE DOCUMENTOS QUE TENGO EN MI COLECCION        
- **db.prod.countDocuments()**

16) PODEMOS USAR METODOS DE JS, EJEMPLO PARA IMPRIMIR TODOS LOS NOMBRES        
- **db.prod.find().forEach(item=> print("Prod Name: " + item.name))**

17) PODEMOS UNAR METODOS DE JS, EJEMPLO PAR IMPRIMIR TODOS LOS PRIOS, Y DONDE NO HAY PRECIO ME SALDRA INDEFINIDO    
- **db.prod.find().forEach(item=> print("Prod Price: " + item.price))**

18) ACTUALIZAR LA INFORMACION DE UN DOCUMENTO/ suponiendo que un documento no tengoa el atributo price.. se lo agregamos...
usaremos en metodo update, que se conforma por dos operaciones, la primera es busqueda y la otra lo que agregare                               
- **db.prod.update({"price":99.99}, { $set: { "hobie":"chess" } })**   
- **db.prod.update({"price":99.99}, { $set: { "hobie":"chess", "job":"lazi" } })**  => nota* se pueden agregar varios atributos


19) EN CASO QUE QUIERA ACTUALIZAR UN DATO, Y QUE ESTE NO EXISTA/ casi como un findOrCreate                              
- **db.prod.update({"name":"desktop"}, { $set: { "description":"gamin Desktop", "job":"lazi" }}, {upsert:true})**

20) COMO INCREMENTAR UN VALOR NUMERICO SIN AFECTAR TODO EL DOCUMENTO
- **db.prod.update({"name":"keyboard"},{ $inc:{"price": 5} })**  => aumentar
- **db.prod.update({"name":"keyboard"},{ $inc:{"price":-5} })**  => restar

21) COMO RENOMBRAR PROPIEDADES DEL ALGUN DOCUMENTO DOCUMENTO     
- **db.prod.update({"name":"mouse"},{$rename:{"name":"apodo"}})**


22) ELIMINAR DOMUMENTO DE LA COLECCION   
- **db.prod.remove({"name":"keyboard"})**   
- **db.prod.remove({"price":999.99})**


23) ELIMINAR TODOS LOS DOCUMENTOS DE UNA COLECCION   
- **db.prod.remove({})**


# **Dependencias del Backend**

- *npm install mongoose*
- *npm install express*
- *npm install axios*
- *npm install dotenv*
- *npm install morgan*
- *npm install cors*    
- *npm install zod* //biblioteca para validar datos que llegan al back   

- *npm install cookie-parser* //para ver las cookies en la consola   

# **Encriptar contraseña y generar toke**
- *npm install bcryptjs /para encriptar*
- *npm install jsonwebtoken /creacion de tokens*


# **Dependencias del Front**

- *npm install -D tailwindcss postcss autoprefixer*
- *npx tailwindcss init -p*
- *npm i react-hook-form*
- *npm i react-router-dom*
- *npm i axios*
- *npm i js-cookie* //para leer las cockies
