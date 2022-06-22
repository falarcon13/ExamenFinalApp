import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Mis Componentes
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
// Material
// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 

@NgModule({
  declarations: [
    HeaderComponent,
    ToolbarComponent,
  ],
  exports: [
    HeaderComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    // Material
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ]
})
export class ComponentsModule { }
