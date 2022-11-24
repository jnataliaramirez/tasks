import { useState, useEffect } from "react";

export const useLocalStorage = (itemLocalStorage, initialValue) => {
  // Se crea el estado inicial para nuestros errores y carga
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulación de la carga de los datos
    setTimeout(() => {
      // Se utiliza un try/catch para manejar los estados de "carga"
      try {
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

        setItem(parsedItem);
      } catch (error) {
        // En caso de un error se guarda en el estado error
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemLocalStorage, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
};
