import React from 'react';

class ButtonGroup extends React.Component {
	constructor(props){
		super(props);
	}

	changeTime(){
		let time = new Date();
		this.props.setTime({time:time});
	}

	render(){
		return (
			<div className="btnGroup">
				<div onClick={this.changeTime}>今天</div>
				<div>取消</div>
				<div>确定</div>
			</div>
		);
	}
}

export default ButtonGroup;
