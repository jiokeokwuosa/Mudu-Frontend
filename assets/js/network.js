import NetInfo from '@react-native-community/netinfo';

// NetInfo.fetch is not suitable for our use case.
// we need to add event listeners that will listen for change events
//  and remove subscription to this listeners
// e.g Netinfo.addeventlstener(state=>{})
// as such.. it would be separate defined in a separate custom hook component

const NetworkUtils = async () => {
  const response = await NetInfo.fetch();

  // should return the full network state..
  // usefull in cases when we need to notify a use to download on wifi or data
  return response.isConnected;
};

export default NetworkUtils;