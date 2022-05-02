import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HistoricalChart } from '../components/api';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import favicon from '../assets/favicon.svg'
Chart.register(...registerables);

const Graph = ({ coin }) => {

    const [chartData, setChart] = useState();
    const [days, setTime] = useState(7);
    const [priceColor, setColor] = useState();

    const [filter1Color, setColor1] = useState("ChartButton accent");
    const [filter2Color, setColor2] = useState("ChartButton");
    const [filter3Color, setColor3] = useState("ChartButton");

    const toggleColor = (e) => {
        if (e === 1) {
            setColor1("ChartButton accent");
            setColor2("ChartButton");
            setColor3("ChartButton");
        }
        if (e === 2) {
            setColor2("ChartButton accent");
            setColor1("ChartButton");
            setColor3("ChartButton");
        }
        if (e === 3) {
            setColor3("ChartButton accent");
            setColor2("ChartButton");
            setColor1("ChartButton");
        }
    }

    const fetchData = async () => {
        var id = coin.id ? coin.id : "bitcoin"
        const { data } = await axios.get(HistoricalChart(id, days));
        setChart(data.prices);
    }
    useEffect(() => {
        fetchData();
        if (coin.id) {
            Number(coin.market_data.price_change_percentage_24h_in_currency.inr > 0) ?
                setColor("green") :
                setColor("red");
        }
    }, [coin.id, days])

    console.log(coin);

    if (coin.id) {
        return (
            <div className='Graph'>
                <div className='CoinInfo'>
                    <div className='Coindata'>
                        <div className='Coinname'>
                            <img src={coin.image.small}></img>
                            {coin.id}
                        </div>
                        <div>₹{coin.market_data.current_price.inr}</div>
                        <div className={priceColor}>{coin.market_data.price_change_percentage_24h_in_currency.inr}</div>
                    </div>
                    <div className='FilterButton'>
                        <div className={filter1Color} onClick={() => { setTime(1); toggleColor(1) }}>24 Hours</div>
                        <div className={filter2Color} onClick={() => { setTime(7); toggleColor(2) }}>7 Days</div>
                        <div className={filter3Color} onClick={() => { setTime(30); toggleColor(3) }}>30 Days</div>
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
        return <div className='GraphPlaceholder'>
            <h1>Select a coin to Start tracking</h1>
            <span><img src={favicon}></img></span>
        </div>;
    }
}

export default Graph