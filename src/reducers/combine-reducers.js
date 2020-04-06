import { combineReducers } from "redux";
import taxiService from "./reducer-taxiservice";
import taxiNameClickedAndActionReceived from "./reducer-taxiname_clicked";
import taxiNameDoubleClickedAndActionReceived from "./reducer-taxiname_doubleclicked";
import taxiLikeChangeAndActionReceived from "./reducer-taxilikechange";

import getRemoteUsers from "./reducer-remoteuser";
import taxiDislikeChangeAndActionReceived from "./reducer-taxidislikechange";

const allTaxiReducers = combineReducers({
    
    alltaxinames: taxiLikeChangeAndActionReceived,
    // alltaxinames:taxiDislikeChangeAndActionReceived,
    alltaxiservices: taxiService,
    taxiClicked:taxiNameClickedAndActionReceived,
    taxiDoubleClicked: taxiNameDoubleClickedAndActionReceived,
    taxiLikeChange: taxiLikeChangeAndActionReceived,
    // taxiDislikeChange:taxiDislikeChangeAndActionReceived,
    remoteUsers: getRemoteUsers
})

export default allTaxiReducers