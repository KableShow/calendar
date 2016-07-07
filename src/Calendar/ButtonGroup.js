import React from 'react';

class ButtonGroup extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="btnGroup">
				<div>今天</div>
				<div>取消</div>
				<div>确定</div>
			</div>
		);
	}
}

export default ButtonGroup;
