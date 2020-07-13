import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';

function App () {
	return (
		<div className='App'>
			<ReactPlayer
				width='480px'
				height='240px'
				controls
				url='https://youtu.be/TQUy8ENesGY'
				onReady={() => console.log('onReady callback')}
				onStart={() => console.log('onStart callback')}
				onPause={() => console.log('onPause callback')}
				onEnded={() => console.log('onEnded callback')}
				onError={() => console.log('onError callback')}
			/>
		</div>
	);
}

export default App;
