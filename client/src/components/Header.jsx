import React from 'react';

const Header = ({ visSide }) => {
    return (
        <header className='header'><div onClick={visSide} className='header__hamb'>
            <button className='header__btn'>
            </button></div><h1 className='header__title'>Список дел</h1>
        </header>
    );
}

export default Header;