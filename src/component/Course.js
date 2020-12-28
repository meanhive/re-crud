import React, { Component } from 'react'
import Axios from 'axios';
import Card from '../helper/Card';
// import { video1 } from '../helper/video';

const URI = "https://bpcourse.herokuapp.com";

export default class Course extends Component {

    constructor(props) {
        super(props);
        this.state = {
            course: []
        }
    }

    componentDidMount() {
        Axios.get(`${URI}/course`)
        .then(result => {
            console.log(result);
            if(result.status == 200) {
                const course = result.data;
                this.setState({ course });
            }
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 jumbotron text-center">
                        <h3>Course List</h3>
                    </div>
                </div>


                <div className="row">
                    {
                        this.state.course.map((item,key) => {
                            return (
                                <div className="col-md-4" key={key}>
                                    <Card course={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
