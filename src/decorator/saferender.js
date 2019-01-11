
export default function saferender(config = function () {}) {
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
        
        actions.forEach((method)=>{

            let fn = method === 'shouldComponentUpdate' ? shouldComponentUpdate():function () {
                return null
            }
            //组件执行了生命周期的方法才有此方法,不然就是空的
            let unsafe = target.prototype[method] || fn
            target.prototype[method] = function () {
                try {
                    return unsafe.call(this,arguments)
                }catch (error) {
                    let report = {
                        displayName:target.name,
                        method:method,
                        state:this.state,
                        props:this.props,
                        message:error.stack,
                    }
                    if (config.errorHandler){
                        console.error('Error',report)
                    }
                    config.errorHandler = config.errorHandler || function(e){
                        console.error('Error',e)
                    }
                    config.errorHandler(report)
                }
            }
        })
    }

}

function shouldComponentUpdate() {
    return true
}