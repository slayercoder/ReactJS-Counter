class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count : 0};
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment(){
        this.setState({count : (this.state.count) + 1});
    }
    decrement(){
        this.setState({count : (this.state.count) - 1});
    }
    reset(){
        this.setState({count : 0});
    }

    render(){
        return(
            <div>
                <h1>Welcome to Count Game</h1>
                <button onClick = {this.increment}>Increment!</button>
                <span>&nbsp; &nbsp;</span>
                <button onClick = {this.decrement}>Decrement!</button>
                <span>&nbsp; &nbsp;</span>
                <button onClick = {this.reset}>Reset</button>
                <br/>
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