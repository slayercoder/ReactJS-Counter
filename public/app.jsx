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
                <Increment eventHandle = {this.increment}/>
                <span>&nbsp; &nbsp;</span>
                <Decrement eventHandle = {this.decrement}/>
                <span>&nbsp; &nbsp;</span>
                <Reset eventHandle = {this.reset}/>
                <br/>
                <Result count = {this.state.count}/>
            </div>
        );
    }
}

const Result = function(props){
    return(
        <div>
            <br/>
            <h2>Counter : {props.count}</h2>
        </div>
    );
}
const Increment = function(props){
    return(
            <button onClick = {props.eventHandle}>Increment!</button>
        );
}

const Decrement = function(props){
        return(
            <button onClick = {props.eventHandle}>Decrement!</button>
        );
    }

const Reset = function(props){
    return(
        <button onClick = {props.eventHandle}>Reset!</button>
    );
}

ReactDOM.render(<Counter/>,document.getElementById('root'));