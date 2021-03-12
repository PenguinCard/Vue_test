window.onload = ()=>{
    let app = new Vue({
        el : '#app',
        data : {
            msg : 'Hello Vue~!'
        }
    })

    let app2 = new Vue({
        el : '#app-2',
        data : {
            msg : 'Page? '+new Date() +' load'
        }
    })

    let app3 = new Vue({
        el : '#app-3',
        data : {
            seen : true
        }
    })

    let app4 = new Vue({
        el : '#app-4',
        data : {
            todos : [
                { text : 'test1'},
                { text : 'test2'},
                { text : 'test3'}
            ]
        }
    })

    new Vue({
        el : '#app-5',
        data : {
            msg : 'Hello!Vue!'
        }, 
        methods : {
            reverseMsg : function(){
                this.msg = this.msg.split('').reverse().join('')
            }
        }
    })

    new Vue({
        el : '#app-6',
        data : {
            msg : 'Hello Vue~!'
        }
    })
}
