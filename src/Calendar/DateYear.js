import React from 'react';

class DateYear extends React.Component {
	constructor(props){
		super(props);
		this.showM = props.showM;
	}

	showY(){
		this.showM(false);
		this.props.showY();
	}

	changeY(num){
		let time = this.props.time;
		let y = time.getFullYear() + num;
		this.props.setTime({'y':y});
	}

	render(){
		let time = this.props.time;
		let year = time.getFullYear();
		return (
			<div className="dateYBox">
				<i className="arrow leftArrow" onClick={this.changeY.bind(this,-1)}></i>
				<span onClick={this.showY.bind(this)}>{year}年</span>
				<i className="arrow rightArrow" onClick={this.changeY.bind(this,1)}></i>
			</div>
		);
	}
}

export default DateYear;
