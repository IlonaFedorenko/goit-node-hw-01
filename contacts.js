const fs = require("fs").promises;
const { nanoid } = require("nanoid");
const path = require("path");
const contactsPath = path.join("db", "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "UTF8");
  return JSON.parse(data);
};

const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === id);
  return result || null;
};

const addContact = async (data) => {
  const newContact = {
    id: nanoid(),
    ...data,
  };
  const contacts = await listContacts();
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const removeContact = async (contactId) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
