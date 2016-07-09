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
		let isShowTime = this.props.needTime;
		month = parseInt((month+1)/10)>0?(month+1):"0"+(month+1);
		date = this.setTime(date);
		hours = this.setTime(hours);
		minutes = this.setTime(minutes);
		seconds = this.setTime(seconds);
		let showArr = [];
		if(isShowTime){
			let i=0;
			showArr.push((<span key={i}>{hours}:</span>));
			showArr.push((<span key={i+1}>{minutes}:</span>));
			showArr.push((<span key={i+2}>{seconds}</span>));
		}
		return (
			<div className="dateRBox">
				<span>{year}-</span>
				<span>{month}-</span>
				<span>{date}&nbsp;</span>
				{showArr}
			</div>
		);
	}
}

export default DateResult;
