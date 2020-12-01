import { Button } from 'antd';
import Axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from 'react'

export default function Tab_users() {

    const [listCostomer, setListCostomer] = useState([])
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const dispatch = useDispatch();
    const costomers = useSelector(state => state.costomers)
    return (
        <div className="tab_users" >
            <h2>Users</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email </th>
                        <th>Create at</th>
                        <th>Update at</th>
                        <th>Handle</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        costomers.map((data, index) => {
                            return (
                                <tr key={index} >
                                    <td> {index + 1} </td>
                                    <td scope="row"> {data.email} </td>
                                    <td> {Date(data.createdAt)} </td>
                                    <td> {Date(data.updatedAt)} </td>
                                    <td>
                                        <Button danger >Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

        </div>
    )
}
