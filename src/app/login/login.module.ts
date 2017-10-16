
import { NgModule           } from '@angular/core';
import { CommonModule       } from '@angular/common';
import { FormsModule        } from '@angular/forms';
import { MaterialModule     } from '../material/material.module';
import { FormLoginComponent } from './form-login/form-login.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [FormLoginComponent]
})
export class LoginModule { }
