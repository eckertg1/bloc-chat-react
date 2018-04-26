import React, { Component } from 'react';

class RoomList extends Component{
  constructor(props){
    super(props);

    this.state = {
      rooms: [],
      newRoomName: ''
    };

    this.createRoom = this.createRoom.bind(this);
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount(){
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      console.log(snapshot);
      this.setState({ rooms: this.state.rooms.concat( room ) });
    });
  }

  createRoom(e){
    e.preventDefault();
    const newRoom = e.target.elements.newRoomName.value;
    this.roomsRef.push({
      name: newRoom
    })
  }

  render(){
    return (
      <section className="room-list">
        <ul className="sidebar-list">
          {
            this.state.rooms.map( (room, index) =>
              <li className="room" key={index}> {room.name} </li>
            )
          }
        </ul>
        <form className="create-room" onSubmit={this.createRoom}>
          <input type="text" name="newRoomName"/>
          <input type="submit" value="Add Room" />
        </form>
      </section>
    );
  }
}

export default RoomList;
