import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { FormServiceService } from '../../code/services/form-service.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss'
})
export class FormBuscaComponent {
    constructor(public dialog: MatDialog,
       public formBuscaService : FormServiceService) {}
  
    openDialog() {
      this.dialog.open(ModalComponent, {
        width: '60%'
      })
    }
  }
