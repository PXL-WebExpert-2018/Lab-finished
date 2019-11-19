import {
  ContactService
}
from '../services/contact.service';
import {
  Contact
}
from '../models/contact.model';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList: Contact[];onlyFavorites: boolean = false;constructor(private service: ContactService) {}
  ngOnInit(): void {
      this.fetchContactList(this.onlyFavorites);
  }
  fetchContactList(onlyFav: boolean): void {
      this.service.getContactList(onlyFav).subscribe(data => {
          this.contactList = data;
      });
  }
  toggleView(onlyFav: boolean): void {
      this.onlyFavorites = !onlyFav;
      this.fetchContactList(this.onlyFavorites);
  }
  handleUpdate(): void {
      this.fetchContactList(this.onlyFavorites);
  }
}