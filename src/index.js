import React from 'react';
import {render} from 'react-dom';
import DateSelector from './Calendar/DateSelector';

render(<DateSelector
			needTime={true}
			domNode={'showBox'}
		/>,document.getElementById('content'));
