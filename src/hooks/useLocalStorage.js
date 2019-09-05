import { useState } from 'react';

//define function that will work very similar to the useState hook but values will be placed into local storage so values saved there can be used later, will have initial value. Will need a key for localStorage as well. useLocalStorage is nomenclature for custom hooks and we will use useState and customize that hook. 

//checking to see if there is a defined key in local storage
const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		const keyItem = window.localStorage.getItem(key);
		if (keyItem) {
			//this will construct javascript object if there is a value for keyItem
			return JSON.parse(keyItem)
		} else {
			//if there is no value in keyItem it will use the initialValue
			return initialValue;
		}

	});

};

export default useLocalStorage;