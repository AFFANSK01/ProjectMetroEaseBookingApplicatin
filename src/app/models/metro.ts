export class Metro{
    metroId:number;
    metroName:string;
    capacity:number;
    stationRoute:[];

    constructor(metroId:number=0,metroName:string="",capacity:number=0,stationRoute:[]=[]){
        this.metroId=metroId;
        this.metroName=metroName;
        this.capacity=capacity;
        this.stationRoute=stationRoute;
        
    }
}