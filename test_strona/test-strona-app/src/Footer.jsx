function Footer() {
	const preventDefault = (event) => {
        event.preventDefault();
    };

    return(
        <footer onContextMenu={preventDefault}>
            <p>&copy; {new Date().getFullYear()} FirmaKotki</p>
        </footer>
    );
}

export default Footer