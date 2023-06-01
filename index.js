const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.join("db", "contacts.json");

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const list = await listContacts();
      console.table(list);
      break;

    case "get":
      const contact = await getContactById(id);
      console.table(contact);
      break;

    case "add":
      const newContact = await addContact({ name, email, phone });
      console.table(newContact);
      break;

    case "remove":
      const deletedContact = await removeContact(id);
      console.table(deletedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}


// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "drsAJ4SHPYqZeG-83QTVW" });
// invokeAction({
//   action: "add",
//   name: "Mango",
//   email: "mango@gmail.com",
//   phone: "322-22-22",
// });
invokeAction({
  action: "remove",
  id: "fgJHK38jqZx_r31_GZGRp",
});
