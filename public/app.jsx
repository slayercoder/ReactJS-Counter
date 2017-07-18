class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count : 0};
        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment(){
        this.setState({count : (this.state.count) + 1});
    }
    reset(){
        this.setState({count : 0});
    }

    render(){
        return(
            <div>
                <h1>Welcome to Count Game</h1>
                <button onClick = {this.increment}>Increment By 1</button>
                <span>&nbsp; &nbsp;</span>
                <button onClick = {this.reset}>Reset</button>
                <Result count = {this.state.count}/>
            </div>
        );
    }
}

const Result = function(props){
    return(
        <div>
            Count is {props.count}
        </div>
    );
}

ReactDOM.render(<Counter/>,document.getElementById('root'));