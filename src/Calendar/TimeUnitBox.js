import React from 'react';

class TimeUnitBox extends React.Component {
	constructor(props){
		super(props);
		this.setTime = props.setTime;
	}

	makeTimeArr(num){
		let arr = [];
		for(let i=0;i<=num;++i){
			if(i<10){
				arr.push("0"+i);
			}else{
				arr.push(i.toString());
			}
		}
		return arr;
	}

	componentDidUpdate(){
		let num = this.props.time;
		num = parseInt(num);
		this._scrollbar.scrollTop = (num-1)*28;
	}

	changeTime(type,e){
		let num = e.target.innerText,obj={};
		obj[type] = parseInt(num);
		this.setTime(obj);	
	}

	render(){
		let title = this.props.title;
		let time = this.props.time;
		let arr = [],type="";
		switch(title){
			case "小时":
				type = 'h';
				arr = this.makeTimeArr(23);
				break;
			case "分钟":
				type = 'mm';
				arr = this.makeTimeArr(59);
				break;
			case "秒数":
				type = 's';
				arr = this.makeTimeArr(59);
				break;
		}
		
		let html = arr.map(function(x,i){
			if(i != time){
				return (<p key={i}>{x}</p>);
			}else{
				return (<p className="focusDate" key={i}>{x}</p>);
			}
		});

		return (
			<li>
				<span>{title}</span>
				<div ref={(c)=>this._scrollbar=c}
					onClick={this.changeTime.bind(this,type)}
				>
					{html}
				</div>
			</li>
		);
	}
}

export default TimeUnitBox;
