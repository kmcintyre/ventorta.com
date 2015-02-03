define(['playbook'], function(playbook) {	
	playbook.site_set({key:'init',value:['AWS Incubator Lab', 'Innovators', 'Accelerators', 'Origanators']})
	playbook.site_set({key:'onclose',value:['Blue-screen', 'of Death', 'Deals Off']})
	playbook.site_set({key:'onopen',value:['Disrupt and Stick']})
	playbook.site_set({key:'hashes',value:['venture']})
	
	playbook.site_set({key:'color',value:{ 'onmessage' : '#0052A5', 'onopen' : '#f7a70c', 'onclose' : '#960018'}})
	//playbook.site_set({key:'connection',value:['ws://localhost:8080']})
	return {		
		loaded:true
	}	
})
