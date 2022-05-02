import React, { useEffect, useState } from 'react';
import List from '../components/List';
import Graph from '../components/Graph';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { SingleCoin } from '../components/api';
import axios from 'axios';

const Dashboard = () => {

  var { id } = useParams();

  const [coin, setCoin] = useState("");
  const fetchData = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  }
  useEffect(() => {
    fetchData();
  }, [id])

  return (
    <div className='Dashboard'>
      <Graph coin={coin} />
      <List />
    </div>
  );
}

export default Dashboard