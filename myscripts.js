plotgraph();
async function plotgraph(){
    var values = await getData();
    var y = values[0];
    var x = values[1];
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
            }]
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
    time = [];
    for (let i = 0; i < 6; i++){
        let list = getList(input_lenght[i]);
        console.log('Actual_List '+i+':'+list);
        var t0 = performance.now();
        insertion(list);
        var t1 = performance.now();
        time.push(t1-t0);
    }
    console.log(time)
    return [input_lenght,time];

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