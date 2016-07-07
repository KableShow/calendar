import React from 'react';

class DateMonth extends React.Component {
	constructor(props){
		super(props);
		this.showY = props.showY;
	}

	showM(){
		this.showY(false);
		this.props.showM();
	}

	changeM(num){
		let time = this.props.time;
		let m = time.getMonth() + num;
		let y = time.getFullYear();
		let timeObj = {};
		switch(m){
			case -1:
				timeObj.y = y-1;
				timeObj.m = 11;
				break;
			case 12:
				timeObj.y = y+1;
				timeObj.m = 0;
				break;
			default:
				timeObj.m = m;
		}
		this.props.setTime(timeObj);
	}

	render(){
		let time = this.props.time;
		let month = time.getMonth()+1;
		return (
			<div className="dateMBox">
				<i className="arrow leftArrow" onClick={this.changeM.bind(this,-1)}></i>
				<span onClick={this.showM.bind(this)}>{parseInt(month/10)>0?month:"0"+month}月</span>
				<i className="arrow rightArrow" onClick={this.changeM.bind(this,1)}></i>
			</div>
		);
	}
}

export default DateMonth;
