import React from 'react';
import {Link} from 'react-router-dom';
import './login.scss';
import '../reset.scss';


// const intitialState = {
//   emailError: '',
//   passwordError: ''
// };

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: ""
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
    // const errors = this.renderErrors();
    // if (errors) {
    //   this.setState({intitialState});
    // }
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    if (this.props.loginUser(user)) {
      this.props.history.push('/');
    } 
  }

  demoUser(e) {
    e.preventDefault();
    this.props
      .loginUser({
        email: "demo@drinksdesserts.com",
        password: "welcome1",
      })
      .then(() => {
        this.props.history.push("/");
      });
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  // componentWillUnmount() {
  //   this.props.clearErrors();
  // }

  // renderErrors() {
  //   let emailError = "";
  //   let passwordError = "";
  //   let password = this.state.password;
  //   let email = this.state.email;
  //   const splitOnAt = email.split("@");
  //   const splitOnDot = email.split(".");

  //   if (
  //     !email.includes("@") ||
  //     !email.includes(".") ||
  //     splitOnAt.length > 2 ||
  //     splitOnDot[splitOnDot.length - 1].length < 2 ||
  //     email === ""
  //   ) {emailError = "Enter a valid email.";} 
    
  //   if (password.length === 0) { 
  //     passwordError = 'Password is required';
  //   } else if (password.length < 6) {
  //     passwordError = 'Your password must be at least 6 characters. Please try again.';} 
  //   if ( passwordError || emailError) {
  //     this.setState({ passwordError, emailError});
  //   return false;
  //   }
  //   return true;
  // }

   renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((key, i) => (
          <li key={`error-${i}`}>{this.props.errors[key]}</li>
        ))}
      </ul>
    );
  }
    

  render() {
    // const errorNameEmail = (this.state.emailError !== '') ? 'errors-present' : 'no-errors';
    // const errorNamePassword = this.state.passwordError !== "" ? "errors-present" : "no-errors";
    
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
                    {/* <p className={errorNameEmail}>{this.state.emailError}</p>
                    <p className={errorNamePassword}>
                      {this.state.passwordError}
                    </p> */}
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