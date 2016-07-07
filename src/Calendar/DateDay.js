import React from 'react';

class DateDay extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<ol className="dateDBox clearfix">
				<li>日</li>
				<li>一</li>
				<li>二</li>
				<li>三</li>
				<li>四</li>
				<li>五</li>
				<li>六</li>
			</ol>
		);
	}
}

export default DateDay;
