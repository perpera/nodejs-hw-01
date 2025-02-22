import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();

    return `Кількість Ваших контактів - ${contacts.length}`;
  } catch (error) {
    console.error('Сталася помилка при спробі порахувати контакти', error);
  }
};

console.log(await countContacts());
