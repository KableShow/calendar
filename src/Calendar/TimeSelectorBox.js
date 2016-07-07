import React from 'react';
import TimeUnitBox from './TimeUnitBox';

class TimeSelectorBox extends React.Component {
	constructor(props){
		super(props);
		this.setTime = props.setTime;
	}

	showT(){
		this.props.showT();
	}

	render(){
		let time = this.props.time;
		console.log('run');
		let h = parseInt(time.getHours()/10)>0?time.getHours():"0"+time.getHours();
		let m = parseInt(time.getMinutes()/10)>0?time.getMinutes():"0"+time.getMinutes();
		let s = parseInt(time.getSeconds()/10)>0?time.getSeconds():"0"+time.getSeconds();
		let isShow = this.props.isShow?"block":"none";

		return (
			<div className="timeSBox" style={{display:isShow}}>
				<div>时分秒选择<span onClick={this.showT.bind(this)}>×</span></div>
				<ul>
					<TimeUnitBox title={"小时"} time={h.toString()} setTime={this.props.setTime} />
					<TimeUnitBox title={"分钟"} time={m.toString()} setTime={this.props.setTime} />
					<TimeUnitBox title={"秒数"} time={s.toString()} setTime={this.props.setTime} />
				</ul>
			</div>
		);
	}
}

export default TimeSelectorBox;
