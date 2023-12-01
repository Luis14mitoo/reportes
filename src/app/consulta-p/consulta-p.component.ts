import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

import {ConexionBBDDService} from '../services/conexion-bbdd.service'
import Registro from "./DTO/registro";
import Consulta from "./DTO/consulta";

    //Nivel de detalle del informe
    //const colums =["customer", "country", "provider","category", "variety", "color"];
    
    //Se debe enviar el texto stems o price para retornar el campo especifico.
    const value =["stems", "price"];


@Component({
  selector: 'app-consulta-p',
  templateUrl: './consulta-p.component.html',
  styleUrls: ['./consulta-p.component.css']
})
export class ConsultaPComponent {

  
  constructor( private ConexionBBDD: ConexionBBDDService){
   
 }

  verParametrosBuuqueda:boolean=true;
  seleccionParametro:string ="";
 
  dateini: string="";
  datefin: string="";


  cliente:boolean=false;
  pais:boolean=false;
  proveedor:boolean=false;
  categoria:boolean=false;
  variedad:boolean=false;
  color:boolean=false;

  cont:number=0;

  registros : Registro[] =[]
  dias: any[] =[]

 
  Columns:string[] =[];


  
  
  consulta(){

    this.verParametrosBuuqueda=false;

     //const colums =["customer", "country", "provider","category", "variety", "color"];
    if(this.cliente==true){
      this.Columns[this.cont]="customer";
      this.cont++;
    }
    if(this.pais==true){
      this.Columns[this.cont]="country";
      this.cont++;
    }
    if(this.proveedor==true){
      this.Columns[this.cont]="provider";
      this.cont++;
    }
    if(this.categoria==true||this.variedad==true||this.color==true){
      this.Columns[this.cont]="category";
      this.cont++;
    }
    if(this.variedad==true){
      this.Columns[this.cont]="variety";
      this.cont++;
    }
    if(this.color==true){
      this.Columns[this.cont]="color";
      this.cont++;
    }
    this.cont=0;


    



    let consulta:Consulta = {
      dateini: this.dateini,
      datefin: this.datefin,
      columns: this.Columns,
      value:   this.seleccionParametro

    }
    
    this. cargarRegistros(consulta);

  }
 
  



  cargarRegistros(consulta:Consulta){     
    
      this.ConexionBBDD.getConsultaGeneral(consulta).subscribe({
        next:(response:any) => {  
          this.registros = response
          console.log('Respuesta positiva')
          console.log(response)
        
        },
        error: (error:any) => {
          console.log('Error en el proceso')
          console.log(error)
        }
      });
    }    


    cancelar(){
      this.verParametrosBuuqueda=true;   
      this.seleccionParametro="";
      this.dateini="";
      this.datefin="";
      this.cliente=false;
      this.pais=false;
      this.proveedor=false;
      this.categoria=false;
      this.variedad=false;
      this.color=false;
      this.cont=0;
      this.registros=[] 
      this.Columns=[];

    }







}
