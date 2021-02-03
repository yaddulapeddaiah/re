var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function () {

    var data = JSON.parse(this.response)
    {
        let  sum = 0;
         for(var i =0;i<data.length;i++)
         {
             sum=sum+data[i].population;
             console.log("country "+data[i].name+"  "+data[i].population )

         }
            

         console.log("Total population of all countries "+sum);
    }
}