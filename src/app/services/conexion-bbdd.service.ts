import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

import Consulta from "../consulta-p/DTO/consulta";

@Injectable({
  providedIn: 'root'
})
export class ConexionBBDDService {

  API_URI = 'https://apitest.ikbo.co/sales';

  API_URI2 = 'https://apitest.ikbo.co/sales?dateini=2023-10-01&datefin=2023-10-02&columns%5b%5d=category&columns%5b%5d=color&value=stems';



  constructor(private http:HttpClient   
     ) { }


crearConsulta(consulta:any):string {
  
  let parametros = consulta.columns;
  let par:string ='';
    for (let elemento of parametros) {
      par=  par+'columns%5b%5d='+elemento+'&'
      console.log(par);
    }


  let API_URI3 = 'https://apitest.ikbo.co/sales?'
                  +'dateini='+consulta.dateini+'&'
                  +'&datefin='+consulta.datefin+'&'
                  +par
                  +'value='+consulta.value

                  console.log('URL ***************************')
                  console.log(API_URI3);
                  return API_URI3
}



  getConsultaGeneral(consulta:Consulta){
    const url = this.crearConsulta(consulta);   
    //return this.http.get(`${this.API_URI2}`);
    return this.http.get(`${url}`);


  }

  getProduct(){   
    return this.http.get(`${this.API_URI}`);
  }
}
