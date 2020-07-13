import React from 'react';
import ReactPlayer from 'react-player';

// Stateless functional component
const ResponsivePlayer = () => (
	<div className='player-wrapper'>
		<ReactPlayer
			className='react-player'
			width='100%'
			height='100%'
			controls
			url='https://www.twitch.tv/videos/674638399'
			onReady={() => console.log('onReady callback')}
			onStart={() => console.log('onStart callback')}
			onPause={() => console.log('onPause callback')}
			onEnded={() => console.log('onEnded callback')}
			onError={() => console.log('onError callback')}
		/>
	</div>
);

export default ResponsivePlayer;
