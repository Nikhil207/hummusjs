const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const fs = require('fs');
const HummusRecipie = require('hummus-recipe');



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const port = 8000;


const sequelize = new Sequelize('nikhil', 'nike', 'Admin123', {
    host: 'localhost',
    dialect: 'postgres'
});


app.listen(port, (req,res) => {
    console.log(`server started on port ${port}`);
});



app.get('/api/user/data',async function (req,res) {

    

   try {

    const tempFile='/home/poi/Desktop/doo.pdf';


    const pdfDoc = new HummusRecipie(tempFile,'/home/poi/Desktop/output.pdf');

    pdfDoc.editPage(4);

    const name = req.body.name;

    const date = req.body.date;

    //This is for you navneet ...i had a problem to replace the name and date so...
    //Can you please do it :(
    //The font too preferably...the underlining is green if you set it to true.

    //and i know the bottom code is kinda dumb fuk so...well...lets change it.


    const matter ='I, Abhi have read and understood the above Rules and Regulations; \nand we promise you that, we will abide by them.\n\n Date: date                                                           Place:Visakhapatnam\n\n\n\n Signature of the student                     Signature of the parent / Guardian\n\n\n\n                                         ALL THE VERY BEST ';

    



    pdfDoc.text(matter,70,200,{color: '#000000',font: 'Arial',bold : true});

    pdfDoc.endPage();

    pdfDoc.endPDF();

       

        res.status(200).json({
            success: true
            
        })

   } catch(err){
    
        console.log(err);

        res.status(500).json({
            success: false,
            error: `internal server ERROR: ${err} `
        });
   }
})

