import React from 'react';

class DateResult extends React.Component {
	constructor(props){
		super(props);
		this.formatTime = this.props.func;
	}

	setTime(time){
		let t = parseInt(time/10)>0?time:"0"+time;
		return t.toString();
	}

	render(){
		let time = this.props.time;
		let {year,month,date,hours,minutes,seconds} = this.formatTime(time);
		month = parseInt((month+1)/10)>0?(month+1):"0"+(month+1);
		date = this.setTime(date);
		hours = this.setTime(hours);
		minutes = this.setTime(minutes);
		seconds = this.setTime(seconds);
		return (
			<div className="dateRBox">
				<span>{year}</span>
				-
				<span>{month}</span>
				-
				<span>{date}</span>
				&nbsp;
				<span>{hours}</span>
				:
				<span>{minutes}</span>
				:
				<span>{seconds}</span>
			</div>
		);
	}
}

export default DateResult;
