import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newContact = Array.from({ length: number }, createFakeContact);

    contacts.push(...newContact);

    await writeContacts(contacts);
  } catch (error) {
    console.error('Сталася помилка при спробі створити контакт', error);
  }
};

generateContacts(5);
