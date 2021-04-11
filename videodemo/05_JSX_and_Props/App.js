const App = () => (
  <div>
    <Alert>
      <h1>HELLO!!!!</h1>
    </Alert>
    <RandomChoice choices={['red', 'green', 'yellow']} />
    <RandomNumRange min={20} max={30} />
    <RandomNumRange />

    <Animal
      name="Stevie Chicks"
      species="Silkie Chicken"
      emoji="🐔"
      //boolean props, if you don't pass in value on ex. isCute will automatically be true
      isCute
    />
    <Animal name="Patrick" species="Red Fox" emoji="🦊" />
    <RandomNum />
    <RandomNum />
    <RandomNum />
    <Bouncer age={19} />
    <Bouncer age={11} />
    <Bouncer age={39} />
    <TodoList todos={['walk chickens', 'feed chickens', 'eat chickens']} />

  </div>
)



ReactDOM.render(<App />, document.getElementById("root"))
