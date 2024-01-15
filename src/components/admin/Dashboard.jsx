import React from 'react'
import '../../styles/dashboard.scss'
import { Link } from 'react-router-dom'
import { BiSolidUser, BiSolidNotepad } from 'react-icons/bi';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, ArcElement, Legend, } from 'chart.js';
import Loader from '../layout/Loader';

const Box = ({ title, value, logo }) => (
    <div className='box'>
        <div>
            {logo}
        </div>
        <div>
            <h1>{value} </h1>
            <p>{title}</p>
        </div>
    </div>
)

const Dashboard = () => {

    const loading = true

    ChartJS.register(Tooltip, ArcElement, Legend)

    const data = {
        labels: ["Preparing", "Shipped", "Delivered"],
        datasets: [
            {
                label: "# of orders",
                data: [2, 10, 4],
                backgroundColor: ["rgba(159,63,176,0.3)", "rgba(78,63,176,0.3)", "rgba(156,0,60,0.3)"],
                borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
                borderWidth: 1,
            }
        ],

    }
    return (
        <section className='dashboard'>
            {
                loading === false ? 
                <main>
                <article>
                    <Box logo={<BiSolidUser style={{ fontSize: '50px' }} />} title='User' value={123} />
                    <Box logo={<BiSolidNotepad style={{ fontSize: '50px' }} />} title='Orders' value={573} />
                    <Box logo={<FaMoneyCheckDollar style={{ fontSize: '50px' }} />} title='Income' value={"₹ " + 33432} />
                </article>
                <section>
                    <div>
                        <Link to='/admin/orders'>View Orders </Link>
                        <Link to='/admin/users'>View Users </Link>
                    </div>

                    <aside>
                        <Doughnut data={data} />
                    </aside>
                </section>
            </main>:<Loader/>
            }
        </section>
    )
}

export default Dashboard