import { useState } from "react";

export const useLocalStorage = (itemLocalStorage, initialValue) => {
  // Traer elementos de Local Storage
  const localStorageItem = localStorage.getItem(itemLocalStorage);
  // Nueva variable con el item parseado
  let parsedItem;

  // Verificación si hay información en Local Storage
  if (!localStorageItem) {
    localStorage.setItem(itemLocalStorage, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemLocalStorage, stringifiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
};
