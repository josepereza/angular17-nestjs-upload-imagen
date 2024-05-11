import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesService } from './clientes.service';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userForm!:FormGroup;

  midata = {};
  midata2 = {};
  dato = 'juanito';

  formData = {
    name: 'andres ',
    email: 'pajares',
    addresse:'mavarrp'
  };
  selectedFile!: File;

  constructor(private http: HttpClient, private cliente:ClientesService,private fb:FormBuilder) {

    this.userForm=this.fb.nonNullable.group({
      firstName:[''],
      lastName:[''],
     
     })
  }
  onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }
  onSubmit(): void {
    console.log(this.userForm.get('firstName')!.value)
    const formData = new FormData();
    formData.append('avatar', this.selectedFile);
    formData.append('name', this.userForm.get('firstName')!.value);
    formData.append('email', this.formData.email);
    formData.append('addresse', this.formData.addresse);

    this.cliente.ver(formData)
     
    
  }
  pulsar(){
    this.cliente.pulsarBoton().subscribe(data=>{
      console.log(data)
    })
  }
}
