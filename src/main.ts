const race = (v1: number, v2: number, g: number): number[] | null => {
    if (v1 > v2) {
        return null
    }
    let minutes: number = 0;
    let seconds: number = 0;
    let time: number[] = [];

    const getTime = (): number[] => {
        transformTime(g / (v2 - v1));
        return time;
    }
    const transformTime = (hoursObtained: number): number[] => {
        minutes = (hoursObtained % 1) * 60
        seconds = (minutes % 1) * 60 
        if(Math.round(seconds)==60){
            minutes+=1
            seconds=0
        }
        time.push(Math.floor(hoursObtained), Math.floor(minutes), Math.round(seconds))
        return time;
    }
    return getTime();
}


// console.log(race(720, 850, 70))// [0, 32, 18]);
// console.log(race(80, 91, 37))// [3, 21, 49]);
// console.log(race(80, 100, 40))// [2, 0, 0]);
// console.log(race(720, 850, 37))// [0, 17, 5]);
// console.log(race(820, 850, 550))//  [ 18, 20, 00 ]);
// console.log(race(622, 847, 109))//  [ +0, 29, 4 ]);