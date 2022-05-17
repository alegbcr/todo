import { useState, useEffect } from "react";

const useLocalStorage = (itemName, initialValue) => {
  // State to render
  const [sincronizedItem, setSincronizedItem] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // State of localStorage
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        // set localStorage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        // Updating the state
        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  }, [sincronizedItem]);

  // Save ToDos in localStorage
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  // Sicronize all ToDos
  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  return { item, saveItem, loading, error, sincronizeItem };
};

export { useLocalStorage };
