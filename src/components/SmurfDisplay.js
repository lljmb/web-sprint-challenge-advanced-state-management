import React from 'react';
import Smurf from './Smurf'
// 1. Import in all needed components and library methods.
import { fetchSmurfs } from '../actions'
import { connect } from 'react-redux'

export class SmurfDisplay extends React.Component {
    // 3. Fetch all smurfs when the component first mounts.
    componentDidMount(){
        this.props.fetchSmurfs()
    }
    render() {
          return(
        <div>
            {/* 4. Render loading text or graphic if the application is currently loading. */}
            {this.props.isLoading ? (
                <h1>Loading...</h1>
            ) : ( 
                // 5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
                this.props.smurfs.map(smurf => {
                   return <Smurf key={smurf.id} smurf={smurf} />      
                })
            )
        }
        </div>
        )
}
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

// 2. Connect all needed redux state props and action functions to the component before exporting.
export default connect(mapStateToProps, {fetchSmurfs})(SmurfDisplay);

//Task List:




