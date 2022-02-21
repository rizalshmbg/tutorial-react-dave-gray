const Footer = ({ length }) => {

    return (
        <footer>
            {/* <p>{length > 1 ? (`${length} List items`) : `${length} List item`}</p> */}
            <p>{length} List {length === 1 ? "item" : "items"}</p>
        </footer>
    )
}

export default Footer;