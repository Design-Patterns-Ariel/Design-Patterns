class HotelInfo{
    private constructor(){ }

    private static instance:HotelInfo=new HotelInfo();

    public static getInstance():HotelInfo{
        return HotelInfo.instance;
    }

    public hotelList:string[]=[];
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
console.log("Bob selected XY hotel");
let bobObj:HotelInfo=HotelInfo.getInstance();
bobObj.hotelList.push("XY");
console.log(bobObj.hotelList);  //--> [ 'XY' ]

console.log("Alice selected WZ hotel");
let aliceObj:HotelInfo=HotelInfo.getInstance();
aliceObj.hotelList.push("WZ");
console.log(aliceObj.hotelList); //--> [ 'XY', 'WZ' ]
