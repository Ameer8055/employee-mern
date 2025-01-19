import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Table } from '@mui/material';
import styles from './employees.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';

const Employees = () => {
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

  function updateData(val) {
    navigate('/edit', { state: { val } });
  }

  const deleteData = async (item) => {
    try {
      await axios.delete(`http://localhost:3000/employee/delete/${item._id}`);
      window.location.reload();
    } catch (error) {
      alert('Error deleting employee: ' + error);
    }
  };

  if (loading) return <h2 className='text-center mt-5'>Loading...</h2>;
  return (
    <>
      <Navbar />
      <table className={styles.tble}>
        <thead>
          <tr className={styles.trow}>
            <th>NAME</th>
            <th>DESIGNATION</th>
            <th>SALARY</th>
            <th className='text-center'>DEPARTMENT</th>
            <th>LOCATION</th>
            <th colSpan={2} className='text-center'>ACTIONS</th>
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
                <td><button className='rounded-3 bg-warning text-white' onClick={() => { updateData(item) }}>UPDATE</button></td>
                <td><button className='rounded-3 bg-danger text-white' onClick={() => { deleteData(item) }}>DELETE</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Employees;
