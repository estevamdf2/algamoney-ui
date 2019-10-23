import { Component, OnInit } from '@angular/core';
import { CategoriaService, CategoriaFiltro } from '../categoria.service';

@Component({
  selector: 'app-categoria-pesquisa',
  templateUrl: './categoria-pesquisa.component.html',
  styleUrls: ['./categoria-pesquisa.component.css']
})
export class CategoriaPesquisaComponent implements OnInit {

  categorias = [];
  totalRegistros = 0;
  filtro = new CategoriaFiltro();
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    console.log('init');
    this.listarTodas();
  }

  listarTodas(){
    console.log('listar todas');
    this.categoriaService.listarTodas()
      .then(resultado => {
        console.log('foi ',resultado);
        this.categorias = resultado;
      });
  }
  
  confirmarExclusao(categoria:any){
    console.log('excluindo');
  }

}
