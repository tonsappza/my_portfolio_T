import { Menu } from 'antd';
import { useState } from 'react';
const Navbar = () => {
    return (
        <>
            <div>
                <Menu

                    style={{ backgroundColor: '#BEBEBE', color: 'white', fontSize: 16, }}
                    mode={'horizontal'}
                    items={[
                        {
                            label: "My Portfolio",
                            key: "portfolio",
                            style: { backgroundColor: '#BEBEBE', fontWeight: 'bold' },
                        },
                        {
                            label: "Skill",
                            key: "skill",
                        },
                        {
                            label: "Experience",
                            key: "exp",
                        },
                        {
                            label: "Contact Me",
                            key: "contact",
                        },
                    ]}>
                </Menu>
            </div>
        </>
    )
};
export default Navbar;

