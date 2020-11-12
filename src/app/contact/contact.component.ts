import { Component, OnInit, Input, Output } from "@angular/core";
import { Contact } from "../models/contact.model";
import { EventEmitter } from "@angular/core";
import { ContactService } from "../services/contact.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  phone: string;

  isFavorite: boolean = false;

  constructor(private service: ContactService) {}

  @Input() contact: Contact;
  @Input() index: number;
  @Input() onlyFavorites: boolean = false;
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.name = "John doe";
    this.email = "john.doe@gmail.com";
    this.phone = "0116428390";
  }

  toggleFavorite(event: any, id: string, isFavorite: boolean): void {
    event.stopPropagation();
    this.service
      .updateContact(id, { isFavorite: !isFavorite })
      .subscribe((data) => {this.onUpdate.emit});
  }

  delete(id: string){
    this.service.deleteContact(id).subscribe((data) => console.log(data));
  }
}
