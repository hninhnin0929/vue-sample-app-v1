export default {
    data() {
        return {
            msg: 'Hello World',
        }
    },
    created: function() {
        console.log('Printing from the Mixin')
    },
    methods: {
        displayMessage: function() {
            console.log('Now printing from a mixin function')
        },
    },
}