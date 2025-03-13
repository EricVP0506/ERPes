import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import { useAuth0 } from '@auth0/auth0-react';
import 'primeicons/primeicons.css';
import './Sidebar.css'

export default function Sidebar1() {
    const [visible, setVisible] = useState(false);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);
    const { user } = useAuth0();

    return (
        <div>
            <Sidebar className="sidebar-lat" visible={visible} onHide={() => setVisible(false)}>
                <div className='flex flex-wrap align-items-center justify-content-between flex-shrink-0'>
                    <img src="/Img/lobo.webp" alt="Logo de BDS" className="logo" />
                    <h2 className='nombre'>BDS</h2>
                </div>
                <hr className="mb-3 mx-3 border-top-2 border-bottom-1" />
                <div className="overflow-y-auto">
                    <ul className="list-none p-3 m-0">
                        <li>
                            <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                    <span className="font-medium">Gestión de Usuarios</span>
                                    <i className="pi pi-chevron-down"></i>
                                    <Ripple />
                                </div>
                            </StyleClass>
                            <ul className="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <Link to='/Dashboard' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-home mr-2"></i>
                                        <span className="font-medium">Dashboard</span>
                                        <Ripple />
                                    </Link>
                                </li>
                                    <Link to='/Dashboard'className="p-ripple">
                                    <i className="pi pi-home mr-2"></i>
                                    <span>Dashboard</span>
                                    </Link>
                                <li>
                                    <Link to='/Usuarios' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-user mr-2"></i>
                                        <span className="font-medium">Usuarios</span>
                                        <Ripple />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/Clientes' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-bookmark mr-2"></i>
                                        <span className="font-medium">Clientes</span>
                                        <Ripple />
                                    </Link>
                                </li>
                                <li>
                                    <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                        <div ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">Reports</span>
                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                            <Ripple />
                                        </div>
                                    </StyleClass>
                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                        <li>
                                            <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <div ref={btnRef3} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-chart-line mr-2"></i>
                                                    <span className="font-medium">Revenue</span>
                                                    <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                    <Ripple />
                                                </div>
                                            </StyleClass>
                                            <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <Link to='#' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-table mr-2"></i>
                                                        <span className="font-medium">View</span>
                                                        <Ripple />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-search mr-2"></i>
                                                        <span className="font-medium">Search</span>
                                                        <Ripple />
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">Expenses</span>
                                                <Ripple />
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-users mr-2"></i>
                                        <span className="font-medium">Team</span>
                                        <Ripple />
                                    </div>
                                </li>
                                <li>
                                    <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-comments mr-2"></i>
                                        <span className="font-medium">Messages</span>
                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>
                                            3
                                        </span>
                                        <Ripple />
                                    </div>
                                </li>
                                <li>
                                    <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-calendar mr-2"></i>
                                        <span className="font-medium">Calendar</span>
                                        <Ripple />
                                    </div>
                                </li>
                                <li>
                                    <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-cog mr-2"></i>
                                        <span className="font-medium">Settings</span>
                                        <Ripple />
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="list-none p-3 m-0">
                        <li>
                            <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                <div ref={btnRef4} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                    <span className="font-medium">APPLICATION</span>
                                    <i className="pi pi-chevron-down"></i>
                                    <Ripple />
                                </div>
                            </StyleClass>
                            <ul className="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-folder mr-2"></i>
                                        <span className="font-medium">Projects</span>
                                        <Ripple />
                                    </div>
                                </li>
                                <li>
                                    <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-chart-bar mr-2"></i>
                                        <span className="font-medium">Performance</span>
                                        <Ripple />
                                    </div>
                                </li>
                                <li>
                                    <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-cog mr-2"></i>
                                        <span className="font-medium">Settings</span>
                                        <Ripple />
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={user.picture} alt={user.name} />
                    <span className='nombre_usuario'>
                        {user.name}
                    </span>
                </div>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} className="sidebar-lat-button" />
        </div>
    )
}