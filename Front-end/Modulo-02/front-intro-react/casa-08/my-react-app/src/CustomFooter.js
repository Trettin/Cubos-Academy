export default function CustomFooter({titulo, corTexto, corFundo}) {
    return (
      <footer style={{color: corTexto, backgroundColor: corFundo}}>
        {titulo}
      </footer>
    );
  }