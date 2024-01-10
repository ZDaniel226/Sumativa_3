import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  noticias=[
    {
      titulo:"Daniel Noboa a los terroristas: Sean valientes, peleen contra los militares",
      subtitulo: "Noticias CAP",
      descripcion: "Después de casi dos días de atentados y actos terroristas en más de una decena de provincias, el presidente Daniel Noboa se dirigió a la ciudadanía a través de Radio Canela, una emisora quiteña, este 10 de enero de 2024",
      imagen: "https://media.primicias.ec/2023/12/20080441/daniel-noboa-presidente-ecuador.jpg"
    },
    {
      titulo:"3 claves que explican el “conflicto armado interno” declarado en Ecuador tras varias jornadas de violencia",
      subtitulo: "Noticias WILS",
      descripcion: "El 9 de enero, un grupo armado ingresó a las instalaciones de TC Televisión y mantuvo a los empleados del canal como rehenes.",
      imagen: "https://ichef.bbci.co.uk/news/800/cpsprodpb/4302/live/bc881230-af51-11ee-8a0d-d572d7ba3f01.jpg"
    },
    {
      titulo:"Fernando Villavicencio fue asesinado en un mitin político en Quito",
      subtitulo: "Noticias MILT",
      descripcion: "El candidato presidencial de Ecuador, Fernando Villavicencio, fue asesinado luego de un mitin político en Quito. Foto: Flickr Asamblea Nacional",
      imagen: "https://www.elcomercio.com/wp-content/uploads/2023/08/fernando-villavicencio-asesinado-mitin-politico-700x391.jpg"
    },
    {
      titulo:"Presidentes del Mundo se pronuncian de situación de Ecuador",
      subtitulo: "Noticias GEO",
      descripcion: "Tras la situación que vivió Ecuador la tarde del martes 9 de enero de 2024, se produjeron reacciones internacionales.",
      imagen: "https://www.eltelegrafo.com.ec/media/k2/items/cache/a31865e64a04605704e7f08f9ce2cddd_XL.jpg"
    },
    {
      titulo:"El Aeropuerto Mariscal Sucre adoptó medidas de seguridad",
      subtitulo: "Noticias PAO",
      descripcion: "El Aeropuerto Internacional Mariscal Sucre de Quito informó acerca de las medidas que se han definido para resguardar la seguridad de pasajeros, usuarios, personal aeroportuario, instalaciones y operaciones aéreas. Lo ha hecho en coordinación con el Gobierno Nacional, la Dirección General de Aviación Civil y el Municipio de Quito.",
      imagen: "https://www.juiciocrudo.com/pics/540x303/00b835420481c613c5324dd8212f62db700e6b25.jpg"
    },
    {
      titulo:"Presidentes del Mundo se pronuncian de situación de Ecuador",
      subtitulo: "Noticias GEO",
      descripcion: "Tras la situación que vivió Ecuador la tarde del martes 9 de enero de 2024, se produjeron reacciones internacionales.",
      imagen: "https://www.eltelegrafo.com.ec/media/k2/items/cache/a31865e64a04605704e7f08f9ce2cddd_XL.jpg"
    }
  ];

  constructor() {}

}

