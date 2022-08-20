import React from 'react';
import LogoImage from '../../assets/images/lws.svg'

const Header = () => {
    return (
        <nav class="bg-slate-100 shadow-md">
        <div
            class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
        >
            <a href="index.html">
                <img
                    class="h-10"
                    src={LogoImage}
                    alt="Learn with Sumit"
                />
            </a>
        </div>
    </nav>
    );
};

export default Header;