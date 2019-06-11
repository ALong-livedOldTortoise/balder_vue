import HelloWorld from "./components/HelloWorld";
import newClass from "./components/newClass";
import newLabel from "./components/newLabel";

const routers = [
  {
    path: '/',
    component: newClass
  },
  {
    path: '/newClass',
    component: newClass
  },
  {
    path: '/newLabel',
    component: newLabel
  },
  {
    path: '/HelloWorld',
    component: HelloWorld
  }
];
export default routers
