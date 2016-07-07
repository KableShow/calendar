import React from 'react';

class DateTimeBox extends React.Component {
	constructor(props){
		super(props);
	}

	showT(){
		this.props.showT();
	}

	render(){
		let time = this.props.time;
		let [h,m,s] = [time.getHours(),time.getMinutes(),time.getSeconds()];
		return (
			<div className="dateTBox">
				<div onClick={this.showT.bind(this)}>
					<span>{parseInt(h/10)>0?h:"0"+h}</span>
					&nbsp;:&nbsp;
					<span>{parseInt(m/10)>0?m:"0"+m}</span>
					&nbsp;:&nbsp;
					<span>{parseInt(s/10)>0?s:"0"+s}</span>
				</div>
			</div>
		);
	}
}

export default DateTimeBox;
