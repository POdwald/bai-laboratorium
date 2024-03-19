function Navbar() {
	const preventDefault = (event) => {
        event.preventDefault();
    };
	
    return(
        <nav className='navbar-main' onContextMenu={preventDefault}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">To nic nie robi</a></li>
                <li><a href="#">To tez nie</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;