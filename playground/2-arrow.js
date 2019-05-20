this.test = 'aaaaa'
console.log(this)
const event = {
    name : 'test',
    test : ()=>{
        console.log(this)
    }
}

const event2 = {
    name : 'test',
    test : function(){
        console.log(this.name)
    }
}

const event3 = {
    name : 'test',
    test(){
        console.log(this)
    }
}

const event4 = {
    name : 'test',
    namelist : ['a','i'],
    test(){
        console.log(this)
        // this.namelist.forEach(test =>{
        //     console.log(test)
        //     console.log(this)
        // })

        // this.namelist.forEach(function(test){
        //     console.log(test)
        //     console.log(this)
        // })
    }
}

class Event5 {
    constructor(){
        this.name = 'test'
    }
    test(){
        console.log(this.name)
    }
}

event.test()
event2.test()
// event3.test()
// event4.test()
// const event5 = new Event5
// event5.test()

// console.log(event)
// console.log(event2)