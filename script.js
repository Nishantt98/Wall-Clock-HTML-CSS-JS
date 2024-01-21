setInterval(()=>{
    console.log('hello coder')
    Day = new Date();
    htime = Day.getHours();
    mtime = Day.getMinutes();
    stime = Day.getSeconds();
    hrotate = 30*htime + mtime/2
    mrotate = 6*mtime;
    srotate = 6*stime;

    hours.style.transform = `rotate(${hrotate}deg)`;
    minutes.style.transform = `rotate(${mrotate}deg)`;
    seconds.style.transform = `rotate(${srotate}deg)`;
},1000)   