interface FooterProps{
    urlLogo: string
    children : React.ReactNode;
}

const Footer = (Props: FooterProps) => {
    return(
        <footer className="footer">
            <div>{Props.children}</div>
            <img src={Props.urlLogo} alt="logo" className="logo" />
        </footer>
    )
};
export default Footer;