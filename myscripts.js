plotgraph();
function plotgraph(){
    var values = getData();
    var y = values[0];
    var x = values[1];
    var z = values[2];
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: y,
            datasets: [{
                fill:false,
                label: 'Insertion Sort',
                data: x,
                backgroundColor:'rgba(255, 99, 132, 0.2)',
                borderColor:'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                fill:false,
                label: 'Merge Sort',
                data: z,
                backgroundColor:'rgba(255, 206, 86, 1)',
                borderColor:'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }
        ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function getData(){
    input_lenght = [10,100,1000,2500,5000,7500];
    time1 = [];
    time2 = [];
    for (let i = 0; i < 6; i++){
        let list = getList(input_lenght[i]);
        console.log('Actual_List '+i+':'+list);
        var t0 = performance.now();
        insertion(list);
        var t1 = performance.now();
        time1.push(t1-t0);
        var t2 = performance.now();
        mergeSort(list);
        var t3 = performance.now();
        time2.push(t3-t2);
    }
    console.log(time1)
    return [input_lenght,time1,time2];

}

function getList(n){
    arr = [];
    temp = [];
    for (let i=0; i<n; i++){
        arr.push(getRandomInt(1000));
    }
    temp = arr ;
    return temp;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function insertion(arr){
    for(let j=0; j<arr.length; j++ ){
        key = arr[j];
        i = j-1;
        while (i>-1 && arr[i]>key){
            arr[i+1] = arr[i];
            i = i-1;
        }
        arr[i+1] = key
    }
    console.log(arr);
    return ;
}

function mergeSort(arr){
    var len = arr.length;
    if(len <2)
       return arr;
    var mid = Math.floor(len/2),
        left = arr.slice(0,mid),
        right =arr.slice(mid);
    //send left and right to the mergeSort to broke it down into pieces
    //then merge those
    return merge(mergeSort(left),mergeSort(right));
 }

 function merge(left, right){
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while(l < lLen && r < rLen){
       if(left[l] < right[r]){
         result.push(left[l++]);
       }
       else{
         result.push(right[r++]);
      }
    }  
    //remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
  }