function binarySearch(arr, x){
    let l=0, h=arr.length-1;

    while(l<=h){
        let m=(l+h)/2

        if(arr[m]==x){
            return m
        }else if(arr[m]>x){
            h=m-1
        }else{
            l=m+1
        }
    }
    return -1
}

module.exports= binarySearch