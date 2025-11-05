interface PageTitleProps{
    title:String;
}

const PageTitle = (props : PageTitleProps) =>{
    return <h1>{props.title}</h1>;
}
export default PageTitle;
