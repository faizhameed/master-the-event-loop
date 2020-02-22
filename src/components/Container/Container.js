import React from 'react';

import CallbackQueue from '../CallbackQueue/CallbackQueue';
import Callstack from '../Callstack/Callstack';
import WebApi from '../WebApi/WebApi';
import Console from '../Console/Console';
import Header from '../Header/Header';
import { Main } from '../../styles/layout';
import { Normalize } from '../../styles/normalize';
import Help from '../Help/Help';

import queue from '../CallbackQueue/queue';

const Container = () => {

	return (
		<>
			<Normalize />

			<Header />
			<Help />
			<Main>
				<Callstack />

				<WebApi />

				<Console />

				<CallbackQueue queue={queue.head} />
			</Main>
		</>
	);
};

export default Container;
