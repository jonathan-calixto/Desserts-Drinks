import React from 'react';
import {Link} from 'react-router-dom';
import './login.scss';
import '../reset.scss';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(user).then(() => this.props.history.push('/login'));

  }

  demoUser(e) {
    e.preventDefault();
    this.props.loginUser({
        email: "demo@drinksdesserts.com",
        password: "welcome1",
      });
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  renderErrors() {
     const { errors } = this.props;
    return (
      <ul>
        {Object.keys(errors).map((key, i) => (
          <li key={`error-${i}`}>{errors[key]}</li>
        ))}
      </ul>
    );
  }
    

  render() { 
    return (
      <div className="login-top">
        <div className="login-wrapper">
          <div className="login-container">
            <div>
              <div className="login-logo-container">
                <img src="https://pxelation-seeds.s3.amazonaws.com/logo4.png" alt="" />
              </div>
              <form onSubmit={this.handleSubmit} className="login-form">
                <div className="login-form-child">
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                    className="login-input"
                  />
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                    className="login-input"
                  />

                  <div className="button-container">
                    <div className="login-submit">
                      <input type="submit" value="Login" />
                    </div>

                    <div className="login-submit-demo">
                      <button
                        onClick={(e) => {
                          this.demoUser(e);
                        }}
                      >
                        Demo
                      </button>
                    </div>
                  </div>
                    <div className=   {'error-wrapper'}>
                        {this.renderErrors()}
                  </div>

                  <Link to="/signup" className="login-link">
                    Not a Member? Click to Sign Up!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}