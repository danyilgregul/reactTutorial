import React from 'react'; // no class = no need to import {Component}

const Ninjas = ({ninjas, deleteNinja}) => { // no class => no render method. this is a function/ ui component
  // in functional comps props need to be passed down via () unlike class based where its attached to the instance of the comp
  // state = {} doesn't work here
  // const { ninjas } = props; not needed, because function parameter ({ninjas}) is based of of props
  // const ninjaList = ninjas.map(ninja => {
  //   if (ninja.age > 30) {  // if statement
  //   return (
  //       <div className="ninja" key={ninja.id}> {/*key lässt react instanzen von ninja genau zuordnen */}
  //         <div>Name: {ninja.name}</div> {/* this.props.name not necessery due to being stored in name in line 6 */}
  //         <div>Age: {ninja.age}</div>
  //         <div>Belt: {ninja.belt}</div>
  //       </div>
  //     )
  //   }
  // })
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 20 ? ( // ternary operator. syntax: condition ? (true) : (false)
      <div className="ninja" key={ninja.id}>
        <div>Name: { ninja.name }</div>
        <div>Age: { ninja.age }</div>
        <div>Belt: { ninja.belt }</div>
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>  {/*Arrow anonymisiert function damit (ninja.id) nicht automatisch ausgelöst wird */}
      </div>
    ) : null; 
  })
  return ( // ternary operator could also be placed instead ninjaList
    <div className="ninja-list">
      { ninjaList }
    </div>
  )
}

export default Ninjas;