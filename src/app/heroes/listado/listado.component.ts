import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent  {

  heroes:string[]=['A','B','C','D'];
  heroeborrado:string='';
  borrarHeroe()
  {
    this.heroeborrado=this.heroes.shift() ||  '';
    console.log('Borrando....');
  }

}
