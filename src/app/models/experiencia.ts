export class Experiencia {

    id?: Number; 
    desc: String; 
    titulo_puesto: String; 
    periodo: String; 
    titulo_empresa: String;  
    url_img: String; 

    constructor( desc: String, titulo_puesto: String, periodo: String, titulo_empresa: String,url_img: String){
        this.desc = desc;
        this.titulo_puesto = titulo_puesto;
        this.periodo= periodo;
        this.titulo_empresa=titulo_empresa;
        this.url_img= url_img;
    }
}
