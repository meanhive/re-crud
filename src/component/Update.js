import Axios from 'axios';
import React, { Component } from 'react';

const URI = "https://bpcourse.herokuapp.com";


export default class Update extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            course: null
        };
        this.cId = React.createRef();
        this.title = React.createRef();
        this.fee = React.createRef();
        this.duration = React.createRef();
        this.desc = React.createRef();

        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount() {
        Axios.get(`${URI}/course/${ this.state.id }`)
            .then(result => {
                console.log(result.data);
                this.setState({
                    course: result.data
                });
            })
            .catch(err => console.log(err.message));
    }

    submitHandler(e) {
        e.preventDefault();
        const data = {
            cId: this.cId.current.value,
            title: this.title.current.value,
            fee: this.fee.current.value,
            duration: this.duration.current.value,
            desc: this.desc.current.value
        };
        console.log('edit', data);

        Axios.patch(`${URI}/course/${this.state.id}`, data)
            .then(result => {
                alert("Successfully updated");
                window.location = "/";
            })
            .catch(err => console.log(err.message));

    }

    render() {
        if(this.state.course === null) return null;
        const { cId,title,fee,duration,desc } = this.state.course;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 jumbotron text-center">
                        <h3>Update Course { this.state.id } </h3>
                    </div>
                </div>

                <div className="row">
                <div className="col-md-6 col-md-offset-3 well well-lg">
                    <form method="post" onSubmit={this.submitHandler} >
                        <div className="form-group">
                            <label htmlFor="cId">Course Id</label>
                            <input type="text"  className="form-control" ref={this.cId} defaultValue={cId} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text"  className="form-control" ref={this.title} defaultValue={title} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="fee">Fee</label>
                            <input type="number"  className="form-control" ref={this.fee} defaultValue={fee} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="duration">Duration</label>
                            <input type="number"  className="form-control" ref={this.duration} defaultValue={duration} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="desc">Description</label>
                            <textarea cols="30" rows="5" className="form-control" ref={this.desc} defaultValue={desc} ></textarea>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Update" className="btn btn-success"/>
                            <input type="reset" value="Cancel" className="btn btn-warning"/>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}
