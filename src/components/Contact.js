function Contact ({contactData}) {

    const {name, phone, cell, picture} = contactData

    return (
        <div className="testing">
        <div className="Contact"> 
        <div>
            <img src = {picture.thumbnail}></img>
        </div>
        <div>
            <h4>{name.first} {name.last}</h4>
            <h5>Home: {phone}</h5>
            <h5>Mobile: {cell}</h5>

        </div>
        <div>
            <a href="#">{`>`}</a>
        </div>
        <div>
            
        </div>

        </div>
        </div>

    )
}
export default Contact
// {/* <h2>{name}</h2> */}
// {/* <h3>{contactData.name.first} {contactData.name.last}</h3> */}
// {/* <p>Country: {contactData.country}</p>
// <p>Population: {contactData.population}</p>
// <p>Language: {contactData.language}</p>  */}
// </>
