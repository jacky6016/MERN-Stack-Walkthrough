import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class EditExercise extends Component {
    
    constructor(props) {
        super(props);

        // binding 'this' to functions
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // define states
        // when the state of a React component is updated, the corresponding page will automatically updated
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    // A React Lifecycle method: automatically called before anything is rendered on the page
    componentDidMount() {
        axios.get('http://localhost:5000/exercises/'+this.props.match.params.id) // get the updated exercise id & data from the url
            .then(response => {
                this.setState({
                    username: response.data.username,
                    description: response.data.description,
                    duration: response.data.duration,
                    date: new Date(response.data.date)
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
        
        axios.get('http://localhost:5000/users/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username),
                    })
                }
            })
    }

    // define state-changing functions
    onChangeUsername(e) {
        // always use the setState() method
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        // always use the setState() method
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        // always use the setState() method
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        // always use the setState() method
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault(); // prevent the default HTML form submit behavior

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);
        
        axios.post('http://localhost:5000/exercises/update/'+this.props.match.params.id, exercise)
            .then(res => console.log(res.data));
        
        // go back to the home page
        window.location = '/';
    }

    render() {
        return (
        <div>
          <h3>Edit Exercise Log</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Username: </label>
              <select ref="userInput"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}>
                  {
                    this.state.users.map(function(user) {
                      return <option 
                        key={user}
                        value={user}>{user}
                        </option>;
                    })
                  }
              </select>
            </div>
            <div className="form-group"> 
              <label>Description: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  />
            </div>
            <div className="form-group">
              <label>Duration (in minutes): </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.duration}
                  onChange={this.onChangeDuration}
                  />
            </div>
            <div className="form-group">
              <label>Date: </label>
              <div>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>
            </div>
    
            <div className="form-group">
              <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
    }
}