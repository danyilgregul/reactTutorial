import React from 'react'; // no class = no need to import {Component}

const Ninjas = ({ninjas}) => { // no class => no render method. this is a function/ ui component
  // in functional comps props need to be passed down via () unlike class based where its attached to the instance of the comp
  // state = {} doesn't work here
  // const { ninjas } = props; not needed, because function parameter ({ninjas}) is based of of props
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div> {/* this.props.name not necessery due to being stored in name in line 6 */}
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
      </div>
    )
  })
  return (
    <div className="ninja-list">
      { ninjaList }
    </div>
    )
}

export default Ninjas;