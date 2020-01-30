const express=require('express');
const cors=require('cors');
const mysql=require('mysql')
const app=express()

/* var pool  = mysql.crea({ */
/*     connectionLimit : 10, */
/*     host            : 'localhost', */
/*     user            : 'root', */
/*     password        : 'tarmak007', */
/*     database        : 'products' */
/*   }); */
const SELECT_ALL='SELECT * FROM product'

 const conn=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MyNewPass',
    database: 'products'
})
conn.connect((err)=>{
    if(err)
{
    console.log(err)
} 
else
{
    console.log(conn)
}

}) 




app.use(cors())



//app.use(express.json())
app.get('/',(req,res)=>{
    res.send('go to products to see products')
   
})
app.get('/products/add',(req,res)=>{
    const {id,name}=req.query;
    console.log(id,name);
    //res.send('adding product')
   const INSERT_FOOD=`INSERT INTO product (id,name) values (${id},'${name}')`
    conn.query(INSERT_FOOD,(err, results)=>{
        if(err)
        {
            return res.send(err);
        }   
    
       else 
       {
           // return res.send(connect)
             //return res.send(results) }
            return res.send("Inserted!")
       }
    }) 
})
app.get('/products',(req,res)=>{
   
    conn.query(SELECT_ALL,(err,results)=>
    {
         if(err)
    {
        return res.send(err);
    }   

   else 
   {
       // return res.send(connect)
         return res.send(results) }
    
    })
})

app.listen(4001, ()=>{
    console.log("Listening on port 4001")
})

//connection.end();