import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import css from "./App.module.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContacts } from "../../redux/contactsOps"

export default function App() {

    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.contacts.loading)
    const isError = useSelector(state => state.contacts.error)

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <div className={css.container}>
            <h1 className={css.mainTitle}>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {isError && <p>Error</p>}
            {isLoading && <p>Loading...</p>}
            <ContactList />
        </div>
    )
}