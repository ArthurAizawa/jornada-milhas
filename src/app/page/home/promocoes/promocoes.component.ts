import { Component, Input, OnInit } from '@angular/core';
import { Promocao } from '../../../code/types/types';
import { PromocaoService } from '../../../code/services/promocao.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrl: './promocoes.component.scss'
})
export class PromocoesComponent implements OnInit{

  @Input() promocoes!: Promocao[]

  constructor(private service : PromocaoService){

  }

  ngOnInit(): void {
      this.service.listar().subscribe(
        res => {
          this.promocoes = res;
        }
      )
  }

}

