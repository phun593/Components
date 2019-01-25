Vue.component('song',{

	template: `
			<li class="list-group-item list-group-item-success"><slot></slot></li>
	`

});


Vue.component('song-list', {
				template: `
					<div>
							
					<div class="form-group">
					<label for="exampleInputEmail1">Song Name</label>

					<input type="text" v-model="newItem.title" class="form-control" id="song"  placeholder="Song Name">

					</div>
					<div class="form-group">
					<label for="exampleInputPassword1">Artist</label>
					<input type="text" v-model="newItem.artest" class="form-control" id="song" placeholder="Artist">
					</div>

					<button @click="addItem" class="btn btn-primary">Add Song to the playlist </button>


					<h4 class ="mt-5">My Playlist</h4>
					<ul list-group v-for="song in songs">
					<song>Title {{ song.title }}</song>
					<song>Artist {{ song.artest }}</song>
					</ul>
				</div>
				`,


						data(){
							return {
								newItem:[
									{
										title:'',
										artest:''
									}

								],
					 		
					 			songs:[
						 			 {
						 			 	title:"ROCKSTAR",
						 			 	artest:"POST MALONE FT 21 SAVAGE"
						 			 },
						 			 {
						 			 	title:"	A MILLION DREAMS",
						 			 	artest:"ZIV ZAIFMAN/JACKMAN/WILLIAMS"
						 			 },
						 			  {
						 			 	title:"	I LIKE IT",
						 			 	artest:"CARDI B/BAD BUNNY/J BALVIN"
						 			 }


					 			
					 			]
								
						}
					},

  
 	methods:{
 			addItem(){

 				this.songs.push(this.newItem);
 				this.newItem ='';

 			}

 	},










});








var app4 = new Vue({
    el:'#demo-4',
        	

    	
});