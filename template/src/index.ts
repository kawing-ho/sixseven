import { R2Explorer } from "r2-explorer";

// Read all available configurations here: https://r2explorer.com/getting-started/configuration/
export default R2Explorer({
	readonly: false,
	 basicAuth: [{
	 	username: "kawing",
	 	password: "JustTakeYourTimeThanks711"
	 },{
    username: "user1",
	 	password: "FantasticBeastsAndWhereToFindThem?"
   },{
    username: "user2",
	 	password: "YouBeenHitByYouBeenStruckByASmoothCriminal!"
   },{
    username: "tempuser",
    password: "YummyPotatoSalad!!!",
   }
  ]
});
