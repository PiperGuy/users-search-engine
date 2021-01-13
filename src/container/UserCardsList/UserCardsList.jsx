import React, {useState,useEffect} from 'react'
import UserCard from '../../components/UserCard/UserCard.jsx'
import { KEY_DOWN, KEY_UP } from '../../constants/constants.js';

export default function UserCardsList({users,searchKey}) {
    // store current focused index
    const [focusedIndex, setFocusedIndex] = useState(-1)
    // change the focus index based on key presses.
    const handleKeyPress = (event) => {
        let tempFocused=focusedIndex;
        if (event.keyCode === KEY_DOWN ) {
            if(tempFocused!==undefined || tempFocused!==null){
                setFocusedIndex(tempFocused >= users.length - 1 ? users.length - 1 :tempFocused + 1)
              }
        }
        if (event.keyCode === KEY_UP ) {
            if(tempFocused!==undefined || tempFocused!==null){
                    setFocusedIndex(tempFocused <= 0 ? 0 : tempFocused - 1 )
            }
        }
    };
    useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
    }, [focusedIndex]);

    useEffect(() => {
        // clear current focused index on change of the searchkey
        setFocusedIndex(-1);
    }, [searchKey])
    return  (
        <div>
            {searchKey.length>0 && users.length === 0 && (
                <div className="no-results-div">
                    No User Found
                </div>
            )}
            {users.map(({id:{value},name:{first,last},location:{street:{number,name},city,country}},i)=>(
                    <UserCard
                        index={i}
                        id={value || ""}
                        name={
                            `${first || ""} ${last || ""}` 
                        }
                        address={
                            `${number|| ""} ${name|| ""}, ${city|| ""}, ${country|| ""}` 
                        }
                        key={i.toString()}
                        focusedIndex={focusedIndex}
                        setFocusedIndex={setFocusedIndex}
                        searchKey={searchKey}
                    />
            ))}
        </div>
    )
}


