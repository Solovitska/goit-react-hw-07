import axios from 'axios';

export const fetchContacts = async () => {
  const { data } = await axios.get(
    'https://6640e883a7500fcf1a9f100e.mockapi.io/contacts'
  );
  return data;
};

export const addContact = async contactData => {
  const { data } = await axios.post(
    'https://6640e883a7500fcf1a9f100e.mockapi.io/contacts',
    contactData
  );
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await axios.delete(
    `https://6640e883a7500fcf1a9f100e.mockapi.io/contacts/${contactId}` // Додано слеш перед параметром contactId
  );
  return data;
};