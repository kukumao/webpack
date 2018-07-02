const List = () => import('views/demo/list/index');

export default [{
  path: '/',
  redirect: 'list',
},
{
  path: 'list',
  component: List,
  meta: { keepAlive: true }
}];
