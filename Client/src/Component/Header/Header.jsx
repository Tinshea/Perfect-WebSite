import "./Header.css";
export function Header(props){

    return <header>
        <a href="#" className="brand">King's Garden</a>
        <div className="menu-btn"></div>
        <div className="navigation">
            <div className="navigation-items">
                <a className="buttonheader" href="#">Home</a>
                <a className="buttonheader" href="#">Anime</a>
                <a className="buttonheader" href="#">Manga</a>
                <a className="buttonheader" href="#">Book</a>
                <a className="buttonheader" href="#">League of Legends</a>
                <a className="buttonheader" href="#">Gallery</a>
            </div>
        </div>
    </header>
}