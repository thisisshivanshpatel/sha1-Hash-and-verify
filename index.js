const crypto=require("crypto");

/**
 * @param {String} data
 * @returns {String} return hash of passed data
 */
const sha1=(data=null)=>{
   if (data) {
    const hash = crypto.createHash('sha1');
    //passing the data to be hashed
    const hashingData = hash.update(data, 'utf-8');
    //Creating the hash in the required format
    const gen_hash= hashingData.digest('hex');
    return gen_hash;
   } else {
       return 'pass an argument';
   }
}

/**
 * @param {String} data
 * @param {String} hashedData
 * @returns {boolean} return boolean value after compairing data and hashed data
 */
const verifyHash=(data=null,hashedData=null)=>{
  if (data && hashedData) {
      const userHashedData=sha1(data);
      const verified= userHashedData===hashedData;
      return verified; 
  } else {
      return 'please pass data and hashed data';
  }
}

module.exports={sha1,verifyHash};