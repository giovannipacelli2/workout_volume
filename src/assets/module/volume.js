export let volume = {
    repsPercent : {
        "1" : 100,
        "2" : 95,
        "3" : 87.5,
        "4" : 85,
        "5" : 80,
        "6" : 77.5,
        "7" : 75,
        "8" : 75,
        "9" : 72.5,
        "10" : 70,
        "11" : 70,
        "12" : 65,
        "13" : 65,
        "14" : 65,
        "15" : 60,
        "16" : 60,
        "17" : 55,
        "18" : 55,
        "19" : 55,
        "20" : 50,
        ">20" : 40,
    },
    
    getVolume : function( reps ) {

        if (!this.repsPercent[reps]) {
            return false;
        }

        return ( this.repsPercent[reps] / 100 );
    }
}