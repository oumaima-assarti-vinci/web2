type HeaderProps = {
    title: string;
};

const Header= ({title}: HeaderProps) =>{
    return <h1 className="Header"> {title}</h1>;
};
export default Header;