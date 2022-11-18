import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos:string[] = []
  menuType:string = '';
  constructor() { 
    this.produtos = [
      "mouse",
      "teclado",
      "fonte",
      "monitor"
    ]
  }

  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.push("Edson");
  }

  /* Recebe um valor da função no li, ao clicar, usa o valor relacionado para apagar aquilo com splice */
  remover(index:number){
   this.produtos.splice(index,1);
  }
}
