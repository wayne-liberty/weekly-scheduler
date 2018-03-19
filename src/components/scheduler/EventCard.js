import React, {Component} from 'react';
import {connect} from 'react-redux';
import toggleDetailView from '../../redux/actions/toggleDetailCard';


@connect(
  null,
  dispatch => {
    return {
      toggleDetailView: args => dispatch(toggleDetailView(args))
    }
  }
)
class EventCard extends Component {

  constructor(props) {
    super(props);
    this.state = {style: {}};
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    document.body.className = 'modal-open';
    this.props.toggleDetailView({shown: true, event: {name: 'haha'}})
    // const rect = e.target.getBoundingClientRect();
    // console.log(window.screen.width, window.screen.height);
    // const screen = window.screen;
    // const scaleX = screen.width / rect.width;
    // const scaleY = screen.height / rect.height;
    //
    // const newStyle = {transform: `scale(${scaleX},${scaleY})`}
    // this.setState({style: newStyle});
  }


  render() {
    const that = this;
    return (
      <div className="card" style={that.state.style} onClick={this.onClick}>
        <span>test</span>
      </div>
    )
  }
}


export default EventCard;