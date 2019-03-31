import { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CostumerData from '../checkout/CostumerData'
import PaymentMethod from '../checkout/PaymentMethod'
import SendingMethod from '../checkout/SendingMethod'



const styles = theme => ({
  root: {
    width: "90%",
    direction: 'rtl'
  },
  button: {
    marginRight: theme.spacing.unit
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  iconContainer: {
    transform: 'scale(2)',
    marginRight: theme.spacing.unit * 5,
    display: false
}
});

function getSteps() {
  return ["اطلاعات مشتری", "روش ارسال", "روش پرداخت"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
    return <CostumerData handleNext={this.handleNext}/>;
      // return "Step 1: Select campaign settings...";
    case 1:
    return <SendingMethod/>;
      // return "Step 2: What is an ad group anyways?";
    case 2:
    return <PaymentMethod/>;
      // return "Step 3: This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}

class StepperArrow extends Component {

  state = {
    activeStep: 0,
    completed: {}
  };
  getStepContent(step) {
    switch (step) {
      case 0:
      return <CostumerData handleNext={this.handleNext} handleBack={this.handleBack}/>;
      case 1:
      return <SendingMethod handleNext={this.handleNext} handleBack={this.handleBack}/>;
      case 2:
      return <PaymentMethod handleBack={this.handleBack}/>;
      default:
        return "Unknown step";
    }
  }

  totalSteps = () => getSteps().length;

  handleNext = () => {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      const steps = getSteps();
      activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step
    });
  };

  handleComplete = () => {
    const { completed } = this.state;
    completed[this.state.activeStep] = true;
    this.setState({
      completed
    });
    this.handleNext();
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: {}
    });
  };

  completedSteps() {
    return Object.keys(this.state.completed).length;
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps();
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        {/* <Stepper nonLinear  */}
        {/* activeStep={activeStep}
         connector={false}> */}
         <div style={{display:'flex', margin: '20px 0px'}}>
          {steps.map((label, index) => (
              // <Step
              //   connector={false}
              //   // key={label}
              // >
              //   <StepButton
              //   classes={{
              //     iconContainer: classes.iconContainer
              //   }}
              //     onClick={this.handleStep(index)}
              //     completed={this.state.completed[index]}
              //   >
              <div>
                {console.log('label,activeStep',steps[index],activeStep, index)}
              <div style={{display:'flex',flexDirection: 'row', padding:'0px 0px 0px 5px'}}
              // style={index === activeStep? {color:'red'}: {color: 'black'}}
              // className={label === activeStep ? 'sss': 'ddd'} 
              // {label === activeStep ? className = "dic" : className = "dic"}
              >
                  <span style={ index === activeStep? {color:'blue', padding:'0px 0px 0px 5px'}: {color: 'black', padding:'0px 0px 0px 5px'}}>{label}</span> >
                  </div>
                  </div>
              //   </StepButton>

              // </Step>
          ))}
          </div>
        {/* </Stepper> */}
        <div>
          {this.allStepsCompleted() ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div 
            // style={{margin: '20px'}}
            >
              {/* <Typography className={classes.instructions}> */}
                {this.getStepContent(activeStep)}
              {/* </Typography> */}
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (this.state.completed[this.state.activeStep] ? (
                    <Typography variant="caption" className={classes.completed}>
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleComplete}
                    >
                      {this.completedSteps() === this.totalSteps() - 1
                        ? "Finish"
                        : "Complete Step"}
                    </Button>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

StepperArrow.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(StepperArrow);
