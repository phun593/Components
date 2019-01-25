Vue.component('song',{

	template: `
			<li class=""><slot></slot></li>
	`

});


Vue.component('song-list', {
				template: `
					<div>
							
					<div class="form-group">
					<label for="exampleInputEmail1">Song Name</label>

					<input type="text" class="form-control" id="song"  placeholder="Song Name">

					</div>
					<div class="form-group">
					<label for="exampleInputPassword1">Artist</label>
					<input type="text" class="form-control" id="song" placeholder="Artist">
					</div>

					<button type="submit" class="btn btn-primary">Add Song to the playlist </button>


					<h4 class ="mt-5">My Playlist</h4>
					<ul v-for="song in songs">
					<song>{{ song.title }}</song>
					<song>{{ song.artest }}</song>
					</ul>
				</div>
				`,


						data(){
							return {
								newItem:'',
					 		
					 			songs:[
						 			 {
						 			 	title:"apple",
						 			 	artest:"orange"
						 			 },
						 			 {
						 			 	title:"apple",
						 			 	artest:"orange"
						 			 },
						 			  {
						 			 	title:"apple",
						 			 	artest:"orange"
						 			 }


					 			
					 			]
								
							
						}
					}





});








var app4 = new Vue({
    el:'#demo-4',
        	

    	
});