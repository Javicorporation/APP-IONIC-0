import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string,
  name: string,
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  // crear nuevo listado

  // componentes: any[] = [];

  componentes: Componente[] = [
    {
      icon: 'layers-outline',
      name: 'Action sheet',
      redirectTo: '/action-sheet'
    },{
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'images-outline',
      name: 'Photos',
      redirectTo: '/photos'
    },
    {
      icon:'file-tray-full-outline',
      name:'Information',
      redirectTo:'/information'

    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
