import React from 'react';
import DateResult from './DateResult';
import DateYear from './DateYear';
import DateMonth from './DateMonth';
import DateDay from './DateDay';
import DateArray from './DateArray';
import DateTimeBox from './DateTimeBox';
import ButtonGroup from './ButtonGroup';
import YearSelectorBox from './YearSelectorBox';
import MonthSelectorBox from './MonthSelectorBox';
import TimeSelectorBox from './TimeSelectorBox';

require('./calendar.scss');

class DateSelector extends React.Component {
	constructor(props){
		super(props);
		let nowTime = new Date();
		this.state={
			time: nowTime,
			showY: false,
			showM: false,
			showT: false
		};
	}

	formatTime(nowTime){
		return {
			year: nowTime.getFullYear(),
			month: nowTime.getMonth(),
			day: nowTime.getDay(),
			date: nowTime.getDate(),
			hours: nowTime.getHours(),
			minutes: nowTime.getMinutes(),
			seconds: nowTime.getSeconds()
		}
	}

	showY(val=null){
		if(val === null){
			this.setState({showY:!this.state.showY});
		}else{
			this.setState({showY:val});
		}
	}

	showM(val=null){
		if(val === null){
			this.setState({showM:!this.state.showM});
		}else{
			this.setState({showM:val});
		}
	}

	showT(){
		this.setState({showT:!this.state.showT});
	}

	setTime(timeObj){
		let t = this.state.time;
		for(let type in timeObj){
			switch(type){
				case 'y':
					t.setFullYear(timeObj[type]);
					break;
				case 'm':
					t.setMonth(timeObj[type]);
					break;
				case 'd':
					t.setDate(timeObj[type]);
					break;
				case 'h':
					t.setHours(timeObj[type]);
					break;
				case 'mm':
					t.setMinutes(timeObj[type]);
					break;
				case 's':
					t.setSeconds(timeObj[type]);
			}
		}
		this.setState({time:t});
	}

	render(){

		return (
			<div className="dateSBox clearfix">
				<DateResult
					time={this.state.time}
					func={this.formatTime}
				/>
				<DateYear
					time={this.state.time}
					showY={this.showY.bind(this)}
					showM={this.showM.bind(this)}
					setTime={this.setTime.bind(this)}
				/>
				<DateMonth
					time={this.state.time}
					showY={this.showY.bind(this)}
					showM={this.showM.bind(this)}
					setTime={this.setTime.bind(this)}
				/>
				<DateDay />
				<DateArray 
					time={this.state.time}
					func={this.formatTime}
					setTime={this.setTime.bind(this)}
				/>
				<DateTimeBox 
					time={this.state.time}
					showT={this.showT.bind(this)}	
				/>
				<ButtonGroup 
					setTime={this.setTime.bind(this)} 
					time={this.state.time}	
				/>
				<YearSelectorBox 
					time={this.state.time} 
					isShow={this.state.showY}
					showY={this.showY.bind(this)}
					setTime={this.setTime.bind(this)}
				/>
				<MonthSelectorBox
					time={this.state.time}
					isShow={this.state.showM}
					showM={this.showM.bind(this)}
					setTime={this.setTime.bind(this)}
				/>
				<TimeSelectorBox
					time={this.state.time}
					isShow={this.state.showT}
					showT={this.showT.bind(this)}
					setTime={this.setTime.bind(this)}
				/>
			</div>
		);
	}
}

export default DateSelector;
