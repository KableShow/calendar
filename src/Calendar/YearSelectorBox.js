import React from 'react'; 

class YearSelectorBox extends React.Component {
	constructor(props){
		super(props);
		let y = this.props.time;
		y = y.getFullYear();
		this.state = {
			y: y
		}
		this.showY = props.showY;
	}

	makeYear(year,time){
		let arr = [year];
		let y = time.getFullYear();
		for(let i = 1; i<=7; ++i){
			arr.unshift(year-i);
			arr.push(year+i);
		}
		let html;

		if(y != year){
			html = arr.map(function(x,i){
				return <li key={i}>{x}年</li>;
			});
		}else{
			html = arr.map(function(x,i){
				return i != 7?(<li key={i}>{x}年</li>):(<li className="focusDate" key={i}>{x}年</li>);
			});
		}
		return html;
	}

	changeY(e){
		let y = e.target.innerText;
		y = y.slice(0,-1);
		this.props.setTime({'y':y});
		this.setState({y:parseInt(y)});
		this.showY(false);
	}
	setYear(choose){
		let y = this.state.y;
		let time = this.props.time;
		time = time.getFullYear();
		switch(choose){
			case 1:
				this.setState({y:y+15});
				break;
			case 0:
				this.setState({y:time});
				(this.showY.bind(this))();
				break;
			case -1:
				this.setState({y:y-15});
		}
	}

	render(){
		let html = this.makeYear(this.state.y,this.props.time);
		let isShow = this.props.isShow?'block':'none'; 
		
		return (
			<div className="yearSBox" style={{display:isShow}}>
				<ul onClick={this.changeY.bind(this)}>
					{html}
				</ul>
				<div onClick={this.setYear.bind(this,-1)}>← </div>
				<div onClick={this.setYear.bind(this,1)}>→ </div>
				<div onClick={this.setYear.bind(this,0)}>关闭</div>
			</div>
		);
	}
}

export default YearSelectorBox;
