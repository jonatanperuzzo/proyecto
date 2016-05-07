var channelName = 'TechGuyWeb';

$(document).ready(function(){
	$.get(
		"GET https://www.googleapis.com/youtube/v3/channels",{
			part: 'contentDetails',
			forUsername: channelName
		}
	);
});