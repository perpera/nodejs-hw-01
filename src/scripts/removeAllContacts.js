import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      return;
    }

    await writeContacts([]);
  } catch (error) {
    console.error('Сталася помилка при спробі видалення всіх контактів', error);
  }
};

removeAllContacts();
