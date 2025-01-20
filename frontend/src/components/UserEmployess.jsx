import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Table } from '@mui/material';
import styles from './employees.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import UserNavbaar from './UserNavbaar';
import axiosInstance from '../axiosInterceptor';

const UserEmployess = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('http://localhost:3000/employee/employeedetails');
        setData(response.data);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  if (loading) return <h2 className='text-center mt-5'>Loading...</h2>;
  return (
    <>
      <UserNavbaar />
      <table className={styles.tble}>
        <thead>
          <tr className={styles.trow}>
            <th>NAME</th>
            <th>DESIGNATION</th>
            <th>SALARY</th>
            <th className='text-center'>DEPARTMENT</th>
            <th>LOCATION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.Name}</td>
                <td>{item.Designation}</td>
                <td>{item.Salary}</td>
                <td className='text-center'>{item.Department}</td>
                <td>{item.Location}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UserEmployess;
