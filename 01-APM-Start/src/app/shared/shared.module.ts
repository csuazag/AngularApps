import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpaces } from './convert-to-spaces';

const entryComponents = [StarComponent, ConvertToSpaces];

@NgModule({
  declarations: [...entryComponents],
  imports: [CommonModule],
  exports: [...entryComponents, CommonModule, FormsModule],
})
export class SharedModule {}
