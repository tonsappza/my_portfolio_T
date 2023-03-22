import { Menu } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./logo.css"
// import logo from '../../src/assets/images/icons8-p-96.png'
const Navbar = () => {
    const navigate = useNavigate();
    const onMenuClick = async (event, record) => {
        const { key } = event;
        if (key === 'skill') {
            navigate('/skill');
        } else if (key === 'exp') {
            navigate('/experience');
        } else if (key === 'contact') {
            navigate('/contact');
        } else {
            window.location.href = '/';
            // return window.location.href = '/';
        }
    };
    return (
        <>
            <Menu
                className='navbar'
                mode={'horizontal'}
                items={[
                    {
                        label: "My Portfolio",
                        key: "portfolio",
                        // icon: <img style={{ width: '20px', height: '20px' }} src={logo} />,
                        className: "logoNav",
                        onClick: (e) => onMenuClick(e),
                    },
                    {
                        label: "Skill",
                        key: "skill",
                        className: "MenuNav1",
                        onClick: (e) => onMenuClick(e),
                    },
                    {
                        label: "Experience",
                        key: "exp",
                        className: "MenuNav2",
                        onClick: (e) => onMenuClick(e),
                    },
                    {
                        label: "Contact Me",
                        key: "contact",
                        className: "MenuNav3",
                        onClick: (e) => onMenuClick(e),
                    },
                ]}>
            </Menu>
        </>
    )
};
export default Navbar;

