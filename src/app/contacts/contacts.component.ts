import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ContactsService } from '../services/contacts.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('contactsAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(-100px)', opacity: '0'}),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})

export class ContactsComponent implements OnInit {
  input = {
    'width': '360px',
    'background': '#fff',
    'box-shadow': '0 6px 10px 0 rgba(0, 0, 0, .1)',
    'border': '0',
    'outline': '0',
    'padding': '22px 18px'
  }

  public contacts: any;
  public firstName: string = "";
  public lastName: string = "";
  public email: string = "";
  public company: string = "";
  public phone = null;

  public state: number = 0;

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {
      this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts()
    .subscribe(
      data => { this.contacts = data },
      err => console.log(err)
    )
  }

  addContact(value:any) {
    let contact = value;
    this.contactService.addContact(contact)
    .subscribe({
      complete: () => { return true }, // completeHandler
      error: () => { console.error("Error saving contact"); return throwError(() => Error); },    // errorHandler 
      next: () => { this.getContacts() }     // nextHandler
    });
    /*.subscribe(
      data => { 
        this.getContacts();
        return true;
      },
      error => {
        console.error("Error saving contact");
        return throwError(() => error);
      }
    )*/
  }
}
