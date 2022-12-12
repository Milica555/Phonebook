export function setToLocalStorage (phoneBook) {
    const storedPhoneBooks = getFromLocalStorage();

    if (storedPhoneBooks == null) { 
        localStorage.setItem("phonebook", '[]');
    } 

    if (phoneBook) {
        pushIfDoesNotExist(storedPhoneBooks, phoneBook);
        localStorage.setItem("phonebook", JSON.stringify(storedPhoneBooks));
    }
}

export function removeFromLocalStorage (phoneBook) {
    var phoneBooks = getFromLocalStorage();
    removeIfExist(phoneBooks, phoneBook);
    localStorage.setItem("phonebook", JSON.stringify(phoneBooks));
}

export function getFromLocalStorage () {
    return JSON.parse(localStorage.getItem("phonebook"));
};

function pushIfDoesNotExist(phoneBookArr, phoneBookNewEntry) {
    var index = phoneBookArr.findIndex(function(obj) {
        return obj.name === phoneBookNewEntry.name;      
      });
      
      if (index === -1) {      
        phoneBookArr.push(phoneBookNewEntry);
              
      } else {
        alert('The name already exists in the phonebook')
      }    
}

function removeIfExist(phoneBookArr, phoneBookEntryRemove) {    
    var index = phoneBookArr.findIndex(function(obj) {
        return obj.name === phoneBookEntryRemove.name;      
      });
      
      if (index !== -1) {      
        phoneBookArr.splice(index, 1);      
      } 
}