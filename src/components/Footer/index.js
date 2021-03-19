import "./style.css";
const Footer = (props)=>{

    const title = props.title;
    return <div className="footer">
        {title}
    </div>
}
export default Footer;