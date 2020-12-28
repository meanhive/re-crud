import React, { Component } from 'react'
import Axios from 'axios';
const URI = "https://bpcourse.herokuapp.com";

export default class New extends Component {

    constructor(props) {
        super(props);
        this.cId = React.createRef();
        this.title = React.createRef();
        this.fee = React.createRef();
        this.duration = React.createRef();
        this.desc = React.createRef();
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();
        const body = {
            cId: this.cId.value,
            title: this.title.value,
            fee: this.fee.value,
            duration: this.duration.value,
            desc: this.desc.value
        };
        console.log('output', body);
        Axios.post(`${URI}/course`, body)
        .then(result => {
            alert("Successfully Created");
            window.location = "/";
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 jumbotron text-center">
                        <h3>New Course</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-md-offset-3 well well-lg">
                        <form method="post" onSubmit={this.submitHandler} >
                            <div className="form-group">
                                <label htmlFor="cId">Course Id</label>
                                <input type="text" name="cId" id="cId" className="form-control" ref={item => this.cId = item} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" id="title" className="form-control" ref={item => this.title = item} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="fee">Fee</label>
                                <input type="number" name="fee" id="fee" className="form-control" ref={item => this.fee = item} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="duration">Duration</label>
                                <input type="number" name="duration" id="duration" className="form-control" ref={item => this.duration = item} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="desc">Description</label>
                                <textarea name="desc" id="desc" cols="30" rows="5" className="form-control" ref={item => this.desc = item}></textarea>
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Create" className="btn btn-success"/>
                                <input type="reset" value="Cancel" className="btn btn-warning"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
