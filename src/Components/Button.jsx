import "./Button.css"


export default function Button({scrolling}){

    return <>
    <div className="MainBtnDiv mr-5">
    <a href="#" className={`neonBtn   font-NueueMontreal  font-medium bg-slate-100 ${scrolling? "text-small" : "text-sm"}`} >
        Get Demo
        <span className="btnSpan"></span>
        <span className="btnSpan"></span>
        <span className="btnSpan"></span>
        <span className="btnSpan"></span>
    
    </a>
    </div>
    </>
}