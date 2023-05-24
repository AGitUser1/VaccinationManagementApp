export class Citizen {
    constructor(
        public id : Number,
        public name : String,
        public email : String,
        public password : String,
        public phone : String,
        public address : String,
        // public firstDose : Date | String,
        // public secondDose : Date | String,
        // public boosterDose : Date | String,
        public firstDose : String,
        public secondDose :  String,
        public boosterDose :  String,
        public vaccinationStatus : String
        
        ){
    }
}
