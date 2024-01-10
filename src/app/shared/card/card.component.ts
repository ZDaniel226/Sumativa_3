import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Input() titulo: string = "";
  @Input() subtitulo: string = "";
  @Input() descripcion: string = "";
  @Input() imagen: string = "";

  constructor() { }

  ngOnInit() {}

}
