import React,{useState,useEffect} from 'react'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import { handleUserSearch } from '../../helpers/searchUser.js';
import { getInitialUserList } from '../../services/user.services';
import UserCardsList from '../UserCardsList/UserCardsList.jsx';

export default function Index() {
    // store users list which is coming from API
    const [users,setUsers] = useState([]);
    // store macthing user with search criteria
    const [filteredUsers, setFilteredUsers] = useState([])
    // store user input text
    const [searchKey, setSearchKey] = useState("")
    // perform initial rendering 
    const [isLoading, setIsLoading] = useState(true)

    // make service call 
    const loadData = async ()=>{
    const usersData= await getInitialUserList()
    setUsers(usersData.results);
    setIsLoading(false)
    }

    useEffect(() => {

        if (isLoading) {
                loadData()
        }
        setFilteredUsers(searchKey ? handleUserSearch(users,searchKey) : [])
    }, [searchKey])


    return isLoading? null :  (
        <div className="main-container">
            <SearchBar searchKey={searchKey} setSearchKey={setSearchKey}/>
            <UserCardsList searchKey={searchKey} users={filteredUsers}/>
        </div>
    )
}
