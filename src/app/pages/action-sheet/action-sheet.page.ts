import { Component, OnInit } from '@angular/core';
import { ActionSheetPageModule } from './action-sheet.module';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  onClick() { 
    this.presentActionSheet(); 
    } 
    //.actionSheetController.create 
    async presentActionSheet() { 
    const actionSheet = await this.actionSheetCtrl.create({ 
    header: 'Albunes XDDDDDD', 
    backdropDismiss: false,
    cssClass: 'my-custom-class', 
          buttons: [{ 
            text: 'Delete', 
            role: 'destructive', 
            icon: 'trash-outline', 
            cssClass: 'rojo',
            id: 'delete-button', 
            data: { 
              type: 'delete' 
            }, 
            handler: () => { 
              console.log('Borrar calificacion'); 
            } 
          }, { 
            text: 'Share', 
            icon: 'share-outline', 
            data: 10, 
            handler: () => { 
              console.log('Share clicked'); 
            } 
          }, { 
            text: 'Play (open modal)', 
            icon: 'caret-forward-circle-outline', 
            data: 'Data value', 
            handler: () => { 
              console.log('Play clicked'); 
            } 
          }, { 
            text: 'Favorite', 
            icon: 'heart-outline', 
            handler: () => { 
              console.log('Favorite clicked'); 
            } 
          }, { 
            text: 'Cancel', 
            icon: 'close-outline', 
            role: 'cancel', 
            handler: () => { 
              console.log('Cancel clicked'); 
            } 
          }] 
        }); 
        await actionSheet.present(); 
     
        const { role, data } = await actionSheet.onDidDismiss(); 
        console.log('onDidDismiss resolved with role and data', role, data); 
      } 




      onClick2() { 
        this.presentActionSheet2(); 
        } 
        //.actionSheetController.create 
        async presentActionSheet2() { 
        const actionSheet = await this.actionSheetCtrl.create({ 
        header: 'Cartas XDDDDDD', 
        backdropDismiss: false,
        cssClass: 'my-custom-class', 
              buttons: [{ 
                text: 'Base', 
                role: 'destructive', 
                icon: 'trash-outline', 
                cssClass: 'rojo',
                id: 'delete-button', 
                data: { 
                  type: 'Base' 
                }, 
                handler: () => { 
                  console.log('Borrar calificacion'); 
                } 
              }, { 
                text: 'Pagina', 
                icon: 'share-outline', 
                data: 10, 
                handler: () => { 
                  console.log('Pagina'); 
                } 
              },{ 
                text: 'pagina 1', 
                icon: 'share-outline', 
                data: 10, 
                handler: () => { 
                  console.log('Pagina 1'); 
                } 
              }] 
            }); 
            await actionSheet.present(); 
         
            const { role, data } = await actionSheet.onDidDismiss(); 
            console.log('onDidDismiss resolved with role and data', role, data); 
          } 
    


}
