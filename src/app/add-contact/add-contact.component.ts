import { ContactService } from "../services/contact.service";
import { Contact } from "../models/contact.model";
import { Component } from "@angular/core";
import { EditorState } from "../models/editor-state.enum";

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.css"]
})
export class AddContactComponent {
  created: boolean = false;
  state: EditorState = EditorState.null;
  editorState: any = EditorState;

  constructor(private service: ContactService) {}

  createContact(event: Contact) {
    this.service.addContact(event).subscribe(() => {
      this.state = EditorState.created;
      setTimeout(() => (this.state = EditorState.null), 3000);
    });
  }
}
