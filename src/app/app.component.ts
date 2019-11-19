import { Component } from "@angular/core";
import { Contact } from "./models/contact.model";
import { ContactService } from "./services/contact.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "contactApp";

  constructor(private service: ContactService) {}

  ngOnInit(): void {}

  createContact(event: Contact) {
    this.service
      .addContact(event)
      .subscribe();
  }
}
