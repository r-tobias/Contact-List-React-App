import contacts from '../Data'
import Contact from './Contact'
// import contacts from '../data/contact.json'


function Main () {
    return (
        <div className='Contact-container'>
        {
            contacts.map((contactData, index) => {
        
                return <Contact contactData = {contactData} key = {index}/> 
            })
        }
       


        </div>
    )
}
export default Main;

