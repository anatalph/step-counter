import React from 'react'
import { connect } from 'react-redux'
import { add_step, reset_step } from './Actions'

const StepCounter = ({ step, add_step, reset_step }) => (
    <div>
        <div>You've walked {step} {step <= 1 ? 'step' : 'steps'} today!</div>
        <button onClick={add_step}>Add a Step</button>
        <button onClick={reset_step}>Reset Steps</button>
    </div>
)

const mapStateToProps = (state) => ({ step: state.step })

const mapDispatchToProps = {
    add_step,
    reset_step
}

export default connect(mapStateToProps, mapDispatchToProps)(StepCounter)