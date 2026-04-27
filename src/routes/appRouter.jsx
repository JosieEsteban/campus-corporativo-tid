import Confirmacion from "../pages/registration-management/Confirmacion";
import DetalleCurso from "../pages/registration-management/DetalleCurso";
import MisCursos from "../pages/registration-management/MisCursos";
import ProcesoInscripcion from "../pages/registration-management/ProcesoInscripcion";
import App from "../App";

export let routerApp = [
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/Confirmacion",
    element: <Confirmacion/>,
  },

  {
    path: "/DetalleCurso",
    element: <DetalleCurso/>,
  },

  {
    path: "/MisCursos",
    element: <MisCursos/>,
  },

  {
    path: "/ProcesoInscripcion",
    element: <ProcesoInscripcion/>,
  },
];
