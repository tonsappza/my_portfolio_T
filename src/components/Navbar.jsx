import { Menu } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./logo.css"
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
                        className: "logoNav",
                        // style: { fontWeight: 'bold' },
                        onClick: (e) => onMenuClick(e),
                    },
                    {
                        label: "Skill",
                        key: "skill",
                        onClick: (e) => onMenuClick(e),
                    },
                    {
                        label: "Experience",
                        key: "exp",
                        onClick: (e) => onMenuClick(e),
                    },
                    {
                        label: "Contact Me",
                        key: "contact",
                        onClick: (e) => onMenuClick(e),
                    },
                ]}>
            </Menu>
        </>
    )
};
export default Navbar;

