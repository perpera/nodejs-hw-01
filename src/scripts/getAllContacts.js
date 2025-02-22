import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      return [];
    } else {
      return contacts;
    }
  } catch (error) {
    console.error('Сталася помилка при спробі отримати контакти', error);
  }
};

console.log(await getAllContacts());
