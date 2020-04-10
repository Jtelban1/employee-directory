import React from "react";

function Header() {
    return (
        <header className="navbar p-2 mb-4 bg-gray">
            <section className="navbar-section">
                <a href="#" className="navbar-brand mr-2 text-dark text-bold">
                    Employee Directory
                </a>
            </section>
            <section className="navbar-section">
                <a
                    href="https://portfolio.john.com"
                    className="mr-2 text-dark text-bold"
                >
                    John Telban
                </a>
            </section>
        </header>
    );
}

export default Header;
