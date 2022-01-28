var id ;
function authenticate() {
	return gapi.auth2
	.getAuthInstance()
	.signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
	.then(
		function() {
			console.log("Sign-in successful");
			document.getElementById("block").innerHTML = "";
			var block = `
			<div class="form-group">
			<input class="form-control" onchange="channelChanges()" type="text" id="channelId" placeholder="ChannelId"/>
			</div>
			<div class="form-group">
			<button id="subscribe" onclick="subscribe()" class="btn btn-danger btn-block">Subscribe</button>
			</div>
			<div id="result"></div>
			`;

			document.getElementById("block").innerHTML = block;
		},
		function(err) {
			console.error("Error signing in", err);
		}
		);
}
function channelChanges(){
	document.getElementById('result').innerHTML = ''
}
function loadClient() {
	gapi.client.setApiKey("AIzaSyBPRws7iktc5jml0JSFZHHv0swV5TxCiJ0");
	return gapi.client
	.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
	.then(
		function() {
			console.log("GAPI client loaded for API");
		},
		function(err) {
			console.error("Error loading GAPI client for API", err);
		}
		);
}
function subscribe() {
	var channelId = document.getElementById("channelId").value;
	return gapi.client.youtube.subscriptions
	.insert({
		part: "snippet",
		resource: {
			snippet: {
				resourceId: {
					kind: "youtube#channel",
					channelId: channelId
				}
			}
		}
	})
	.then(
		function(response) {
				        // Handle the results here (response.result has the parsed body).
				        console.log("Response", response);
				        id = response.result.id
				        let result = `
				        <a target="_blank" href="https://www.youtube.com/channel/${response.result.snippet.resourceId.channelId}"><img class="img-rounded" src="${response.result.snippet.thumbnails.default.url}"></a>
				        <h3>You are successfully subscribed to ${response.result.snippet.title}</h3>
				        <button onclick="unsubscribe()" class="btn btn-danger">Unsubscribe</button>`;
				        document.getElementById("result").innerHTML = result;
				    },
				    function(err) {
				    	console.error("Execute error", err);
				    }
				    );
}
function unsubscribe(){
	document.getElementById('result').innerHTML = ''
	var channelId = document.getElementById('channelId').value
	return gapi.client.youtube.subscriptions.delete({
		"id":id
	})
	.then(function(response) {
		                // Handle the results here (response.result has the parsed body).
		                console.log("Response", response);

		                let result = `
		                <h3>You are successfully unsubscribed to Channel</h3>
		                <button onclick="subscribe()" class="btn btn-danger">Subscribe</button>
		                `;
		                document.getElementById("result").innerHTML = result;

		            },
		            function(err) { console.error("Execute error", err); });
}
gapi.load("client:auth2", function() {
	gapi.auth2.init({
		client_id:
		"347135461826-scakutsttt2jlpqpb1cpu3jli1j695ug.apps.googleusercontent.com"
	});
});