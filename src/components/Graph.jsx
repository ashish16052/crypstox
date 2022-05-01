import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HistoricalChart } from '../components/api';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Graph = ({ coin }) => {

    const [chartData, setChart] = useState();
    const [days, setTime] = useState();

    const fetchData = async () => {
        var id = coin.id ? coin.id : "bitcoin"
        const { data } = await axios.get(HistoricalChart(id, days));
        setChart(data.prices);
    }
    useEffect(() => {
        fetchData();
    }, [coin.id,days])

    console.log(coin);

    if (coin.id) {
        return (
            <div className='Graph'>
                <div className='CoinInfo'>
                    <div className='Coinname'>
                        <img src={coin.image.small}></img>
                        <div>{coin.id}</div>
                    </div>
                    <div className='FilterButton'>
                        <div className='ChartButton' onClick={()=>{setTime(1)}}>24 Hours</div>
                        <div className='ChartButton' onClick={()=>{setTime(7)}}>7 Days</div>
                        <div className='ChartButton' onClick={()=>{setTime(30)}}>30 Days</div>
                    </div>
                </div>
                <Line
                    data={{
                        labels: chartData.map((coin) => {
                            let date = new Date(coin[0]);
                            let time =
                                date.getHours() > 12
                                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                    : `${date.getHours()}:${date.getMinutes()} AM`;
                            return days === 1 ? time : date.toLocaleDateString();
                        }),

                        datasets: [
                            {
                                data: chartData.map((coin) => coin[1]),
                                label: `Price ( Past ${days} Days )`,
                                borderColor: "#4F2ED0",
                                backgroundColor: "#4F2ED0",
                                color: "#4F2ED0"
                            },
                        ],
                        
                    }}
                    options={{
                        elements: {
                            point: {
                                radius: 1,
                            },
                        },
                    }}
                />
            </div>
        )
    }
    else {
        return null;
    }
}

export default Graph