import React from 'react';

class ButtonGroup extends React.Component {
	constructor(props){
		super(props);
	}

	changeTime(){
		let time = new Date();
		let t = this.props.formatTime(time);
		let obj = {};
		[obj.y,obj.m,obj.d] = [t.year,t.month,t.date];
		[obj.h,obj.mm,obj.s] = [t.hours,t.minutes,t.seconds];
		this.props.setTime(obj);
	}

	render(){
		return (
			<div className="btnGroup">
				<div onClick={this.changeTime.bind(this)}>现在</div>
				<div>关闭</div>
				<div>确定</div>
			</div>
		);
	}
}

export default ButtonGroup;
