const showClassDemo=(week)=>{
    const showDemo = document.querySelector('.banner-section');
    switch(week){
        case 'w1':
            showDemo.innerHTML=`<iframe src='./demo/w01/index.html'width="100% height="max"`
    }
}