import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className='dashboard'>
                Dashboard
                <div className='button'>
                    <button type="button">
                        <i class="fa-solid fa-user"></i><br></br>Patients
                    </button>
                    <button type="button" id="hr">
                        <i class="fa-solid fa-database"></i><br></br>HR
                    </button>
                    <button type="button">
                        <i class="fa-solid fa-filter"></i><br></br>Labs
                    </button>
                    <button type="button">
                        <i class="fa-solid fa-landmark"></i><br></br>Pharma
                    </button>
                </div>
            </div>
            <div className='processes'>
                Processes
                <div className='button'>
                    <div className='button'>
                        <button type="button">
                            <i class="fa-solid fa-file-lines"></i><br></br>Registration
                        </button>
                        <button type="button">
                            <i class="fa-solid fa-file"></i><br></br>Consultation
                        </button>
                        <button type="button">
                            <i class="fa-solid fa-vial"></i><br></br>Tests & Reports
                        </button>
                        <button type="button">
                            <i class="fa-solid fa-money-bills"></i><br></br>Billing
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
