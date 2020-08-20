<div className="container center">
<nav className="menu">
    {/* <h1 style={{backgroundImage:'url('+logo+')'}}
     className="menu__logo"></h1> */}
     

    <div className="menu__right">
        <ul className="menu__list">
            <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Home</a></li>
            <li className="menu__list-item"><a className="menu__link" href="#">About</a></li>
                  
            <li className="menu__list-item"><a className="menu__link" href="#">Contact</a></li>
            
        </ul>

        <button style={{backgroundImage:'url('+searchicon+')'}}className="menu__search-button"></button>

        <form className="menu__search-form hide" method="POST">
            <input className="menu__search-input" placeholder="Type and hit enter" />
        </form>
        </div>
        </nav>
        </div>

<div className="hg">
<div className ="App">
  <div className="q">
   <Navigation  />
   </div>
  {/* <h1 onClick={getData}>My Own Chef</h1> */}
  <form className="search-form" onSubmit={onSubmit}>
     {alert!=""&& <Alert alert={alert}/>}
  <input type ="text" placeholder="Search Food" autoComplete="off" onChange={onChange} value={query}/>
  <input type ="submit" value ="search"/>

  </form>
  <div className="recipes">
     {recipes!==[]&& recipes.map(recipe=><Recipe key={uuidv4()} recipe={recipe}/>)}
  </div>
</div>
</div>