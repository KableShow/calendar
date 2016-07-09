import React from 'react';

class DateArray extends React.Component {
	constructor(props){
		super(props);
		this.formatTime = props.func;
		this.setTime = props.setTime;
	}
	
	formatDate(year,month,date){
		let time = new Date(year,month,1);
		let before = new Date(time.getTime() - 24*60*60*1000);
		before = before.getDate(); //上个月最后一天的日期
		let day = time.getDay();  //这个月1号是星期几

		let beforemonth = month === 0?11:month-1;
		let aftermonth = month === 11?0:month+1;
		time = new Date(year,aftermonth,1);
		let allDate = new Date(time.getTime() - 24*60*60*1000);
		allDate = allDate.getDate(); //这个月有几天

		let arr = [];
		let key = 0;
		//根据这个月天数生成1～28/29/30/31的数组
		for(let i=1;i<=allDate;++i,++key){
			arr.push(i === date?(<li className="focusDate" key={key} data-m={month} data-d={i}>{i}</li>):(<li data-m={month} data-d={i} key={key}>{i}</li>));
		}
		//补全日历中前面几天的日期
		for(let i=0;i<day;++i,++key){
			arr.unshift((<li data-m={beforemonth} data-d={before-i} style={{color:'#00A1CB'}} key={key}>{before-i}</li>));
		}
		//补全日历中后面几天的日期
		for(let i=1,len=42-allDate-day;i<=len;++i,++key){
			arr.push((<li data-m={aftermonth} data-d={i} style={{color:'#00A1CB'}} key={key}>{i}</li>));
		}
		return arr;
	}

	setDate(e){
		let timeObj = {};
		timeObj.d = e.target.getAttribute('data-d');
		timeObj.m = e.target.getAttribute('data-m');
		this.setTime(timeObj);
	}

	render(){
		let nowTime = this.props.time;
		let {year,month,date} = this.formatTime(nowTime);
		let html = this.formatDate(year,month,date);
		return (
			<ul className="dateABox clearfix" onClick={this.setDate.bind(this)}>
				{html}
			</ul>
		);
	}
}

export default DateArray;
