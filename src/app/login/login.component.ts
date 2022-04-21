import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { ContactsService } from '../services/contacts.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public token: any;

  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private api: ContactsService, private auth: AuthService) { }

  ngOnInit(): void {}
  
  login(value: any) {
    debugger;
    const playload = {
      username: value.username,
      email: value.email,
      password: value.password
    }
    debugger;
    this.api.login(playload)
    .subscribe(data => {
      console.log(data);
      this.token = data.token;
      this.auth.setToken(this.token);
    });
  }

}
