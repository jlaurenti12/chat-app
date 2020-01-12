import React, { Component } from 'react';


class RoomList extends Component {
   constructor(props) {
     super(props);
     
     this.state = {
       rooms: [],
       newRoomName: ''
     };

     this.roomsRef = this.props.firebase.database().ref('rooms');

   }

    componentDidMount() {
      this.roomsRef.on('child_added', snapshot => {
         const room = snapshot.val();
         room.key = snapshot.key;
         this.setState({ rooms: this.state.rooms.concat( room ) })
         if (this.state.rooms.length === 1) { this.props.setActiveRoom(room) }
      });
    }

    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.newRoomName) { return }
      this.roomsRef.push({ 
        name: this.state.newRoomName 
      });
      this.setState({newRoomName: '' });
    }


    handleChange(e) {
      this.setState({ newRoomName: e.target.value })
    }


    render() {
       return (
          <div>
            <form onSubmit={ (e) => this.handleSubmit(e) }>
              <input type="text" value={ this.state.newRoomName } onChange={ (e) => this.handleChange(e) } />
              <input type="submit" />
            </form>  
            <ul>
              { this.state.rooms.map( (room, index) => 
                 <li key={ index } onClick={ () => this.props.setActiveRoom(room)}>{ room.name }
                 </li>
              )}
            </ul> 
          </div> 
       );
     }



}

export default RoomList;