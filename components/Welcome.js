import React from 'react'

const Welcome = React.createClass({
	render() {
		return (
      <section className="column is-offset-6 is-4">
        <h1 className="title">Welcome</h1>
        <div className="col-xs-12">
        	<p>
        		Greetings you have successfully loged in.
        	</p>
        </div>
      </section>
    )
	},
})

export default Welcome