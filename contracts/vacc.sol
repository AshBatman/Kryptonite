//SPDX-License-Identifier UNLICENSED;
pragma solidity >=0.5.0 <0.9.0;
pragma experimental ABIEncoderV2;


contract Vaccine_available {
    
    uint8 constant SUCCESS = 1;
    uint8 constant FAILED = 0;
    
    uint noofnodes = 6;
    uint constant comingdays = 4;
    uint16[] avail = [ 200, 400, 600, 500,
                       250, 500, 680, 600,
                       100, 470, 200, 700,
                       330, 190, 290, 100,
                       250, 210, 320, 110,
                       208, 312, 440, 540 ];
    string[] addr = [ "Max Hospital","APJ Hospital","RamaKrishna Hospital", "Shree Vaccine Center", "Das girls High school", "Prashant General Hospital" ];
    uint32[] pin = [110092,110093,110094,110092,110094,110092];
    
    struct hos_data{
        string hos_name;
        uint16[comingdays] hos_vaccine;
        //uint32 hos_pin;
    }
    
     
    function return_avail_vacc(uint32 location) view public returns(hos_data[10] memory){
        uint i; 
        uint8 j = 0;
        uint k = 0;
        //uint16[10] memory count;    //
        //string[10] memory addres;   //Simple call
        
        hos_data[10] memory ret_data; //Array of structure
        
        for(i=0;i<noofnodes && i>=0;i++){
            if(pin[i]==location){
                ret_data[j].hos_name = string(abi.encodePacked(uint2str(j),"-",addr[i]));
                k=0;
                while(k < comingdays){
                    ret_data[j].hos_vaccine[k] = avail[(comingdays*i)+k];
                    k++;
                }
                //count[j] = avail[i];    //
                //addres[j] = addr[j];    //Simple call
                j++;
            }
        }
        return (ret_data);
    }
    
    function generate_id(string memory name) internal pure returns (bytes32 result){
        //return keccak256(block.timestamp);
        return keccak256(bytes(name));
    }
    
    //Function returns id, Address of center and slot
    function confirm_booking(uint32 location, uint hos_code, string memory curr_date, string memory selected_date) 
    internal returns(uint8, string memory){
          uint i; 
          uint j = 0;
          
          uint vaccineonday = datetoindex(curr_date,selected_date);
          
          for(i=0;i<noofnodes && i>=0;i++){
            if(pin[i]==location){
                if(j == hos_code){
                    uint x = (i*comingdays)+vaccineonday;
                    if(avail[x] != 0){
                        avail[x] = avail[x] - 1;
                        return (SUCCESS, addr[i]);
                    }
                }
                j++;
            }
         }
         return (FAILED,"No Slot available for this location");
    }
    
    function booking(uint32 location, uint hos_code, string memory curr_date, string memory selected_date, string memory name, uint8 slot) 
    public returns(bytes32, string memory, uint8, uint32){
        
        bytes32 id = 0;
        
        (uint8 result, string memory addresofcenter) = confirm_booking(location, hos_code, curr_date, selected_date);
        
        if(result == SUCCESS){
            id = generate_id(name);
        }
        
        return (id,addresofcenter,slot,location);
    }
    
    function uint2str(uint _i) internal pure returns (string memory) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        
        bytes memory bstr = new bytes(len);
        uint k = len;
        while (k > 0) {
            k--;
            bstr[k] = bytes1(uint8(48 + _i % 10));
            _i /= 10;
        }
        return string(bstr);
    }
    
    function datetoindex(string memory curr_date, string memory selected_date) internal pure returns(uint){
        uint today = stringToUint(curr_date);
        uint nextday = stringToUint(selected_date);
        
        uint coming_day = uint(nextday/100); 
        uint to_day = uint(today/100);
        uint c = 0;
        
        if(coming_day >= to_day){
            c = coming_day - to_day;
        }
        else{
            c = monthtonoofdays(today%100) - (to_day - coming_day);
        }
        
        return c;
    }
    
    function monthtonoofdays(uint month) internal pure returns(uint8){
        uint8[12] memory daysofmonth = [31,28,31,30,31,30,31,31,30,31,30,31];
        
        return (daysofmonth[month-1]);
        
    }
    
    function stringToUint(string memory s) internal pure returns(uint) {
        bytes memory b = bytes(s);
        uint i;
        uint result = 0;
        for (i = 0; i < b.length; i++) {
            uint c = uint8(b[i]);
            if (c >= 48 && c <= 57) {
                result = result * 10 + (c - 48);
            }
        }
        return result;
    }
    
}