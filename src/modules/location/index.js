import rslApi from '../../modules/config/config'
class Location{

    getAllLocation = callBack =>{
    rslApi({
        method:'GET',
        url:`/getLocation`,
    })
    .then(responce =>{
        if(responce.data){
            callBack({ status: 'success', data:responce.dat});
        }
    })
    .catch(error =>{
        console.log('Error occure while getting location',error.message);
        callBack({status:'error'});
    });
};
}
export default new Location();