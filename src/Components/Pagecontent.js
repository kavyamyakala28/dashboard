import React from 'react';
import './Pagecontent.css';

const PageContent = () => {
    return (
        <main className="page-content">

            <div className='consultants'>
                <button className='btn1' type="button">
                    <i class="fa-solid fa-users"></i> Consultants
                </button>
            </div>
            <br></br>

            <div className='filters'>
                <button className='btn2' type="button">Filters</button>
                <div className='dropdown-select'>
                    <button className='dropdown-btn'>Select Range<i class="fa-solid fa-angle-down"></i></button>
                </div>
                <div className='list-items'>
                    <label>
                        <input type="radio" name="option" value="Summary" /> Summary
                    </label>
                    <label>
                        <input type="radio" name="option" value="Branch Wise" /> Branch Wise
                    </label>
                </div>
            </div>
            <br></br>
            <div className='groups'>
                <div className='box1'>
                    <div className='details'>
                        <h4>Consultant Count<br /><span>90 / 100</span></h4>
                        <p>Total/Period</p>
                    </div>
                    <i class="fa-solid fa-users"></i>
                </div>
                <div className='box2'>
                    <div className='details'>
                        <h4>Consultations<br /><span>11 / 25</span></h4>
                        <p>Today/Period</p>
                    </div>
                    <i class="fa-solid fa-newspaper"></i>
                </div>
                <div className='box3'>
                    <div className='details'>
                        <h4>Labs<br /><span>25 / 560</span></h4>
                        <p>Today/Period</p>
                    </div>
                    <i class="fa-solid fa-money-bills"></i>
                </div>
                <div className='box4'>
                    <div className='details'>
                        <h4>DietPlans<br /><span>25 / 250</span></h4>
                        <p>Today/Period</p>
                    </div>
                    <i class="fa-solid fa-money-check-dollar"></i>
                </div>
            </div>
            <br></br>

            <div className="table-list">
                <div className='part1'>
                    <h3>Consultants</h3>
                    <div className='logos'>
                        <button><i class="fa-solid fa-arrows-turn-right"></i></button>
                        <button><i class="fa-solid fa-arrow-down"></i></button>
                    </div>
                </div>
                <table className='data-table'>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>PATIENT COUNT</th>
                            <th>LABS</th>
                            <th>DIET PLANS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Smith</td>
                            <td>12</td>
                            <td>3</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Jane Doe</td>
                            <td>8</td>
                            <td>2</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Mark Johnson</td>
                            <td>6</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Mary Lee</td>
                            <td>10</td>
                            <td>4</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>David Chen</td>
                            <td>14</td>
                            <td>5</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Emily Wana</td>
                            <td>5</td>
                            <td>3</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main >
    );
}

export default PageContent;
