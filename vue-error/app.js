// const error = (function() {
//     var store = {};

//     return {
//         get: function(key) {
//             console.log(key);
//             return store[key];
//         },
//         set: function(key, val) {
//             store[key] = val;
//         },
//         init: function(data) {
//             store = data
//             return this;
//         },
//         all: function() {
//             return store;
//         }
//     }
// }());

new Vue({
    el: '#app',
    data: {
        model: {
            username: '',
            title: ''
        },
        errors: {},
        msg: '',
    },
    methods: {
        onSubmit: function() {
            var self = this;
            axios.post('http://localhost:8000/error.php', {model: this.model})
                .then(function (response) {
                if (response.data.code === 0) {
                    self.msg = response.data.msg;
                } else {
                    self.errors = response.data.msg;
                }})
                .catch(function (error) {
                    console.log(error);
                });
        },
        get: function(key) {
            if (this.errors.hasOwnProperty(key)) {
                return this.errors[key];
            }
                
        },
        set: function(key, val) {
            this.errors[key] = val;
        },

        clear: function(key) {
            if (this.errors.hasOwnProperty(key)) {
                delete this.errors[key]
            }
        }
    },
    computed: {
        
        // error: function() {
        //     var self = this;
        //     return {
        //             get: function(key) {
        //                 if (self.errors.hasOwnProperty(key)) {
        //                     return self.errors[key];
        //                 }
                            
        //             },
        //             set: function(key, val) {
        //                 self.errors[key] = val;
        //             },

        //             clear: function(key) {
        //                 if (self.errors.hasOwnProperty(key)) {
        //                     delete self.errors[key]
        //                 }
        //             }
                    
        //         }
        // }
    }

})