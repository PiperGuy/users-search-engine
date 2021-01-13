import React,{useRef,useEffect} from 'react'
import Highlighted from '../HighlightedText/Highlighted'
import "./usercard.css"
export default function UserCard({id,name,address ,focusedIndex, setFocusedIndex,index ,searchKey}) {
    // change the focus with ref
    const ref = useRef("")
    useEffect(() => {
        // chnage the focus to this item if focusIndex = index
        if (focusedIndex===index) {
            ref.current.focus()
        }
    }, [focusedIndex])
    return (
        <div 
            ref={ref}
            className={`user-card ${focusedIndex===index && 'highlighted-card'}`} 
            role={"button"} 
            // focus the current index on hover
            onMouseOver={()=>setFocusedIndex(index)}
            // assign tabIndex to make this element more accessible than rest of the items. 
            tabIndex={focusedIndex===index?"9999":"-1"}
         >
            {/* split the ID and join back with '-' to remove white spaces */}
            <h2 className="card-id">{id.split(" ").join("-")}</h2>
            <Highlighted text={name} highlight={searchKey} customClassName="card-name"/>
            <Highlighted text={address} highlight={searchKey} customClassName="card-address"/>
        </div>
    )
}
