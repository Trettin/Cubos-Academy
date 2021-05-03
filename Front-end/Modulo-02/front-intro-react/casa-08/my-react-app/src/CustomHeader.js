export default function CustomHeader({titulo, corTexto, corFundo}) {
    return (
      <header style={{backgroundColor: corFundo}}>
        <div className="container-menu">
          <img src="https://image.flaticon.com/icons/png/512/1082/1082701.png" alt="logo" style={{width: '50px'}} />
          <h1 style={{color: corTexto}}>{titulo}</h1>
        </div>
      </header>
    );
  }