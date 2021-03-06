import taxiData from "./reducer-taxi";

export default function taxiLikeChangeAndActionReceived(state = null, action) {
    console.log("Dispatched like change action is received!");
    console.log(action);
    var alltaxi = []
    alltaxi = taxiData()
    if (action != null) {
        switch (action.type) {
            case 'TAXI_LIKE_CHANGE':
                console.log("Taxi like needs to be changed in store: " 
                                            + JSON.stringify(action.payload));
                //action.payload.likes = action.payload.likes + 1
                alltaxi.map( taxi => {
                    if(taxi.id === action.payload.id){
                        console.log("OLD Value of likes in " + taxi.name + " is " + taxi.likes  );
                        taxi.likes = action.payload.likes + 1
                        console.log("NEW Value of likes in " + taxi.name + " is " + taxi.likes  );
                    }
                })
                console.log(alltaxi);
                return alltaxi

            case 'TAXI_DISLIKE_CHANGE':
                    console.log("Taxi Dislike needs to be changed in store: " 
                                                + JSON.stringify(action.payload));
                    
                    alltaxi.map( taxi => {
                        if(taxi.id === action.payload.id){
                            console.log("OLD Value of Dislikes in " + taxi.name + " is " + taxi.dislikes  );
                            taxi.dislikes = action.payload.dislikes - 1
                            console.log("NEW Value of Dislikes in " + taxi.name + " is " + taxi.dislikes  );
                        }
                    })
                    console.log(alltaxi);
                    return alltaxi
    
            default:
                break;
        }
    }


    return alltaxi

}