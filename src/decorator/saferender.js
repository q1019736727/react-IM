
export default function saferender(config) {
    return function(target) {
        let actions = [
            'componentWillMount',
            'render',
            'componentDidMount',
            'componentWillUpdate',
            'shouldComponentUpdate',
            'componentDidUpdate',
            'componentWillReceiveProps',
            'componentWillUnmount'
        ]
        actions.forEach((value,index)=>{
            console.log(value,index)
        })
        console.log(arguments)
    }

}