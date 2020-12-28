import React from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

const URI = "https://bpcourse.herokuapp.com";

const Card = (props) => {
    const { _id,cId,title,fee,desc,duration }  = props.course;

    const deleteHandler = (id) => {
            const status = window.confirm("Are you sure to delete?");
            if(status) {
                Axios.delete(`${URI}/course/${id}`)
                .then(result => {
                    window.location = "/";
                }).catch(err => console.log(err));
            } else {
                return false;
            }
    }

    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title"> { cId }<span className="pull-right">{ title }</span> </h3>
            </div>
            <div className="panel-body">
                <ul className="list-group">
                    <li className="list-group-item">
                        Fee <span className="pull-right"> &#8377;{ fee } </span>
                    </li>
                    <li className="list-group-item">
                        Duration <span className="pull-right"> { duration } </span>
                    </li>
                    <li className="list-group-item">
                        <details>
                                <summary>Description</summary>
                                <p> {desc} </p>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="panel-footer">
                <NavLink to={"/update/" + _id} className="btn btn-sm btn-primary">
                    <span className="glyphicon glyphicon-edit"></span>
                </NavLink>

                <button className="btn btn-sm btn-danger pull-right" onClick={() => deleteHandler(_id)} >
                    <span className="glyphicon glyphicon-trash"></span>
                </button>
            </div>
        </div>
    );
}

export default Card;
