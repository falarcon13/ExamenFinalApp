import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Mis Componentes
import { Componente1Component } from './componente1/componente1.component'; 

// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';

@NgModule({
  declarations: [
    Componente1Component,
    Componente2Component,
    Componente3Component,
  ],
  exports: [
    Componente1Component,
    Componente2Component,
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
