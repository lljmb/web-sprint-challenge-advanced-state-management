import React from 'react';

// 1. Add in all necessary import components and library methods.
import { connect } from 'react-redux';
import { addSmurf } from '../actions'

class AddForm extends React.Component {

    // 3. Add state holding name, position, nickname and description to component.
    state = {
        name: '',
        nickname: '',
        position: '',
        description: ''
    }

    // 5. Build eventhandler and listener needed to change the state.
    handleChanges = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleClick = e => {
        e.preventDefault();
        this.props.addSmurf(this.state);
    }

    render() {
        return(
        <section>
            <h2>Add Smurf</h2>
            {/* 4. Build form DOM to include inputs for name, position and description of the component. 
               - an array of smurfs
               - a boolean indicating if the app is loading
               - error text
               - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME. */}
            <form onSubmit={this.handleClick}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={this.handleChanges} value={this.name} name="name" id="name" />
                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input onChange={this.handleChanges} value={this.nickname} name="nickname" id="nickname" />
                    <label htmlFor="position">Position:</label><br/>
                    <input onChange={this.handleChanges} value={this.position} name="position" id="position" />
                    <label htmlFor="description">Description:</label><br/>
                    <input onChange={this.handleChanges} value={this.description} name="description" id="description" />
                </div>

                {this.props.error !== '' ? <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.props.error} </div> : ''}
                <button onClick={this.handleClick}>Submit Smurf</button>
            </form>
        </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

// 2. Connect all needed redux state props and action functions to the component before exporting.
export default connect(mapStateToProps, {addSmurf})(AddForm);

//Task List:





//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.