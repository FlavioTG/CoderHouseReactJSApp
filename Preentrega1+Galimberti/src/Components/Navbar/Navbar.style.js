const viewport = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight
}

export const styles = {
    container: {
      display: viewport.width > 640 ? "flex" : "none",
      alignItems: "center",
      justifyContent: "space-between",
      height: 100,
      width: "100%",
      background: 'red'
    },
    imagenes: {
      margin:10,
      height: "70%"
    },
    categorias: {
      margin: 10,
      color: 'cyan',
    },
  };
  