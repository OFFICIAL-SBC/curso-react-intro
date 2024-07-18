import React from 'react';

function useLocalStorage(itemName, initialValue){

    const [item,setItem] = React.useState(initialValue);
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);
    

    React.useEffect(()=>{

        setTimeout(()=>{
            try{
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
    
                if(!localStorageItem){
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = [];
                }else{
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                setLoading(false);
    
            }catch(error){
                setLoading(false);
                setError(true);
            }
        },2000);

    },[]);


    const saveItem = (newItem)=>{
        const stringifiedTodos = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedTodos);
        setItem(newItem);
    }

    return {item,
        saveItem,
        loading,
        error
    };
}


export {useLocalStorage};

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Doblar ropa', completed: false},
//   {text: 'Gym', completed: true},
//   {text: 'Futbol', completed: false},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');