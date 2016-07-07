import React from 'react';

class MonthSelectorBox extends React.Component {
	constructor(props){
		super(props);
		this.showM = props.showM;
	}

	makeMonth(m){
		let html = [];
		for(let i=0;i<12;++i){	
			if(m != i){
				html.push(<li key={i}>{i+1}月</li>);
			}else{
				html.push(<li className="focusDate" key={i}>{i+1}月</li>);
			}
		}
		return html;
	}

	changeM(e){
		let m = e.target.innerText;
		m = parseInt(m.slice(0,-1))-1;
		this.props.setTime({'m':m});
		this.showM(false);
	}

	render(){
		let time = this.props.time;
		let m = time.getMonth();
		let html = this.makeMonth(m);
		let isShow = this.props.isShow?"block":"none";

		return (
			<div className="monthSBox" style={{display:isShow}}>
				<ul onClick={this.changeM.bind(this)}>
					{html}
				</ul>
				<div onClick={this.showM.bind(this,false)}>关闭</div>
			</div>
		);
	}
}

export default MonthSelectorBox;
