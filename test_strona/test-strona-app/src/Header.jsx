import Navbar from "./Navbar";

function Header() {
	const preventDefault = (event) => {
        event.preventDefault();
    };

    return(
        <header>
            <div className='headContainer' onContextMenu={preventDefault}>
                <img src='./src/assets/smieszny_kot.gif' alt='haha kot'/>
                <h1>Strona o kotkach~</h1>
                <img src='./src/assets/glupi_kot_laser.gif' alt='haha kot'/>
            </div>
            <Navbar/>
            <hr></hr>
        </header>
    );
}

export default Header