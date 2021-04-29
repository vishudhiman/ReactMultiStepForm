import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
// import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    fullName: "",
    email: "",
    password: "",
    collegeName: "",
    graduationYear: "",
    degree: "",
    major: "",
  };
  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  //Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { close } = this.props;
    const {
      fullName,
      email,
      password,
      collegeName,
      graduationYear,
      degree,
      major,
    } = this.state;
    const values = {
      fullName,
      email,
      password,
      collegeName,
      graduationYear,
      degree,
      major,
    };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            close={close}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            close={close}
          />
        );

      case 3:
        return <Success close={close} />;
      // case 4:
      //   return (
      //     <Confirm
      //       nextStep={this.nextStep}
      //       prevStep={this.prevStep}
      //       values={values}
      //     />
      //   );
    }
    return <div></div>;
  }
}

export default UserForm;
