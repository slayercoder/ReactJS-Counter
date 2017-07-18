class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count : 0};
        this.increment = this.increment.bind(this);
<<<<<<< HEAD
        this.decrement = this.decrement.bind(this);
=======
>>>>>>> a982ca6a69847379550bd35b1f274f2c2f159a59
        this.reset = this.reset.bind(this);
    }
    increment(){
        this.setState({count : (this.state.count) + 1});
    }
<<<<<<< HEAD
    decrement(){
        this.setState({count : (this.state.count) - 1});
    }
=======
>>>>>>> a982ca6a69847379550bd35b1f274f2c2f159a59
    reset(){
        this.setState({count : 0});
    }

    render(){
        return(
            <div>
                <h1>Welcome to Count Game</h1>
<<<<<<< HEAD
                <button onClick = {this.increment}>Increment!</button>
                <span>&nbsp; &nbsp;</span>
                <button onClick = {this.decrement}>Decrement!</button>
                <span>&nbsp; &nbsp;</span>
                <button onClick = {this.reset}>Reset</button>
                <br/>
=======
                <button onClick = {this.increment}>Increment By 1</button>
                <span>&nbsp; &nbsp;</span>
                <button onClick = {this.reset}>Reset</button>
>>>>>>> a982ca6a69847379550bd35b1f274f2c2f159a59
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