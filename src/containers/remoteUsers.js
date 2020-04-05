import React from 'react';
import { connect } from 'react-redux';


class RemoteUsers extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentWillMount(){
        this.getRemoteUsers()
    }

    getRemoteUsers = function(){
        this.props.rs.then(res =>{
            console.log(res);
            this.setState({
                users: res
            })
        }, err =>{
            console.log(err);
        })
    }
    
    displayRemoteUsers = function(){
        return this.state.users.map(u => {
            return (
                <li key={u.id}>{u.name}</li>
            )
        })
    }

    render() { 

        return ( 

            <div>
                <h4>Display Remote Users: </h4>    
                {this.displayRemoteUsers()}
            </div>
            
         );
    }
}


function convertTaxiStoreToProps(taxi_store_received){
    console.log("Taxi Store Received in remoteusers container");
    console.log(taxi_store_received);
    return {
        rs: taxi_store_received.remoteUsers
    }
}
 
export default connect(convertTaxiStoreToProps)(RemoteUsers);